function postAxios(blink) {
  axios.get(blink, {"toto":"titi"}) // Idem, test pour envoyer des données au serveur.
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
