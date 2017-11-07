import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './main.routes'
import welcome from './views/welcome'
import example from './components/example'
import ExampleService from './services/example'

export default angular.module('main', [uirouter])
  .config(routes)
  .component('welcome', welcome)
  .component('example', example)
  .service('ExampleService', ExampleService)
  .name

