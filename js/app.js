(function (angular) {
    
    //TODO: Make correct file structure.
    angular.module('vvkp-app', ['ui.bootstrap', 'ngTagsInput']);

    angular.module('vvkp-app')
      .controller('deputiesListCtrl', ['$scope', '$http', '$timeout', '$location', '$modal', function($scope, $http, $timeout, $location, $modal) {
        $scope.searchedDeputies = [];
        $scope.searchTags = [];
        $scope.searchedDeputiesFiltering = false;
        $scope.searchedDeputiesIncreasingLimit = false;

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

        $scope.getDeputy = function(name, id) {
            for (var i in $scope.deputies) {
                if (id && ($scope.deputies[i].id === id)) {
                    return $scope.deputies[i];
                } else if (!id && ($scope.deputies[i].name.indexOf(name) !== -1)) {
                    return $scope.deputies[i];
                }
            }
        };

        $scope.getDeputyLawStatus = function(deputy, law) {
            if (law.good && (deputy.lawTagsInfo[law.tagYes] && deputy.lawTagsInfo[law.tagYes].laws.indexOf(law.id) !== -1)) {
                return 'success';
            } else if (!law.good && (!deputy.lawTagsInfo[law.tagYes] || (deputy.lawTagsInfo[law.tagYes].laws.indexOf(law.id) === -1))) {
                return 'success';
            } else {
                return 'danger';
            }
        };

        $scope.getDeputyLaws = function(deputy, lawTagName) {
            var laws,
                getDeputyLaws = function(deputy, lawTagName) {
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
            };
            laws = getDeputyLaws(deputy, lawTagName).concat(getDeputyLaws(deputy, $scope.getLawTag(lawTagName).opposite));
            laws.sort(function(a, b) {
                var aStatus = ($scope.getDeputyLawStatus(deputy, a)),
                    bStatus = ($scope.getDeputyLawStatus(deputy, b));
                if ((aStatus === 'success') && (bStatus === 'danger')) {
                    return -1;
                } else if ((aStatus === 'danger') && (bStatus === 'success')) {
                    return 1;
                }
                if (a.no * 1 < b.no * 1) {
                    return -1;
                } else {
                    return 1;
                }
            });
            return laws;
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
            var modalInstance = $modal.open({
                templateUrl: 'template/deputy/page.html?vvkp-version-1.5.2',
                scope: $scope,
                animation: true
            });
            modalInstance.rendered.then(function() {
                var domain = document.domain;
                if ((domain === 'zrada.today') || (domain === 'peremoga.today')) {
                    domain = 'vvkp.in.ua';
                }
                changeCommentsUrl(document.domain + '/#/deputy/' + deputy.name + '/' + deputy.id);
            });
            modalInstance.result.then(function() {
                $scope.deputy = null;
                $scope.updateUrl();
            }, function() {
                $scope.deputy = null;
                $scope.updateUrl();
            });
            deputy.modalInstance = modalInstance;
            $scope.deputy = deputy;
            $scope.updateUrl();
            function changeCommentsUrl(newUrl) {
                parser = document.getElementById('deputy-page-comments');
                parser.innerHTML = '';
                parser.innerHTML='<div class="fb-comments" data-href="'+newUrl+'" data-num-posts="20" data-width="570"></div>';
                if (typeof FB !== 'undefined') {
                    FB.XFBML.parse(parser);
                }
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
            var path =  '';
            if ($scope.deputy) {
                path = 'deputy/' + transliterate($scope.deputy.name) + '/' + $scope.deputy.id;
            } else if ($scope.searchTags.length) {
                path = 'search/' + $scope.searchTags.map(function(tag){
                    return transliterate(tag.name);
                }).join(',');
            }
            $location.path(path);
        };

        $scope.getUrlData = function(){
            var path = $location.path().split('/'),
                action = path[1],
                tag;
            switch (action) {
                case 'deputy':
                    var deputy = $scope.getDeputy(transliterate(path[2], true), path[3]);
                    if (deputy) {
                        $scope.deputyPage(deputy);
                    }
                    break;
                case 'search':
                    $scope.searchTags = [];
                    if (path[2]) {
                        path[2].split(',').forEach(function(tag) {
                            tag = transliterate(transliterate(tag), true);
                            if ($scope.searchTags.indexOf(tag) === -1) {
                                $scope.searchTags.push({name: tag});
                            }
                        });
                    }
                    break;
            }
        };

        $scope.searchReloadResults = function() {
            searchedDeputiesLimitReset();
            $scope.updateUrl();
            $scope.searchedDeputiesFiltering = true;
            $timeout(function() {
                $scope.searchedDeputies = searchDeputies(angular.copy($scope.deputies), angular.copy($scope.parties), angular.copy($scope.lawTags), angular.copy($scope.searchTags));
                $scope.searchedDeputiesFiltering = false;
            }, 50);
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

        function searchedDeputiesLimitReset(){
            $scope.searchedDeputiesLimit = 10;
        }

        function searchedDeputiesLimitInc(){
            if ($scope.searchedDeputiesLimit >= $scope.searchedDeputies.length) {
                return;
            }
            $scope.searchedDeputiesIncreasingLimit = true;
            $timeout(function() {
                $scope.searchedDeputiesLimit += 100;
                $scope.searchedDeputiesIncreasingLimit = false;
            }, 50);
        }

        function searchDeputies(deputies, parties, lawTags, searchTags) {
            var searchString = '',
                hasLawTag = false,
                hasParty = false,
                searchTags_lc = [],
                parties_lc = arrayToLowerCase(parties, 'name'),
                lawTags_lc = arrayToLowerCase(lawTags, 'name'),
                statsParties = {},
                statsPartiesLawTags = [],
                statsPartiesLawCount = 0,
                statsLawTags = {},
                stats = {parties: [], lawTags: [], partiesForTag: '', lawTagsForParty: ''};

            searchTags.forEach(function(option) {
                searchString = option.name.toLowerCase();
                searchTags_lc.push(searchString);
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
                $scope.lawTags.forEach(function(lawTag) {
                    if (hasLawTag && searchTags_lc.indexOf(lawTag.name) === -1) {
                        return;
                    }
                    if (statsPartiesLawTags.indexOf(lawTag.name) !== -1) {
                        return;
                    }
                    statsPartiesLawTags.push(lawTag.name);
                    statsPartiesLawTags.push(lawTag.opposite);
                    statsPartiesLawCount += lawTag.laws;
                });
                statsPartiesLawTags.forEach(function(lawTagName) {
                    $scope.deputies.forEach(function(deputy) {
                        if (!deputy.party) {
                            return;
                        }
                        if (!deputy.lawTagsInfo[lawTagName]) {
                            return;
                        }
                        if (!statsParties[deputy.party]) {
                            statsParties[deputy.party] = {
                                success: 0,
                                danger: 0
                            };
                        }
                        var lawTag = $scope.getLawTag(lawTagName);
                        statsParties[deputy.party][lawTag.type] += deputy.lawTagsInfo[lawTagName].laws.length;
                    });
                });
                for (var party in statsParties) {
                    stats.parties.push({
                        name: party,
                        count: statsParties[party],
                        total: $scope.getParty(party).deputies * statsPartiesLawCount
                    });
                }
                stats.parties.sort(function(a, b) {
                    var type = 'success';
                    if (stats.partiesForTag) {
                        type = $scope.getLawTag(stats.partiesForTag).type;
                    }
                    return b.count[type] / b.total - a.count[type] / a.total;
                });
            }

            if (!hasLawTag) {
                $scope.lawTags.forEach(function(lawTag) {
                    statsLawTags[lawTag.name] = 0;
                });
                deputies.forEach(function(deputy) {
                    deputy.lawTags.forEach(function(lawTagName) {
                        var lawTag = $scope.getLawTag(lawTagName);
                        statsLawTags[lawTag.name] += deputy.lawTagsInfo[lawTag.name].laws.length;
                    });
                });
                for (var lawTagName in statsLawTags) {
                    var lawTag = $scope.getLawTag(lawTagName),
                        lawTagOpposite = $scope.getLawTag(lawTag.opposite),
                        count = {},
                        statsName = '',
                        statsTypes = [],
                        statsTotal = 0;
                    count[lawTag.type] = statsLawTags[lawTag.name];
                    count[lawTagOpposite.type] = statsLawTags[lawTagOpposite.name];
                    delete statsLawTags[lawTagOpposite.name];
                    if (count[lawTag.type] > count[lawTagOpposite.type]) {
                        statsName = lawTag.name;
                        statsTypes.push(lawTag.type, lawTagOpposite.type);
                    } else {
                        statsName = lawTagOpposite.name;
                        statsTypes.push(lawTagOpposite.type, lawTag.type);
                    }
                    if (hasParty) {
                        statsTotal = $scope.getLawTag(lawTag.name).laws * $scope.getParty(stats.lawTagsForParty).deputies;
                    } else {
                        statsTotal = $scope.getLawTag(lawTag.name).laws * $scope.deputies.length;
                    }
                    stats.lawTags.push({
                        name: statsName,
                        count: count,
                        total: statsTotal,
                        types: statsTypes
                    });
                }
                stats.lawTags.sort(function(a, b) {
                    var type;
                    if ($location.host().indexOf('zrada.today') !== -1) {
                        type = 'danger';
                    } else {
                        type = 'success';
                    }
                    return b.count[type] / b.total - a.count[type] / a.total;
                });
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
        $http.get('data/data' + MIN + '.json?vvkp-version-1.5.2')
            .then(function(response){
                $scope.laws = response.data.laws;
                $scope.lawTags = response.data.lawTags;
                $scope.parties = response.data.parties;
                $scope.deputies = response.data.deputies;
                $scope.searchSuggestions = response.data.searchSuggestions;
                // Parse URL
                $scope.getUrlData();
                // Load default tag for domain
                if ($scope.searchTags.length === 0) {
                    if ($location.host().indexOf('zrada.today') !== -1) {
                        $scope.searchAddTag('шокін-ок');
                    } else if ($location.host().indexOf('peremoga') !== -1) {
                        $scope.searchAddTag('шокін-геть');
                    }
                }
                // Filter
                $scope.searchReloadResults();
            });

        // Lazy loading
        window.onscroll = function() {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
                $timeout(searchedDeputiesLimitInc);
            }
        };
    }])
      .directive('stickyElm', function(){
        return {
            restrict: 'A',
            scope:{
                stickyClass: '@'
            },
            link: function(scope, elm, attrs){
                var isFixed = false;
                var posTop = elm[0].getBoundingClientRect().top + getWindowScroll();
                window.addEventListener('scroll', scrollHandler, false);
                function scrollHandler(){
                    if(!isFixed && getWindowScroll() > posTop ){
                        isFixed = true;
                        elm.addClass(scope.stickyClass);
                    } else if(isFixed && getWindowScroll() < posTop ) {
                        isFixed = false;
                        elm.removeClass(scope.stickyClass);
                    }
                }

                function getWindowScroll () {
                    return  window.scrollY;
                }

            }
        };
    });
    function transliterate(text, enToUk, test) {
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

window.onload = function() {

    // Secondary styles
    headAppendStyle('css/deputies.css');

    // Github
    headAppendScript('https://buttons.github.io/buttons.js', {'id': 'github-bjs'});

    // Facebook
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=576873339001045";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    switch (document.domain) {
        case 'peremoga.today':
            ga('create', 'UA-64746354-4', 'auto');
            break;
        case 'zrada.today':
            ga('create', 'UA-64746354-5', 'auto');
            break;
        case 'dev.vvkp.in.ua':
        case 'vvkp.dev':
            ga('create', 'UA-64746354-6', 'auto');
            break;
        default:
            ga('create', 'UA-64746354-1', 'auto');
            break;
    }
    ga('send', 'pageview');

};