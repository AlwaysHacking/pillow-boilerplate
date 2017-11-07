import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routes from './app.routes'
import main from './main'

angular.module('app', [uirouter, main])
  .config(routes)
