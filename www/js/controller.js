angular.module('starter.controllers', [])

.controller('LandingCtrl', ['$scope', '$state', 
function($scope, $state){
    $scope.data = {
        dieNumSelect: {},
        dieTypeSelect: {},
        modifier: {},
        dieNumOptions: [
            {numID: '1', num: 1},
            {numID: '2', num: 2},
            {numID: '3', num: 3},
            {numID: '4', num: 4}
        ],
        dieTypeOptions: [
            {id: '1', dieType: 'D4'},
            {id: '2', dieType: 'D6'},
            {id: '3', dieType: 'D8'},
            {id: '4', dieType: 'D10'},
            {id: '5', dieType: 'D12'},
            {id: '6', dieType: 'D20'}
        ],
    };
}]);