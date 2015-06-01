'use strict';

var NewKanbanCardController = function ($scope, kanbanManipulator) {
    $scope.master = {title: '', details: '', cardColor: 'FFB5B5'};
    $scope.newCard = {};

    $scope.$on('AddNewCard', function(e, column){
        $scope.kanbanColumnName = column.name;
        $scope.column = column;
        $scope.newCard = angular.copy($scope.master);

        $scope.showNewCard = true;
    });


    $scope.addNewCard = function(newCard){
        if (!this.newCardForm.$valid){
            return false;
        }
        kanbanManipulator.addCardToColumn($scope.kanban, $scope.column, newCard.title, newCard.details, newCard.cardColor);
        $scope.newCard = angular.copy($scope.master);


        $scope.showNewCard = false;

        return true;
    };

};

angular.module('core').controller('NewKanbanCardController', NewKanbanCardController);
