(function (angular) {
    var app = angular.module('vvkp-app',['ui.bootstrap', 'ngTagsInput']);

    app.controller('deputiesListCtrl', ['$scope', '$http', '$timeout', '$location', function($scope, $http, $timeout, $location) {
        $scope.list = [];
        $scope.tags = [];
        $scope.filtering = false;

        $scope.isPartySelected = function(text){
            return $scope.parties.indexOf(text) > -1;
        };

        $scope.isLawTagSelected = function(text){
            return indexOfTag($scope.tags, text) > -1;
        };

        $scope.addSearchTag = function(text){
            if ($scope.isLawTagSelected(text)) return;

            $scope.tags.push({name:text});
            $scope.reloadSearchResults();
        };

        $scope.updateUrl = function() {
            var codedString =  '';
            if ($scope.tags.length) {
                codedString += 'search/' + $scope.tags.map(function(tag){
                    return transliterate(tag.name);
                }).join(',');
            }
            $location.path(codedString);
        };

        $scope.getUrlData = function(){
            var path = $location.path(),
                tag;
            if (path.indexOf('/search/') === 0) {
                path = path.replace('/search/', '');
                $scope.tags = [];
                path.split(',').forEach(function(tag) {
                    tag = transliterate(transliterate(tag), true);
                    if ($scope.tags.indexOf(tag) === -1) {
                        $scope.tags.push(tag);
                    }
                });
            }
        };

        $scope.reloadSearchResults = function() {
            $scope.updateUrl();
            $scope.filtering = true;
            $timeout(function(){
                $scope.list = filterList(angular.copy($scope.deputies), angular.copy($scope.parties), angular.copy($scope.lawTags), angular.copy($scope.tags));
                $scope.filtering = false;
            }, 50); // remove value after list rendering fixes
            return;
        };

        function filterList(deputies, parties, lawTags, options) {
            var searchString = '',
                hasLawTag = false,
                hasParty = false,
                parties_lc = parties.join('~').toLowerCase().split('~'),
                lawTags_lc = lawTags.join('~').toLowerCase().split('~'),
                statsParties = {},
                statsLawTags = {},
                stats = {parties: [], lawTags: [], partiesForTag: '', lawTagsForParty: ''};

            angular.forEach(options, function(option, key) {
                searchString = option.name.toLowerCase();
                deputies = deputies.filter(function(item){
                    if (item.name.toLowerCase().indexOf(searchString) > -1) return true;
                    if (item.residence.toLowerCase().indexOf(searchString) > -1) return true;
                    if (item.party.toLowerCase().indexOf(searchString) > -1) return true;
                    if (indexOfTag(item.tags, searchString) > -1) return true;
                    return false;
                });
                if (parties_lc.indexOf(searchString) > -1) {
                    hasParty = true;
                    stats.lawTagsForParty = option.name;
                }
                if (lawTags_lc.indexOf(searchString) > -1) {
                    hasLawTag = true;
                    stats.partiesForTag = option.name;
                }
            });

            if (!hasParty) {
                angular.forEach(deputies, function(deputy, key) {
                    if (!deputy.party) return;
                    if (!statsParties[deputy.party]) {
                        statsParties[deputy.party] = 1;
                    } else {
                        statsParties[deputy.party]++;
                    }
                });
                for (var party in statsParties) {
                    stats.parties.push({
                        name: party,
                        count: statsParties[party]
                    });
                }
                stats.parties.sort(function(a, b) { return b.count - a.count; });
            }
            if (!hasLawTag) {
                angular.forEach(deputies, function(deputy, key) {
                    angular.forEach(deputy.tags, function(deputyTag, key) {
                        if (!statsLawTags[deputyTag.name]) {
                            statsLawTags[deputyTag.name] = 1;
                        } else {
                            statsLawTags[deputyTag.name]++;
                        }
                    });
                });
                for (var lawTags in statsLawTags) {
                    stats.lawTags.push({
                        name: lawTags,
                        count: statsLawTags[lawTags]
                    });
                }
                stats.lawTags.sort(function(a, b) { return b.count - a.count; });
            }
            $scope.searchStats = stats;

            return deputies;
        };

        function indexOfTag(tags, text){
            var tagIndex = -1;
            tags.forEach(function(tag, index){
                tagIndex = (tag.name.toLowerCase().indexOf(text) > -1)? index : tagIndex;
            });

            return tagIndex;
        }

        $http.get('data/data.min.js?vvkp-version-1.2.11')
            .then(function(response){
                  var binStr = atob(response.data);
                  $scope.deputies = JSON.parse(pako.inflate(binStr, { to: 'string' }));
                  $scope.lawTags = ['ретроград', 'шокін-ок', 'популіст'];
                  $scope.parties = ['Батьківщина', 'БЛОК ПЕТРА ПОРОШЕНКА', 'НАРОДНИЙ ФРОНТ', 'Опозиційний блок', 'Радикальна партія Олега Ляшка', 'САМОПОМІЧ'];
                  $scope.reloadSearchResults();
            });

        $scope.getUrlData();
    }]);

    function transliterate(text, enToUk) {
        var
            uk = "щ    є  ж  ї  ё  х  ц  ч  ш  ъ  ю  я  а б в ґ д е э з і и ы й л м н о п р т у ф к с г ь".split(/ +/g),
            en = "shch ye zh yi yo kh ts ch sh '' iu ia a b v g d e e z i y y j l m n o p r t u f k s h '".split(/ +/g),
            x;
        for (x = 0; x < uk.length; x++) {
            text = text.split(enToUk ? en[x] : uk[x]).join(enToUk ? uk[x] : en[x]);
            text = text.split(enToUk ? en[x].toUpperCase() : uk[x].toUpperCase()).join(enToUk ? uk[x].toUpperCase() : en[x].toUpperCase());
        }
        if (enToUk) {
            text = text.replace(/_/g, ' ');
        } else {
            text = text.replace(/ /g, '_');
        }
        return text;
    }

    // Emulation of popover-trigger="focus" for Firefox on MacOS
    // @link http://stackoverflow.com/questions/22916471/close-all-angular-js-bootstrap-popovers-with-click-anywhere-on-screen
    angular.element(document.body).bind('click', function (e) {
        var popups = document.querySelectorAll('.popover');
        if (popups) {
            for (var i = 0; i < popups.length; i++) {
                var popup = popups[i],
                    popupElement = angular.element(popup);
                if (popupElement[0].previousSibling != e.target && popupElement[0].previousSibling != e.target.parentElement) {
                    popupElement.scope().$parent.isOpen = false;
                    popupElement.remove();
                }
            }
        }
    });

})(window.angular);