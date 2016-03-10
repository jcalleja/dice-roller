angular.module('starter.controllers', [])

.controller('LandingCtrl', ['$scope', '$state',
    function($scope, $state) {
        $scope.realResults = [];
        $scope.data = {
            dieNumSelect: {},
            dieTypeSelect: {},
            modifier: '',
            dieNumOptions: [{
                num: 1
            }, {
                num: 2
            }, {
                num: 3
            }, {
                num: 4
            }],
            dieTypeOptions: [{
                dieType: 'D4'
            }, {
                dieType: 'D6'
            }, {
                dieType: 'D8'
            }, {
                dieType: 'D10'
            }, {
                dieType: 'D12'
            }, {
                dieType: 'D20'
            }],
        };
        $scope.rollSubmit = function() {
            $scope.rollResults = '';
            $scope.arrayStore = {};
            $scope.modifiedResults = function(max, min) {
                $scope.rollResults = (Math.floor(Math.random() * max + min));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
            };

            switch ($scope.data.dieNumSelect) {
                case '1':
                    if ($scope.data.dieTypeSelect == 'D4') {
                        $scope.modifiedResults(4, 1);
                    }
                    if ($scope.data.dieTypeSelect == 'D6') {
                        $scope.modifiedResults(6, 1);
                    }
                    if ($scope.data.dieTypeSelect == 'D8') {
                        $scope.modifiedResults(8, 1);
                    }
                    if ($scope.data.dieTypeSelect == 'D10') {
                        $scope.modifiedResults(10, 1);
                    }
                    if ($scope.data.dieTypeSelect == 'D12') {
                        $scope.modifiedResults(12, 1);
                    }
                    if ($scope.data.dieTypeSelect == 'D20') {
                        $scope.modifiedResults(20, 1);
                        if ($scope.rollResults == 20) {
                            $scope.arrayStore = "CRIT!";
                        }
                        else {
                            $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
                        }
                    }
                    $scope.realResults.unshift($scope.arrayStore);
                    break;

                case '2':
                    if ($scope.data.dieTypeSelect == 'D4') {
                        $scope.modifiedResults(7, 2);
                    }
                    if ($scope.data.dieTypeSelect == 'D6') {
                        $scope.modifiedResults(11, 2);
                    }
                    if ($scope.data.dieTypeSelect == 'D8') {
                        $scope.modifiedResults(15, 2);
                    }
                    if ($scope.data.dieTypeSelect == 'D10') {
                        $scope.modifiedResults(19, 2);
                    }
                    if ($scope.data.dieTypeSelect == 'D12') {
                        $scope.modifiedResults(23, 2);
                    }
                    if ($scope.data.dieTypeSelect == 'D20') {
                        $scope.modifiedResults(39, 2);
                    }
                    $scope.realResults.unshift($scope.arrayStore);
                    break;


                case '3':
                    if ($scope.data.dieTypeSelect == 'D4') {
                        $scope.modifiedResults(10, 3);
                    }
                    if ($scope.data.dieTypeSelect == 'D6') {
                        $scope.modifiedResults(16, 3);
                    }
                    if ($scope.data.dieTypeSelect == 'D8') {
                        $scope.modifiedResults(22, 3);
                    }
                    if ($scope.data.dieTypeSelect == 'D10') {
                        $scope.modifiedResults(28, 3);
                    }
                    if ($scope.data.dieTypeSelect == 'D12') {
                        $scope.modifiedResults(34, 3);
                    }
                    if ($scope.data.dieTypeSelect == 'D20') {
                        $scope.modifiedResults(58, 3);
                    }
                    $scope.realResults.unshift($scope.arrayStore);
                    break;


                case '4':
                    if ($scope.data.dieTypeSelect == 'D4') {
                        $scope.modifiedResults(13, 4);
                    }
                    if ($scope.data.dieTypeSelect == 'D6') {
                        $scope.modifiedResults(21, 4);
                    }
                    if ($scope.data.dieTypeSelect == 'D8') {
                        $scope.modifiedResults(29, 4);
                    }
                    if ($scope.data.dieTypeSelect == 'D10') {
                        $scope.modifiedResults(37, 4);
                    }
                    if ($scope.data.dieTypeSelect == 'D12') {
                        $scope.modifiedResults(45, 4);
                    }
                    if ($scope.data.dieTypeSelect == 'D20') {
                        $scope.modifiedResults(77, 4);
                    }
                    $scope.realResults.unshift($scope.arrayStore);
                    break;
            }

            if ($scope.realResults.length == 5) {
                $scope.realResults.pop();
            }

        };
    }
]);