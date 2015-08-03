(function (angular) {

    var app = angular.module('vvkp-app', ['ui.bootstrap', 'ngTagsInput']);

    app.controller('deputiesListCtrl', ['$scope', '$http', '$timeout', '$location', '$modal', function($scope, $http, $timeout, $location, $modal) {
        $scope.searchedDeputies = [];
        $scope.searchTags = [];
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

        $scope.getLaws = function(tagName) {
            var laws = [];
            $scope.laws.forEach(function(law) {
                law = angular.copy(law);
                if (law.tagYes === tagName) {
                    law.desc = law.descYes;
                    laws.push(law);
                }
                if (law.tagNo === tagName) {
                    law.desc = law.descNo;
                    laws.push(law);
                }
            });
            return laws;
        };

        $scope.getDeputyLaws = function(deputy, lawTagName) {
            var getDeputyLaws = function(deputy, lawTagName) {
                var law,
                    laws = [];
                if (!deputy.lawTagsInfo[lawTagName]) {
                    return [];
                }
                deputy.lawTagsInfo[lawTagName].laws.forEach(function(lawInfo) {
                    $scope.laws.forEach(function(lawObject) {
                        if (lawInfo === lawObject.id) {
                            law = angular.copy(lawObject);
                        }
                    });
                    if (law.tagYes === lawTagName) {
                        law.desc = law.descYes;
                        laws.push(law);
                    }
                    if (law.tagNo === lawTagName) {
                        law.desc = law.descNo;
                        laws.push(law);
                    }
                });
                return laws;
            }
            return getDeputyLaws(deputy, lawTagName).concat(getDeputyLaws(deputy, $scope.getLawTag(lawTagName).opposite));
        };

        $scope.isDeputyLawTagRateBigger = function(deputy, lawTagName) {
            var lawTag = $scope.getLawTag(lawTagName);
            if (!deputy.lawTagsInfo[lawTag.opposite]) {
                return true;
            } else {
                return deputy.lawTagsInfo[lawTag.name].rate > deputy.lawTagsInfo[lawTag.opposite].rate;
            }
        };

        $scope.deputyPage = function(deputy) {
            $scope.deputy = deputy;
            var modalInstance = $modal.open({
                templateUrl: 'template/deputy/page.html?vvkp-version-1.5.1',
                scope: $scope
            });
            modalInstance.rendered.then(function() {
                var domain = document.domain;
                if ((domain === 'zrada.today') || (domain === 'peremoga.today')) {
                    domain = 'vvkp.in.ua';
                }
                changeCommentsUrl(document.domain + '/#/deputy/' + deputy.name + '/' + deputy.id);
            });
            function changeCommentsUrl(newUrl) {
                parser = document.getElementById('deputy-page-comments');
                parser.innerHTML = '';
                parser.innerHTML='<div class="fb-comments" data-href="'+newUrl+'" data-num-posts="20" data-width="570"></div>';
                FB.XFBML.parse(parser);
            }
        };

        $scope.searchAddTag = function(text) {
            var added = false;
            for (var i in $scope.searchTags) {
                if ($scope.searchTags[i].name.indexOf(text) > -1) {
                    added = true;
                }
            }
            if (added) {
                return;
            }
            $scope.searchTags.push({name: text});
            $scope.searchReloadResults();
            resetLimit();
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
            $scope.searchTags = [];
            $scope.searchAddTag(nextParty.name);
        };

        $scope.updateUrl = function() {
            var codedString =  '';
            if ($scope.searchTags.length) {
                codedString += 'search/' + $scope.searchTags.map(function(tag){
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
                $scope.searchTags = [];
                path.split(',').forEach(function(tag) {
                    tag = transliterate(transliterate(tag), true);
                    if ($scope.searchTags.indexOf(tag) === -1) {
                        $scope.searchTags.push(tag);
                    }
                });
            }
        };

        $scope.searchReloadResults = function() {
            $scope.updateUrl();
            $scope.filtering = true;
            $timeout(function() {
                $scope.searchedDeputies = searchDeputies(angular.copy($scope.deputies), angular.copy($scope.parties), angular.copy($scope.lawTags), angular.copy($scope.searchTags));
                $scope.filtering = false;
            }, 50); // remove value after list rendering fixes
            return;
        };

        $scope.searchLoadSuggestions = function($query) {
            var types = {},
                typesNotEmpty = 0,
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
            for (var type in types) {
                typesNotEmpty++;
            }
            if (typesNotEmpty === 1) {
                max = 100;
            }
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

        function resetLimit(){
            $scope.totalDisplayed = 10;
        }

        function incLimit(){
            $scope.totalDisplayed += 10;
        }

        function searchDeputies(deputies, parties, lawTags, searchTags) {
            var searchString = '',
                hasLawTag = false,
                hasParty = false,
                parties_lc = arrayToLowerCase(parties, 'name'),
                lawTags_lc = arrayToLowerCase(lawTags, 'name'),
                statsParties = {},
                statsLawTags = {},
                stats = {parties: [], lawTags: [], partiesForTag: '', lawTagsForParty: ''};

            searchTags.forEach(function(option) {
                searchString = option.name.toLowerCase();
                deputies = deputies.filter(function(item) {
                    var tagIndex = item.lawTags.indexOf(searchString);
                    if (tagIndex > -1) {
                        if (!item.searchRate) {
                            item.searchRate = item.lawTagsInfo[item.lawTags[tagIndex]].rate;
                        }
                        return true;
                    }
                    if (item.party.toLowerCase().indexOf(searchString) > -1) return true;
                    if (item.name.toLowerCase().indexOf(searchString) > -1) return true;
                    if (item.district && item.district.text.toLowerCase().indexOf(searchString) > -1) return true;
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
            deputies.sort(function(a, b) {
                if (a.searchRate < b.searchRate) {
                    return 1;
                }
                if (a.searchRate > b.searchRate) {
                    return -1;
                }
                return a.name.localeCompare(b.name);
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
        $http.get('data/data.min.js?vvkp-version-1.5.1')
            .then(function(response){
                var binStr = atob(response.data),
                    data = JSON.parse(pako.inflate(binStr, { to: 'string' }));
                $scope.laws = data.laws;
                $scope.lawTags = data.lawTags;
                $scope.parties = data.parties;
                $scope.deputies = data.deputies;
                $scope.searchSuggestions = data.searchSuggestions;
                // Load default tag for domain
                if ($scope.searchTags.length === 0) {
                    if ($location.host().indexOf('zrada') !== -1) {
                        $scope.searchAddTag('шокін-ок');
                    } else if ($location.host().indexOf('peremoga') !== -1) {
                        $scope.searchAddTag('шокін-геть');
                    }
                }
                $scope.searchReloadResults();
            });

        window.onscroll = function(ev) {
            console.log('scrolling');
            console.log(window.innerHeight, window.scrollY, document.body.offsetHeight);
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
                $timeout(incLimit);
            }
        };

        $scope.getUrlData();
        resetLimit();
    }]);

    function transliterate(text, enToUk) {
        var
            uk = "щ    є  ж  ї  ё  х  ч  ш  ъ  ю  я  а б в г ґ д е э з і и ы й к л м н о п р с т у ф ц ь №".split(/ +/g),
            en = "shch ye zh yi yo kh ch sh '' iu ia a b v h g d e e z i y y j k l m n o p r s t u f c ' #".split(/ +/g),
            x;
        for (x = 0; x < uk.length; x++) {
            text = text.split(enToUk ? en[x] : uk[x]).join(enToUk ? uk[x] : en[x]);
            text = text.split(enToUk ? en[x].toUpperCase() : uk[x].toUpperCase()).join(enToUk ? uk[x].toUpperCase() : en[x].toUpperCase());
        }
        if (enToUk) {
            text = text.replace(/_/g, ' ').trim();
        } else {
            text = text.replace(/ /g, '_');
            if (text.indexOf("'") === text.length - 1) { // Support correct parsing for Facebook
                text += '_';
            }
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