var menuBastide = new Vue({
  el: "#menuBastide",
  data: {
    menulist: [ /*
      { titre: 'toto' },
      { titre: 'titi'}
    */],
    myMessage: 'Message from parent'
  }
})

var menuTiles = new Vue({
  el: '#menutiles',
  data: {
    liFromTiles: '',
    tileVisible: true
  },
  methods: {
    openTile: function (event) {
      // 0- Supprimer (si 2nd ouverture) la class slidePageLeft
      pageContent.slidePageLeft = false;
      // 1- Mettre les items du menu dans le header
      var mylimenus = document.getElementById("menutiles"), itemsMenu=[];
      mylimenus = mylimenus.getElementsByTagName("li");
      for (i=0; i<mylimenus.length; i++) {
        itemsMenu[i] = { titre: mylimenus[i].getElementsByClassName("tiletitle")[0].innerHTML };
        }
      menuBastide.menulist = itemsMenu;
      // 2- Masquer les tiles
      this.tileVisible = false;
      // 3- Afficher la page 
      pageContent.tileW8 = true;
    }
  }
})

// THE PAGE CONTENT
var pageContent = new Vue({
  el: '#bastideContent',
  data: {
    tileW8: false,
    slidePageLeft: false
  },
  methods: {
    closeTile: function (event) {
      menuBastide.menulist = {};
      menuTiles.tileVisible = true;
      this.slidePageLeft = true;
    },
    afterLeave: function(event) {
      console.log("afterleave");
    },
    beforeEnter: function(event) {
      console.log("beforeEnter");
    }
  }
})
