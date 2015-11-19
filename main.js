angular.module('todoApp', ['ngMaterial'])
      .controller('toDoController', function($scope) {
            $scope.tasks = [
            {
                  text: 'Be the best in school'
            },{
                  text: 'Catch all the balls at baseball practice'
            },{
                  text: 'Train dog to sit'
            },{
                  text: 'Travel across campus'
            },{
                  text: 'Search for lost camera'
            },{
                  text: 'Understand angular'
            }
            ];

            $scope.addTask = function() {
                  $scope.tasks.push({text:$scope.taskText});
                  $scope.taskText ='';
            }

            $scope.checked = function($index){
                  $scope.tasks.splice($index, 1);
            }
      });
