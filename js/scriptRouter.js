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
  postAxios(to.path);
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
    { name: 'home', path: '/', component: BastidePage }, // J'ai essayé ici aussi d'envoer des données au serveur
    { path: '/:pathparam', component: BastidePage }
  ]
});
