// Only one Vue because I couldn't use router with links in one Vue and content in another
// Beside I couldn't find any reason why I shouldn't use only 1 Vue.

var vueBastide = new Vue({
  el: "#vueElement",

  data: {
    menuElementsList: [ /* 
      { titre: 'toto' },
      { titre: 'titi'}
    */],
    tilesVisible: true,
    tileW8: false,
    slidePageLeft: false
  },

  methods: {
    openTile: function (event) {
      // 2- Supprimer (si 2nd ouverture) la class slidePageLeft
      this.slidePageLeft = false;
      // 3- Mettre les items du menu dans le header
      var mylimenus = document.getElementById("menutiles"), itemsMenu=[];
      mylimenus = mylimenus.getElementsByTagName("li");
      for (i=0; i<mylimenus.length; i++) {
        itemsMenu[i] = { titre: mylimenus[i].getElementsByClassName("tiletitle")[0].innerHTML };
        }
      this.menuElementsList = itemsMenu;
      // 4- Masquer les tiles
      this.tilesVisible = false;
      // 5- Afficher la page 
      this.tileW8 = true;
    },
    closeTile: function (event) {
      this.menuElementsList = {};
      this.tilesVisible = true;
      this.slidePageLeft = true;
    },
    affectRoute: function (event) {
      this.$route.params.pathparam = "Nicolas",
      console.log(this.$route.params.pathparam);
    }
  },
  
  router: bastideRouter
})
