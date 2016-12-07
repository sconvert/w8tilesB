// Only one Vue because I couldn't use router with links in one Vue and content in another
// Beside I couldn't find any reason why I shouldn't use only 1 Vue.
// Ceci dit, il y a beaucoup de choses que je ne sais pas.

// Je renonce à utiliser les components pour le contenu. je crois avoir trouvé comment créer un composant dynamiquement
// https://jsfiddle.net/gm4uf485/2/
// Mais comment le supprimer/cacher/ ?
// Peut-être plus tard.

var emptyComponent = {
  template: '<div></div>'
}

// Bon ok, le component doit être déclaré AVANt la vue (pétard)
/*Vue.component('bastide-content-page', {
  template: '<div>My component</div>'
})*/

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

  /*components : {
    'bastide-content-page': emptyComponent
  },*/
  
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


/*Vue.component('table-message', {
  template: '<table id="discussionTable" class="tablesaw" data-tablesaw-mode="swipe" data-tablesaw-sortable data-minimap>\
    <thead>\
      <tr>\
        <th scope="col" data-tablesaw-sortable-col></th>\
        <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Patient</th>\
        <th scope="col">Lieu</th>\
        <th scope="col">Forfait</th>\
        <th scope="col" class="bigcell">Installation</th>\
        <th scope="col" class="bigcell">Dernière visite</th>\
        <th scope="col" data-tablesaw-sortable-col>OBS</th>\
        <th scope="col">O<sub>2</sub></th>\
        <th scope="col" data-tablesaw-sortable-col>IAH</th>\
        <th scope="col">P90</th>\
        <th scope="col">Fl/mn</th>\
        <th scope="col">EPW</th>\
        <th scope="col">Lien PDF</th>\
        <th scope="col">Lien Fabricant</th>\
      </tr>\
    </thead>\
    <tbody>',
'
})*/
