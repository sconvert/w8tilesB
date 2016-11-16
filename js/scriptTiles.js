var tile = new Vue({
  el: '.tileBastide',
  methods: {
    openTile: function (event) {
      pageContent.openpage = true;
    }
  }
})

// THE PAGE CONTENT
var pageContent = new Vue({
  el: '#bastide-content',
  data: {
    openpage: false,
    slidePageLeft: false
  },
  methods: {
    closeTile: function (event) {
      this.slidePageLeft = true;
    }
  }
})
