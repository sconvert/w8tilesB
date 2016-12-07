////////////////////////////////////////////////////////
// Place sur tous les tds de class bpatient (cellule contenant le nom du patient)
// La fonction permettant d'afficher un tr supplémentaire pour montrer le formulaire de messagerie
////////////////////////////////////////////////////////
function initDiscussionTable() {
  var bpatients = document.getElementsByClassName("bpatient");

  for(var x = 0; x < bpatients.length; x++) {
      bpatients[x].addEventListener("click", function() {
        var nomPatient = this.innerHTML;
        if (document.getElementById("trcontent")) {
          var trnode = document.getElementById("trcontent");
          if (this.parentNode.nextSibling == trnode) {// Click sur même patient : messagerie déjà ouverte
            if (trnode.style.display == "")
              trnode.style.display = "none";
            else
              trnode.style.display = "";
          }
          else {
            trnode.style.display = "";
          }
        }
        else {
          var nbtd = getcolspans(this.parentNode);
          var trnode = createNewTR(nbtd)
        }
        this.parentNode.parentNode.insertBefore(trnode, this.parentNode.nextSibling);
        document.getElementById("tdcontent").innerHTML = newTRContent(nomPatient);

      },false);
  }
}

////////////////////////////////////////////////////////
// Fonction appelée lors de la soumission du formulaire de messagerie
// Pour l'instant, se contente de cacher le tr du formulaire 
// et d'afficher un message en haut de l'écran
////////////////////////////////////////////////////////
function sendMessage() {
  //console.log("send message " + document.getElementById("message").style.opacity);
  document.getElementById("trcontent").style.display = "none";
  document.getElementById("message").innerHTML = "Message envoyé";
  document.getElementById("message").style.opacity = 1;
  setTimeout(function(){ document.getElementById("message").style.opacity = 0; }, 5000);
  return false;
}

////////////////////////////////////////////////////////
// Calcule le colspan du td contenant le message 
// en fonction du nomnbre de cellules affichées par tablesaw.
////////////////////////////////////////////////////////
function getcolspans(mytr) {
  var nbcolspan = mytr.children.length;
  for (i=0; i<mytr.children.length; i++) {
    if (mytr.children[i].getAttribute("class").indexOf("tablesaw-cell-hidden") != -1 ) nbcolspan -= 1;
  }

  return nbcolspan;
};

////////////////////////////////////////////////////////
// Retourne le contenu de la cellule du formulaire
////////////////////////////////////////////////////////
function newTRContent(patientName) {
  content = "";
  content += "<form class='contact-form' method='post' onsubmit='return sendMessage()'>";
  content += "<label>Adresse</label>";
  content += '<input name="Name" id="Name" placeholder="Adresse destinataire" type="text">';
  content += '<label>Votre Message</label>';
  content += '<textarea name="Message" id="Message" placeholder="Votre message ici"></textarea>';
  content += '<input id="submit" name="submit" value="Envoyer" class="button" type="submit">';
  content += "</form>";

  return content;
}

////////////////////////////////////////////////////////
// Crée puis retourne le tr contenant le formulaire
////////////////////////////////////////////////////////
function createNewTR(lengthcolspan)
{
  var newNode = document.createElement("tr");
  var tdnode = document.createElement("td");
  var colspan = document.createAttribute("colspan");
  var tdnodeid = document.createAttribute("id");
  var trnodeid = document.createAttribute("id");

  colspan.value = lengthcolspan;
  tdnodeid.value = "tdcontent";
  trnodeid.value = "trcontent";

  tdnode.setAttributeNode(colspan);
  tdnode.setAttributeNode(tdnodeid);
  newNode.setAttributeNode(trnodeid);
  newNode.appendChild(tdnode);
  return newNode;
}

////////////////////////////////////////////////////////
// Lorsque la fenêtre est redimmensionnée, le nombre de cellules
// affichées par tablesaw est modifié. Cette fonction met à jour
// le colspan.
////////////////////////////////////////////////////////
window.onresize = function(event) {
  if (document.getElementById("trcontent")) {
    var colsp = getcolspans(document.getElementById("trcontent").previousSibling);
    document.getElementById("trcontent").children[0].setAttribute("colspan", colsp);
  }
};
