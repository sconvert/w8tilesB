// 1. Define route components.
// These can be imported from other files
  const BastidePage = { template: '<div>Bastide page {{ $route.params.pathparam }}</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/:pathparam', component: BastidePage },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const bastideRouter = new VueRouter({
  routes // short for routes: routes
})
