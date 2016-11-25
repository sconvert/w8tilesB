/**
 * Signature of all route guards:
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 *
 */

// fermer la page si home
function extCloseTile (to, from) {
  // vueBastide null lors du premier chargement de la page d'accueil
  if (vueBastide != null) vueBastide.closeTile();
};

function runAxios(to, from) {
  console.log(to.path);
  var contenu = postAxios(to.path);
  console.log("CONTENU : " + contenu);
  
  vueBastide.openTile();
}

// 1. Define route components.
// These can be imported from other files
// And these will be imported from other files
const BastidePage = { 
  template: '<div id="bp">Bastide page {{ $route.params.pathparam }}</div>',
  watch: {
    '$route' (to, from) {
      if (to.name == "home") {
        extCloseTile(to, from);
      }
      else {
        runAxios(to, from)
      }
    }
  }
};

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const bastideRouter = new VueRouter({

  // Gets rid of the hash. Only with a server.
  // http://router.vuejs.org/en/essentials/history-mode.html
  mode: 'history',
  // Marche pas avec les gh-pages, 
  // et path="/" ne change pas l'url.
  routes: [
    { name: 'home', path: '/', component: BastidePage },
    { path: '/:pathparam', component: BastidePage }
  ]/*,
  watch: {
    '$route': function () {
      var self = this
      self.isLoading = true
      self.fetchData().then(function () {
        self.isLoading = false
      })
    }
  },
  methods: {
    fetchData: function (to, from) {
      console.log("TO " + to + " from " + from + " path " + this.path);
      var self = this
      return axios.get('/api/posts')
      .then(function (response) {
        self.posts = response.data.posts
      })
      .catch(function (error) {
        self.fetchError = error
      })*/
    //}
//    '$route' (to, from) {
  
      // react to route changes...
    //}
//  }
});
