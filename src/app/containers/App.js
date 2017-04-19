var INITIAL_LIST = [
  {
    todoText: 'Practicing Angular',
    selected: false
  }
];
module.exports = {
  template: require('./App.html'),
  controller: todoCtrl
};

function todoCtrl($scope, $window) {
  $scope.todoList = INITIAL_LIST;

  $scope.todoAdd = function () {
    var todoTextNew = {
      todoText: $scope.todoInput,
      selected: false
    };
    if (!$scope.todoInput || $scope.todoInput === '') {
      $window.alert('You have to input todo task!!');
    } else {
      $scope.todoList.push(todoTextNew);
      $scope.todoInput = '';
    }
  };

  $scope.remove = function () {
    var oldList = $scope.todoList;
    $scope.todoList = [];
    angular.forEach(oldList, function (item) {
      if (!item.selected) {
        $scope.todoList.push(item);
      }
    });
  };

  $scope.selectedAll = function () {
    angular.forEach($scope.todoList, function (item) {
      item.selected = true;
    });
  };
}
