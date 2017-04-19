var angular = require('angular');

var App = require('./app/containers/App');

require('angular-ui-router');
var routesConfig = require('./routes');

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('app', App);
