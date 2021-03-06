'use strict';

angular.module('resourcesApp')
  .factory('User', function ($resource) {
    return $resource('/api/v1/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'user'
        }
      }
	  });
  });
