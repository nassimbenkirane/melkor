'use strict';

module.exports = {
  'GET /index': 'main.index',
  'GET /:page/delete': 'main.delete',
  'GET /:page/edit': 'main.edit',
  'POST /:page/edit': ['bodyParser', 'main.update'],
  'GET /:page': 'main.show',
  'POST /:page': ['bodyParser', 'main.create'],
};
