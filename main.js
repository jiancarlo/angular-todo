angular.module('todoApp', [])
  .controller('toDoController', function($scope) {
    $scope.tasks = [
      {
      text: 'take out the dog'
    },{
      text: 'clean dishes'
    }
    ];

    $scope.completedTasks = [
      {
      text: 'do homework'
    },{
      text: 'run a mile'
    }
  ];


    $scope.addTask = function() {
      $scope.tasks.push({text:$scope.taskText});
      $scope.taskText ='';
    }

    $scope.checked = function(){
        $scope.completedTasks.push({text:$scope.task.text});
    }
  });
