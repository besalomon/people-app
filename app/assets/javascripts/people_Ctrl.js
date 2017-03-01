(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {

    $scope.people = [
      {
        name: "Cracker Lee",
        bio: "Teacher at Kepler",
        bioVisible:false
      },
      {
        name: "Salomon Beza",
        bio: "Full-stack web developper",
        bioVisible: false
      },
      {
        name: "Obed Bigirimana",
        bio: "Teacher at Kepler",
        bioVisible: false
      }
    ];

    $scope.addperson = function(name, bio) {
      if (name && bio) {
        var person = {
          name: name,
          bio: bio,
          bioVisible: false
        }
        $scope.people.push(person);
      }
    };

    $scope.showBio = function(person) {
      var index = $scope.people.indexOf(person);
      $scope.people[index].bioVisible = true;
    }
  $scope.countPeople = $scope.people.length;
    
    window.$scope = $scope;



  });
})();
