/*function guardRoute (to, from, next) {
  console.log("STOP");
  if (window.confirm(`Navigate to ${to.path}?`)) {
    next()
  } else if (window.confirm(`Redirect to /baz?`)) {
    next('/baz')
  } else {
    next(false)
  }
}*/

// 1. Define route components.
// These can be imported from other files
// And these will be imported from other files
const BastidePage = { template: '<div>Bastide page {{ $route.params.pathparam }}</div>' }

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const bastideRouter = new VueRouter({
  // Gets rid of the hash. Only with a server.
  // http://router.vuejs.org/en/essentials/history-mode.html
  // mode: 'history',

  routes: [
    { path: '/:pathparam', component: BastidePage },
    { path: '/', component: BastidePage } // , beforeEnter: closeTile Marchera avec un serveur. Et history
  ],

/*  beforeRouteEnter (to, from, next) {
    console.log(to + " " + from + " " + next);
    getPost(to.params.id, (err, post) => {
      if (err) {
        // display some global error message
        console.log("Erreur");
        next(false)
      } else {
        console.log(post);
        next(vm => {
          vm.post = post
        })
      }
    })
  } */

});
