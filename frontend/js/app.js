(function (angular) {

    // TODO: Make correct file structure.
    angular.module('vvkp-app', ['ui.bootstrap', 'ngTagsInput', 'angular-progress-arc']);

    angular.module('vvkp-app')
      .controller('deputiesListCtrl', ['$scope', '$http', '$timeout', '$location', '$modal', function($scope, $http, $timeout, $location, $modal) {
        $scope.mainTabRadio;
        $scope.searchedDeputies = [];
        $scope.searchTags = [];
        $scope.searchedDeputiesFiltering = false;
        $scope.searchedDeputiesIncreasingLimit = false;

        $scope.$watch('mainTabRadio', function(val) {
            if (val !== undefined) {
                $scope.updateUrl();
            }
        });

        $scope.date = function(timestamp, format) {
            return new Date(timestamp * 1000).format(format);
        };

        $scope.getParty = function(name) {
            var parties = $scope.parties.filter(function(party) {
                return party.name.indexOf(name) > -1;
            });
            return parties.length ? parties[0] : false;
        };

        $scope.getLawTag = function(name) {
            var lawTags = $scope.lawTags.filter(function(lawTag) {
                return lawTag.name.indexOf(name) > -1;
            });
            return lawTags.length ? lawTags[0] : false;
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

        $scope.getDeputyFirstName = function(deputy) {
            var parts = deputy.name.split(' ');
            parts.shift();
            return parts.join(' ');
        };

        $scope.getDeputyLastName = function(deputy) {
            return deputy.name.split(' ')[0];
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
            } else if (lawTag.type === 'success') {
                return deputy.lawTagsInfo[lawTag.name].rate >= deputy.lawTagsInfo[lawTag.opposite].rate;
            } else {
                return deputy.lawTagsInfo[lawTag.name].rate > deputy.lawTagsInfo[lawTag.opposite].rate;
            }
        };

        $scope.deputyPage = function(deputy) {
            var modalInstance = $modal.open({
                templateUrl: 'template/deputy/page.html?vvkp-version-2.0.4',
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
                return;
                parser = document.getElementById('deputy-page-comments');
                parser.innerHTML = '';
                parser.innerHTML='<div class="fb-comments" data-href="'+newUrl+'" data-num-posts="20" data-width="570"></div>';
                if (typeof FB !== 'undefined') {
                    FB.XFBML.parse(parser);
                }
            }
        };

        $scope.searchAddTag = function(text) {
            var i,
                added = false;
            // Check if already searched
            for (i in $scope.searchTags) {
                if ($scope.searchTags[i].name.indexOf(text) > -1) {
                    added = true;
                }
            }
            if (added) {
                return;
            }
            // If is law tag than remove all the others
            var lawTag = $scope.getLawTag(text);
            if (lawTag) {
                i = 0;
                while (i < $scope.searchTags.length) {
                    if ($scope.searchTags[i].name === lawTag.opposite) {
                        $scope.searchTags.splice(i, 1);
                    } else {
                        i++;
                    }
                }
            }
            // If is party than remove all the others
            if ($scope.getParty(text)) {
                i = 0;
                while (i < $scope.searchTags.length) {
                    if ($scope.getParty($scope.searchTags[i].name)) {
                        $scope.searchTags.splice(i, 1);
                    } else {
                        i++;
                    }
                }
            }
            // Push new tag
            $scope.searchTags.push({name: text});
            $scope.searchReloadResults();
            window.scrollTo(0, document.getElementById('js-main-tab').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 10);
        };

        $scope.searchSetTags = function(tags) {
            $scope.mainTabRadio = 'deputies';
            $scope.searchTags = [];
            for (var i in tags) {
                $scope.searchTags.push({name: tags[i]});
            }
            $scope.searchReloadResults();
            window.scrollTo(0, document.getElementById('js-main-tab').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 10);
        };

        $scope.searchRemoveTag = function(text) {
            for (var i in $scope.searchTags) {
                if ($scope.searchTags[i].name.indexOf(text) > -1) {
                    $scope.searchTags.splice(i, 1);
                }
            }
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
            } else if ($scope.mainTabRadio === 'parties') {
                path = 'parties';
            } else if ($scope.mainTabRadio === 'laws') {
                path = 'laws';
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
                case 'laws':
                case 'parties':
                    $scope.mainTabRadio = action;
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
            if (!$scope.mainTabRadio) {
                $scope.mainTabRadio = 'deputies';
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
                max = 12,
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

        function searchedDeputiesLimitReset() {
            $scope.searchedDeputiesLimit = 12;
        }

        function searchedDeputiesLimitInc() {
            if ($scope.mainTabRadio !== 'deputies') {
                return;
            }
            if ($scope.searchedDeputiesLimit >= $scope.searchedDeputies.length) {
                return;
            }
            $scope.searchedDeputiesIncreasingLimit = true;
            $timeout(function() {
                var isNotMobile = (function() {
                    var check = false;
                    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                    return !check;
                })();
                $scope.searchedDeputiesLimit += isNotMobile ? 108 : 4;
                $scope.searchedDeputiesIncreasingLimit = false;
            }, 100);
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
                stats = {parties: [], lawTags: [], selectedParty: '', selectedLawTag: ''},
                dateNow = new Date().getTime() / 1000;

            searchTags.forEach(function(option) {
                searchString = option.name.toLowerCase();
                searchTags_lc.push(searchString);
                deputies = deputies.filter(function(deputy) {
                    var tagIndex;
                    // Check name
                    if (deputy.name.toLowerCase().indexOf(searchString) > -1) {
                        return true;
                    }
                    // Filter fired deputies
                    if (deputy.dateAuthorityStop && (deputy.dateAuthorityStop < dateNow)) {
                        return false;
                    }
                    // Check law tags
                    tagIndex = deputy.lawTags.indexOf(searchString);
                    if (tagIndex > -1) {
                        deputy.searchRate = deputy.lawTagsInfo[deputy.lawTags[tagIndex]].rate;
                        return true;
                    }
                    // Check party
                    if (deputy.party.toLowerCase().indexOf(searchString) > -1) return true;
                    // Check district
                    if (deputy.district && deputy.district.text.toLowerCase().indexOf(searchString) > -1) return true;
                    return false;
                });
                if (parties_lc.indexOf(searchString) > -1) {
                    hasParty = true;
                    stats.selectedParty = option.name;
                }
                if (lawTags_lc.indexOf(searchString) > -1) {
                    hasLawTag = true;
                    stats.selectedLawTag = option.name;
                }
            });
            // Sort deputies
            deputies.sort(function(a, b) {
                if (a.searchRate < b.searchRate) {
                    return 1;
                }
                if (a.searchRate > b.searchRate) {
                    return -1;
                }
                return a.name.localeCompare(b.name);
            });

            // Stats for parties
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
                if (stats.selectedLawTag) {
                    type = $scope.getLawTag(stats.selectedLawTag).type;
                }
                return b.count[type] / b.total - a.count[type] / a.total;
            });

            // Stats for law tags
            $scope.lawTags.forEach(function(lawTag) {
                statsLawTags[lawTag.name] = 0;
            });
            deputies.forEach(function(deputy) {
                deputy.lawTags.forEach(function(lawTagName) {
                    var lawTag = $scope.getLawTag(lawTagName),
                        rate = deputy.lawTagsInfo[lawTagName].rate;
                    if ((lawTag.type === 'success' && rate >= 50) || (lawTag.type === 'danger' && rate > 50)) {
                        statsLawTags[lawTagName] += 1;
                    }
                });
            });
            for (var lawTagName in statsLawTags) {
                var lawTag = $scope.getLawTag(lawTagName);
                stats.lawTags.push({
                    name: lawTag.name,
                    nameOpposite: lawTag.opposite,
                    count: statsLawTags[lawTag.name],
                    countOpposite: statsLawTags[lawTag.opposite],
                    type: lawTag.type
                });
            }
            stats.lawTags.sort(function(a, b) {
                return b.count - a.count;
            });
            stats.lawTags = stats.lawTags.slice(0, stats.lawTags.length / 2);

            stats.show = (!searchTags.length || hasLawTag || hasParty);
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
        $scope.laws = VVKP_DATA.laws;
        $scope.lawTags = VVKP_DATA.lawTags;
        $scope.parties = VVKP_DATA.parties;
        $scope.deputies = VVKP_DATA.deputies;
        $scope.searchSuggestions = VVKP_DATA.searchSuggestions;

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

        // Load the rest of scripts and styles
        loadSecondaryScriptsAndStyles()

        // Lazy loading
        window.onscroll = function() {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 400)) {
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

    angular.bootstrap(document, ['vvkp-app']);

    function loadSecondaryScriptsAndStyles() {

        // Github
        headAppendScript('https://buttons.github.io/buttons.js', {'id': 'github-bjs'});

        // Facebook page like
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

})(window.angular);
