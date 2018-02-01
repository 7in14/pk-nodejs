// built following https://hapijs.com/tutorials/plugins?lang=en_US
'use strict';

exports.register = function(server, options, next) {

  server.route({
    method: 'GET',
    path: '/ping',
    handler: function(request, reply) {

      reply('pong');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'api'
};
