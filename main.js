angular.module('todoApp', [])
  .controller('toDoController', ['$scope', function() {
    $scope.tododo = 4;
    $scope.tasks = [
      {
      text: 'take out the dog'
    },{
      text: 'clean dishes'
    }
    ];

    $scope.addTask = function() {
      $scope.tasks.push(text:$scope.taskText);
      $scope.taskText ='';
    }

  }]);
