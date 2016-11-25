
// Only one Vue because I couldn't use router with links in one Vue and content in another
// Beside I couldn't find any reason why I shouldn't use only 1 Vue.
// Ceci dit, il y a beaucoup de choses que je ne sais pas.

var vueBastide = new Vue({
  el: "#vueElement",

  data: {
    bastidePages: [
        { titre: "Accès Bastide", link: "bastide-access", classe: "tile-big tile-1bmh", activeClass: 'bactive'},
        { titre: "Aide à la décision", link: "aide-decision", classe: "tile-small tile-2bmh"},
        { titre: "Historique patients", link: "historique-patients", classe: "tile-small last tile-3bmh"},
        { titre: "Discussions", link: "discussions", classe: "tile-big last tile-4bmh"}
      ],
    tilesVisible: true,
    tileW8: false,
    slidePageLeft: false,
    contentPage: ""
  },

  methods: {
    openTile: function (blink) {
      // 2- Supprimer (si 2nd ouverture) la class slidePageLeft
      this.slidePageLeft = false;
      // 3- Masquer les tiles
      this.tilesVisible = false;
      // 4- Afficher la page
      this.tileW8 = true;
    },
    closeTile: function (event) {
      this.tilesVisible = true;
      this.slidePageLeft = true;
      this.$route.params.pathparam = "";
      //this.$route.params= { "prov": "vue" }; // Toujours pour envoyer des donnés au serveur.
    },
    changePageContent: function(content) {
      this.contentPage = content;
    }
  },

  router: bastideRouter
})
