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

function loadPageContent(data) {
//  console.log(data);
    var tableDiscussion = '<table id="discussionTable" class="tablesaw" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-minimap="">\
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
      <tbody>';

      data.map(function(TRelement) {
        tableDiscussion += "<tr class='np" + TRelement['num'] + "'>";
        //console.log(TRelement);
        for (item in TRelement) {
          tableDiscussion += "<td class='b" + item + "'>" + TRelement[item] + "</td>";
        }
        tableDiscussion += "</tr>";
      
      });
      
      tableDiscussion += "</tbody></table>";
      //console.log(tableDiscussion);
      vueBastide.changePageContent(tableDiscussion);

//      $("#discussionTable").trigger( "enhance.tablesaw" );
      //$("#discussionTable").table("refresh"); //if (page == "discussion")
      //discussionTemplate.template = content;
      //this.components['discussions-component'] = content;

}

function runAxios(to, from) {
  // console.log(to.path + " " + from.path);
  var data="";
  // url (required), options (optional)
  switch (to.path) {
    case "/discussions":

      fetch('/temp/table.json')  
        .then(
          function(response) {
            if (response.status !== 200) {  
              console.log('Looks like there was a problem. Status Code: ' +  
                response.status);  
              return;  
            }

            // Examine the text in the response  
            response.json().then(function(data) {  
              //console.log(data);  
              data = data.patients; //JSON.parse(data);
              loadPageContent(data);
              //console.log(data[0]);
            })
            .then(function(data) {
              initDiscussionTable();
            })
            .then(function(data) {
              $(document).trigger("enhance.tablesaw");
            })
          }
        )
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });


        break;
   
      case "/historique-patients":
        vueBastide.changePageContent("Contenu historique patients");
        break;
        
      case "/aide-decision":
        vueBastide.changePageContent("Contenu aide à la décision");
        break;
          
      case "/bastide-access":
        vueBastide.changePageContent("Contenu Accès Bastide");
        break;
            
      default:
        console.log("Not found");

  }

  
//  fetch.fetchData(to.path)
  // postAxios(to.path);
  vueBastide.openTile();
  
  return data;
}

// 1. Define route components.
// These can be imported from other files
// And these will be imported from other files
const BastidePage = {
  template: '<h2>Bastide page {{ $route.params.pathparam }}</h2>',
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
