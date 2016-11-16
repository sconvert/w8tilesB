var firstone = new Vue({
  el: '#firstmessage',
  data: {
    message: 'Hello Vue.js!'
  }
})

var ex2 = new Vue({
  el: '#example-2',
  data: {
    message2: ''
  },
  created: function () {
    // `this` points to the vm instance
    //console.log('Message 2 created: ' + this.message2);
  },
  mounted: function () {
    // `this` points to the vm instance
  //  console.log('Message 2 mounted: ' + this.message2);
  },
  updated: function () {
    // `this` points to the vm instance
  //  console.log('Message 2 updated: ' + this.message2);
  },
  destroyed: function () {
    // `this` points to the vm instance
    console.log('Message 2 destroyed: ' + this.message2);
  }
})

Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })


var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var test3 = new Vue({
  el: "#test3",
  data: {
    dynamicId: ""
  }
})
var ex3 = new Vue({
  el: '#example-1',
  data: {
    checked: false
  }
})


$("#test").on("click", function() {
  ex2.message2 = "Test ok"; // ok
  test3.dynamicId = "Toto";
 //  $("#zut").val("test2"); // Marche pas
})
