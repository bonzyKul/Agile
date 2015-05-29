'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication','$timeout',
	function($scope, Authentication, $timeout) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $scope.list1 = [
            {'title': 'new Initiative', 'drag': true},
            {'title': 'new Initiative1', 'drag': true},
            {'title': 'new Initiative2', 'drag': true},
            {'title': 'new Initiative3', 'drag': true},
            {'title': 'new Initiative4', 'drag': true}
        ];
        $scope.list2 = [];
        $scope.list3 = [];
        $scope.list4 = [];

        $scope.list5 = [
            { 'title': 'Item 1', 'drag': true },
            { 'title': 'Item 2', 'drag': true },
            { 'title': 'Item 3', 'drag': true },
            { 'title': 'Item 4', 'drag': true },
            { 'title': 'Item 5', 'drag': true },
            { 'title': 'Item 6', 'drag': true },
            { 'title': 'Item 7', 'drag': true },
            { 'title': 'Item 8', 'drag': true }
        ];

        // Limit items to be dropped in list1
        $scope.optionsList1 = {
            accept: function(dragEl) {
                if ($scope.list1.length >= 2) {
                    return false;
                } else {
                    return true;
                }
            }
        };

        $scope.kanbanInit = function () {
            var kanbanCol = $('.panel-body');
            kanbanCol.css('max-height', (window.innerHeight - 150) + 'px');

            //var kanbanColCount = parseInt(kanbanCol.length);
            //$('.container-fluid').css('min-width', (kanbanColCount * 350) + 'px');

            //draggableInit();

            $('.panel-heading').click(function() {
                var $panelBody = $(this).parent().children('.panel-body');
                $panelBody.slideToggle();
            });
        };

        //function draggableInit() {
        //    var sourceId;
        //
        //    $('[draggable=true]').bind('dragstart', function (event) {
        //        sourceId = $(this).parent().attr('id');
        //        event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
        //    });
        //
        //    $('.panel-body').bind('dragover', function (event) {
        //        event.preventDefault();
        //    });
        //
        //    $('.panel-body').bind('drop', function (event) {
        //        var children = $(this).children();
        //        var targetId = children.attr('id');
        //
        //        if (sourceId != targetId) {
        //            var elementId = event.originalEvent.dataTransfer.getData("text/plain");
        //
        //            console.log()
        //
        //            //$('#processing-modal').modal('toggle'); //before post
        //            //$('#processing-modal').modal('toggle');
        //
        //            // Post data
        //            setTimeout(function () {
        //                var element = document.getElementById(elementId);
        //                children.prepend(element);
        //                //$('#processing-modal').modal('toggle'); // after post
        //            }, 1000);
        //
        //        }
        //
        //        event.preventDefault();
        //    });
        //}
	}

]);


