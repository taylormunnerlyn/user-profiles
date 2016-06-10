angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        data: { name: user.userName, password: user.password }
      })
      .then(function(response){
        return response;
      })
    },

    getFriends: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/profiles',
      })
      .then(function(response){
        return response;
      })
    }
  }
});
