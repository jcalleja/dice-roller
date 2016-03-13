angular.module('starter.controllers', [])

.controller('LandingCtrl', ['$scope', '$state',
    function($scope, $state) {
        $scope.realResults = [];
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
            $scope.rollResults = [];
            $scope.die2 = [];
            $scope.addItUp = '';
            $scope.total = function() {
                var total = 0;
                for (var i = 0; i <= $scope.die2.length - 1; i++) {
                    total += $scope.die2[i];
                }
                $scope.addItUp = total;
            };

            $scope.modifiedResults = function(max, min) {
                $scope.rollResults = (Math.floor(Math.random() * ((max + 1) - min) + min));
                // $scope.arrayStore.unshift($scope.rollResults);
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
                            $scope.realResults.unshift(($scope.rollResults + " Critical!"));
                            break;
                        }
                        // else {
                        //     $scope.arrayStore.unshift($scope.rollResults);
                        //     break;
                        // }
                    }
                    $scope.realResults.unshift($scope.rollResults + " Total: " + ($scope.rollResults + $scope.data.modifier));
                    // $scope.realResults.unshift($scope.arrayStore);
                    break;

                case 2:
                    if ($scope.data.dieTypeSelect.dieType == 'D4') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(4, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D6') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(6, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D8') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(8, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D10') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(10, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D12') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(12, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D20') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(20, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    $scope.total();
                    $scope.realResults.unshift($scope.die2 + " Total: " + ($scope.addItUp + $scope.data.modifier));
                    break;


                case 3:
                    if ($scope.data.dieTypeSelect.dieType == 'D4') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(4, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D6') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(6, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D8') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(8, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D10') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(10, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D12') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(12, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D20') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(20, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    $scope.total();
                    $scope.realResults.unshift($scope.die2 + " Total: " + ($scope.addItUp + $scope.data.modifier));
                    break;


                case 4:
                    if ($scope.data.dieTypeSelect.dieType == 'D4') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(4, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D6') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(6, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D8') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(8, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D10') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(10, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D12') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(12, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    if ($scope.data.dieTypeSelect.dieType == 'D20') {
                        for (var i = 1; i <= $scope.data.dieNumSelect.num; i++) {
                            $scope.modifiedResults(20, 1);
                            $scope.die2.push($scope.rollResults);
                        }
                    }
                    $scope.total();
                    $scope.realResults.unshift($scope.die2 + " Total: " + ($scope.addItUp + $scope.data.modifier));
                    break;
            }

            if ($scope.realResults.length == 5) {
                $scope.realResults.pop();
            }

        };
    }
]);