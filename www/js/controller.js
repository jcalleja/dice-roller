angular.module('starter.controllers', [])

.controller('LandingCtrl', ['$scope', '$state',
    function($scope, $state) {
        $scope.realResults = [];
        $scope.selectedValue = "1";
        $scope.dieNumOptions = [{
            num: 1
        }, {
            num: 2
        }, {
            num: 3
        }, {
            num: 4
        }];
        $scope.data = {
            dieNumSelect: {},
            dieTypeSelect: {},
            modifier: '',
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
                $scope.rollResults = (Math.floor(Math.random() * ((max + 1) - min) + min));
                $scope.arrayStore = $scope.rollResults + $scope.data.modifier;
            };

            switch ($scope.data.dieNumSelect.num) {
                case 1:
                    if ($scope.data.dieTypeSelect.dieType == 'D4') {
                        $scope.modifiedResults(4, 1);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D6') {
                        $scope.modifiedResults(6, 1);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D8') {
                        $scope.modifiedResults(8, 1);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D10') {
                        $scope.modifiedResults(10, 1);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D12') {
                        $scope.modifiedResults(12, 1);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D20') {
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

                case 2:
                    if ($scope.data.dieTypeSelect.dieType == 'D4') {
                        $scope.modifiedResults(8, 2);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D6') {
                        $scope.modifiedResults(12, 2);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D8') {
                        $scope.modifiedResults(16, 2);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D10') {
                        $scope.modifiedResults(20, 2);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D12') {
                        $scope.modifiedResults(24, 2);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D20') {
                        $scope.modifiedResults(40, 2);
                    }
                    $scope.realResults.unshift($scope.arrayStore);
                    break;


                case 3:
                    if ($scope.data.dieTypeSelect.dieType == 'D4') {
                        $scope.modifiedResults(10, 3);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D6') {
                        $scope.modifiedResults(18, 3);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D8') {
                        $scope.modifiedResults(24, 3);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D10') {
                        $scope.modifiedResults(30, 3);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D12') {
                        $scope.modifiedResults(36, 3);
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D20') {
                        $scope.modifiedResults(60, 3);
                    }
                    $scope.realResults.unshift($scope.arrayStore);
                    break;


                case 4:
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