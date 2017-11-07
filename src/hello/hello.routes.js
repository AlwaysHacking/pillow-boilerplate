routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  // An array of state definitions
  const states = [
    {
      name: 'welcome',
      url: '/',
      component: 'welcome'
    },
    {
      name: 'example',
      url: '/example',
      component: 'example'
    }
  ]
  // Loop over the state definitions and register them
  states.forEach(state => $stateProvider.state(state))
}
