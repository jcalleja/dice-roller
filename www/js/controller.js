angular.module('starter.controllers', [])

.controller('LandingCtrl', ['$scope', '$state',
    function($scope, $state) {
        $scope.realResults = [];
        $scope.data = {
            dieNumSelect: {},
            dieTypeSelect: {},
            modifier: '',
            dieNumOptions: [{
                numID: '1',
                num: 1
            }, {
                numID: '2',
                num: 2
            }, {
                numID: '3',
                num: 3
            }, {
                numID: '4',
                num: 4
            }],
            dieTypeOptions: [{
                id: 1,
                dieType: 'D4'
            }, {
                id: 2,
                dieType: 'D6'
            }, {
                id: 3,
                dieType: 'D8'
            }, {
                id: 4,
                dieType: 'D10'
            }, {
                id: 5,
                dieType: 'D12'
            }, {
                id: 6,
                dieType: 'D20'
            }],
        };
        $scope.rollSubmit = function(form) {
            $scope.rollResults = '';
            $scope.arrayStore = {};

            $scope.modifiedResults = function() {

            };

            if ($scope.realResults.length == 5) {
                $scope.realResults.pop();
            }

            if ($scope.data.dieNumSelect == 1 && $scope.data.dieTypeSelect == 6) {
                $scope.rollResults = (Math.floor(Math.random() * 20 + 1));
                if ($scope.rollResults == 20) {
                    $scope.arrayStore = "CRIT!";
                    $scope.realResults.unshift($scope.arrayStore);
                }
                else {
                    $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                    $scope.realResults.unshift($scope.arrayStore);
                }
            }
            else
            if ($scope.data.dieNumSelect == 2 && $scope.data.dieTypeSelect == 6) {
                $scope.rollResults = (Math.floor(Math.random() * 39 + 2));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 3 && $scope.data.dieTypeSelect == 6) {
                $scope.rollResults = (Math.floor(Math.random() * 58 + 3));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 4 && $scope.data.dieTypeSelect == 6) {
                $scope.rollResults = (Math.floor(Math.random() * 77 + 4));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 1 && $scope.data.dieTypeSelect == 5) {
                $scope.rollResults = (Math.floor(Math.random() * 12 + 1));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 2 && $scope.data.dieTypeSelect == 5) {
                $scope.rollResults = (Math.floor(Math.random() * 23 + 2));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 3 && $scope.data.dieTypeSelect == 5) {
                $scope.rollResults = (Math.floor(Math.random() * 34 + 3));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 4 && $scope.data.dieTypeSelect == 5) {
                $scope.rollResults = (Math.floor(Math.random() * 45 + 4));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 1 && $scope.data.dieTypeSelect == 4) {
                $scope.rollResults = (Math.floor(Math.random() * 10 + 1));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 2 && $scope.data.dieTypeSelect == 4) {
                $scope.rollResults = (Math.floor(Math.random() * 19 + 2));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 3 && $scope.data.dieTypeSelect == 4) {
                $scope.rollResults = (Math.floor(Math.random() * 28 + 3));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 4 && $scope.data.dieTypeSelect == 4) {
                $scope.rollResults = (Math.floor(Math.random() * 37 + 4));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 1 && $scope.data.dieTypeSelect == 3) {
                $scope.rollResults = (Math.floor(Math.random() * 8 + 1));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 2 && $scope.data.dieTypeSelect == 3) {
                $scope.rollResults = (Math.floor(Math.random() * 15 + 2));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 3 && $scope.data.dieTypeSelect == 3) {
                $scope.rollResults = (Math.floor(Math.random() * 22 + 3));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 4 && $scope.data.dieTypeSelect == 3) {
                $scope.rollResults = (Math.floor(Math.random() * 29 + 4));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 1 && $scope.data.dieTypeSelect == 2) {
                $scope.rollResults = (Math.floor(Math.random() * 6 + 1));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 2 && $scope.data.dieTypeSelect == 2) {
                $scope.rollResults = (Math.floor(Math.random() * 11 + 2));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 3 && $scope.data.dieTypeSelect == 2) {
                $scope.rollResults = (Math.floor(Math.random() * 16 + 3));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 4 && $scope.data.dieTypeSelect == 2) {
                $scope.rollResults = (Math.floor(Math.random() * 21 + 4));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 1 && $scope.data.dieTypeSelect == 1) {
                $scope.rollResults = (Math.floor(Math.random() * 4 + 1));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 2 && $scope.data.dieTypeSelect == 1) {
                $scope.rollResults = (Math.floor(Math.random() * 7 + 2));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 3 && $scope.data.dieTypeSelect == 1) {
                $scope.rollResults = (Math.floor(Math.random() * 10 + 3));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
            else
            if ($scope.data.dieNumSelect == 4 && $scope.data.dieTypeSelect == 1) {
                $scope.rollResults = (Math.floor(Math.random() * 13 + 4));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                $scope.realResults.unshift($scope.arrayStore);
            }
        };
    }
]);