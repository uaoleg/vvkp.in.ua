(function (angular) {
    var app = angular.module('vvkp-app',['ui.bootstrap', 'ngTagsInput']);

    app.controller('deputiesListCtrl', ['$scope', '$http', '$timeout', '$location', function($scope, $http, $timeout, $location) {
        $scope.list = [];
        $scope.tags = [];
        $scope.filtering = false;

        $scope.getParty = function(name) {
            var parties = $scope.parties.filter(function(party) {
                return party.name.indexOf(name) > -1;
            });
            return parties[0];
        };

        $scope.getLawTag = function(name) {
            var lawTags = $scope.lawTags.filter(function(lawTag) {
                return lawTag.name.indexOf(name) > -1;
            });
            return lawTags[0];
        };

        $scope.searchAddTag = function(text) {
            var added = false;
            for (var i in $scope.tags) {
                if ($scope.tags[i].name.indexOf(text) > -1) {
                    added = true;
                }
            }
            if (added) {
                return;
            }
            $scope.tags.push({name: text});
            $scope.searchReloadResults();
        };

        $scope.searchNextParty = function(partyName, dir) {
            var nextParty;
            if (!dir) {
                dir = 1;
            }
            for (var i in $scope.parties) {
                i *= 1;
                if ($scope.parties[i].name === partyName) {
                    if (i + dir < 0) {
                        nextParty = $scope.parties[$scope.parties.length - 1];
                    } else if (i + dir < $scope.parties.length) {
                        nextParty = $scope.parties[i + dir];
                    } else if (dir > 0) {
                        nextParty = $scope.parties[0];
                    }
                    break;
                }
            }
            $scope.tags = [];
            $scope.searchAddTag(nextParty.name);
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

        $scope.searchReloadResults = function() {
            $scope.updateUrl();
            $scope.filtering = true;
            $timeout(function(){
                $scope.list = filterList(angular.copy($scope.deputies), angular.copy($scope.parties), angular.copy($scope.lawTags), angular.copy($scope.tags));
                $scope.filtering = false;
            }, 50); // remove value after list rendering fixes
            return;
        };

        $scope.searchLoadSuggestions = function($query) {
            var types = {},
                max = 10,
                matchedCount = 0,
                results = [];
            $scope.searchSuggestions.forEach(function(tag) {
                var matched = tag.name.toLowerCase().indexOf($query.toLowerCase()) !== -1;
                if (matched) {
                    if (!types[tag.type]) {
                        types[tag.type] = [];
                    }
                    types[tag.type].push(tag);
                    matchedCount++;
                }
                return matched;
            });
            while (true) {
                for (var type in types) {
                    var tag = types[type].shift();
                    if (tag) {
                        results.push(tag);
                    }
                }
                if (results.length >= max || results.length >= matchedCount) {
                    break;
                }
            }
            results.sort(function(a, b) {
                return a.typeOrder - b.typeOrder;
            });
            return results;
        };

        function filterList(deputies, parties, lawTags, options) {
            var searchString = '',
                hasLawTag = false,
                hasParty = false,
                parties_lc = arrayToLowerCase(parties, 'name'),
                lawTags_lc = arrayToLowerCase(lawTags, 'name'),
                statsParties = {},
                statsLawTags = {},
                stats = {parties: [], lawTags: [], partiesForTag: '', lawTagsForParty: ''};

            options.forEach(function(option) {
                searchString = option.name.toLowerCase();
                deputies = deputies.filter(function(item) {
                    if (item.name.toLowerCase().indexOf(searchString) > -1) return true;
                    if (item.residence.toLowerCase().indexOf(searchString) > -1) return true;
                    if (item.party.toLowerCase().indexOf(searchString) > -1) return true;
                    if (arrayToLowerCase(item.lawTags).indexOf(searchString) > -1) return true;
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
                deputies.forEach(function(deputy) {
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
                        count: statsParties[party],
                        total: $scope.getParty(party).deputies
                    });
                }
                stats.parties.sort(function(a, b) { return b.count - a.count; });
            }

            if (!hasLawTag) {
                deputies.forEach(function(deputy) {
                    deputy.lawTags.forEach(function(lawTag) {
                        if (!statsLawTags[lawTag]) {
                            statsLawTags[lawTag] = 1;
                        } else {
                            statsLawTags[lawTag]++;
                        }
                    });
                });
               for (var lawTag in statsLawTags) {
                    var total = stats.lawTagsForParty ? $scope.getParty(stats.lawTagsForParty).deputies : deputies.length,
                        lawTagOpposite = $scope.getLawTag(lawTag).opposite;
                    stats.lawTags.push({
                        name: lawTag,
                        count: statsLawTags[lawTag],
                        percent1: statsLawTags[lawTag] * 100 / total,
                        percent2: statsLawTags[lawTagOpposite] * 100 / total
                    });
                }
                stats.lawTags.sort(function(a, b) { return b.count - a.count; });
                stats.lawTags = stats.lawTags.slice(0, $scope.lawTags.length / 2);
            }
            $scope.searchStats = stats;

            return deputies;
        };

        function arrayToLowerCase(array, field) {
            return array.map(function(item) {
                if (field) {
                    return item[field];
                } else {
                    return item;
                }
            }).join('~').toLowerCase().split('~');
        };

        // Load data
        $http.get('data/data.min.js?vvkp-version-1.2.12')
            .then(function(response){
                var binStr = atob(response.data),
                    data = JSON.parse(pako.inflate(binStr, { to: 'string' }));
                $scope.deputies = data.deputies;
                $scope.lawTags = data.lawTags;
                $scope.parties = data.parties;
                $scope.searchSuggestions = data.searchSuggestions;
                $scope.searchReloadResults();
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