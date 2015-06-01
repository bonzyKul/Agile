'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','$location','kanbanRepository','$window',
	function($scope, Authentication, Menus, $location,kanbanRepository,$window, $routeParams) {
		$scope.authentication = Authentication;
        $scope.colorOptions = ['FFFFFF','DBDBDB','FFB5B5', 'FF9E9E', 'FCC7FC', 'FC9AFB', 'CCD0FC', '989FFA', 'CFFAFC', '9EFAFF', '94D6FF','C1F7C2', 'A2FCA3', 'FAFCD2', 'FAFFA1', 'FCE4D4', 'FCC19D'];
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

        $scope.shouldRedirectToHome = function() {
          if($scope.authentication.user) {
            $location.path('/');
          } else {
              $location.path('#!/signin');
          }
        };

        //// <-------- Handling different events in this block ---------------> //
        $scope.$on('NewKanbanAdded', function(){
            $scope.showNewKanban = false;
            $scope.kanban = kanbanRepository.getLastUsed();
            $scope.allKanbans = Object.keys(kanbanRepository.all());
            //$scope.selectedToOpen = $scope.kanban.name;
        });

        $scope.$on('ColumnsChanged', function(){
            $scope.columnWidth = calculateColumnWidth($scope.kanban.columns.length);
        });

        function calculateColumnWidth(numberOfColumns){
            return Math.floor((100 / numberOfColumns) * 100) / 100;
        };

        $scope.kanbanMenu = {};
        $scope.kanbanMenu.openNewKanban = function(){
            $scope.$broadcast('OpenNewKanban', allKanbanNames(kanbanRepository));
            //$location.path('/newk');
        };

        function allKanbanNames(kanbanRepository){
            return Object.keys(kanbanRepository.all());
        };
        //$scope.kanbanMenu.delete = function(){
        //    if (confirm('You sure you want to delete the entire Kanban?')){
        //        kanbanRepository.remove($scope.kanban.name);
        //        var all = allKanbanNames(kanbanRepository);
        //
        //        if (all.length > 0){
        //            kanbanRepository.setLastUsed(all[0]);
        //        } else {
        //            kanbanRepository.setLastUsed(undefined);
        //        }
        //        $scope.kanban = undefined;
        //        $scope.allKanbans = Object.keys(kanbanRepository.all());
        //
        //        if ($scope.allKanbans.length > 0){
        //            $scope.switchToKanban($scope.allKanbans[0]);
        //        }
        //
        //        $scope.switchToList = $scope.allKanbans.slice(0);
        //        $scope.switchToList.splice(0,0,'Switch to ...');
        //    }
        //    return false;
        //};

        //var currentKanban = new Kanban('Kanban name', 0);
        //var loadedRepo = kanbanRepository.load();
        //
        //if (loadedRepo){
        //    if ($routeParams.kanbanName != undefined && kanbanRepository.get($routeParams.kanbanName)) {
        //        currentKanban = kanbanRepository.get($routeParams.kanbanName);
        //    } else if (kanbanRepository.getLastUsed() != undefined	) {
        //        currentKanban = kanbanRepository.getLastUsed();
        //        $location.path('/kanban/' + currentKanban.name);
        //    }
        //}
        //
        //$scope.kanban = currentKanban;
        //$scope.allKanbans = Object.keys(kanbanRepository.all());
        //$scope.selectedToOpen = $scope.newName = currentKanban.name;
        //
        //$scope.$watch('kanban', function(){
        //    kanbanRepository.save();
        //}, true);
        //
        //$scope.columnHeight = angular.element($window).height() - 110;
        //$scope.columnWidth = calculateColumnWidth($scope.kanban.columns.length);

        $scope.triggerOpen = function(){
            $scope.$broadcast('TriggerOpenKanban');
        };
    }
]);
