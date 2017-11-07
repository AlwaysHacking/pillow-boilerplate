import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './app.routes'
import main from './main'

angular.module('app', [uirouter, main])
  .config(routes)
