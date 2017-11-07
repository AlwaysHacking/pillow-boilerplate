import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './app.routes'
import hello from './hello'

angular.module('app', [uirouter, hello])
  .config(routes)
