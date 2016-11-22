
function extCloseTile () {
  if (vueBastide != null) vueBastide.closeTile();
};

// 1. Define route components.
// These can be imported from other files
// And these will be imported from other files
const BastidePage = { template: '<div>Bastide page {{ $route.params.pathparam }}</div>' };

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const bastideRouter = new VueRouter({

  // Gets rid of the hash. Only with a server.
  // http://router.vuejs.org/en/essentials/history-mode.html
  mode: 'history',

  routes: [
    { name:'home', path: '/', component: BastidePage, beforeEnter: extCloseTile },
    { path: '/:pathparam', component: BastidePage }
  ]
});
