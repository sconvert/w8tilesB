function postAxios(blink) {
  axios.get(blink) //, {name: 'Melodie', pass: 'axiospass'})
  .then(function (response) {
    console.log(response.data);
    vueBastide.changePageContent(response.data);
  })
  .catch(function (error) {
    console.log("erreur");
    console.log(error);
    return "erreur";
  });
}

/*axios.get('/data/server.js')
    .then(function (response) {
      console.log(response.data);
      
      document.getElementById('people').innerHTML = response.data.map(function (person) {
        console.log("return " + person.name);
        return (
          '<li class="row">' +
            '<img src="https://avatars.githubusercontent.com/u/' + person.avatar + '?s=50" class="col-md-1"/>' +
            '<div class="col-md-3">' +
              '<strong>' + person.name + '</strong>' +
              '<div>Github: <a href="https://github.com/' + person.github + '" target="_blank">' + person.github + '</a></div>' +
              '<div>Twitter: <a href="https://twitter.com/' + person.twitter + '" target="_blank">' + person.twitter + '</a></div>' +
            '</div>' +
          '</li><br/>'
        );
      }).join('');
    })
    .catch(function (err) {
      document.getElementById('people').innerHTML = '<li class="text-danger">' + err.message + '</li>';
    });*/
