var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    open = require('open'),
    http = require('http'),
    util = require('util'); // write object in console;
    
    
//////////////////////////////////////////
////////////  Initialisations  ///////////
//////////////////////////////////////////

var app = express(), delimiter = path.normalize("/");

// Liens statiques
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));



//////////////////////////////////////////
/////////////////  MAIN  /////////////////
//////////////////////////////////////////

// Lancer le serveur et ouvrir la page d'index
app.listen(8765);
open('http://localhost:8765', function (err) {
  if (err) throw err;
	console.log("Le serveur est lancé. Voir la page localhost:8765");
});


//////////////////////////////////////////
////////////////  Pages  /////////////////
//////////////////////////////////////////
// Page de départ
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/bastide-access',function(req,res){
  console.log("get bastide-access");
  sendResponse(res, 200, 'post Bastide-access bien reçu');
})

app.get('/aide-decision',function(req,res){
  console.log("get aide-decision");
  sendResponse(res, 200, 'post aide-decision reçu');
})

app.get('/historique-patients',function(req,res){
  console.log("get historique-patients");
  sendResponse(res, 200, 'post historique-patients reçu');
})

app.get('/discussions',function(req,res){
  console.log("get discussions");
  sendResponse(res, 200, 'post discussions reçu');
//  console.log(util.inspect(req.params, false, null));
})

app.post('/bastide-access',function(req,res){
  console.log("post bastide-access");
  //sendResponse(res, 200, 'post Bastide-access bien reçu');
})

app.post('/aide-decision',function(req,res){
  console.log("post aide-decision");
  //sendResponse(res, 200, 'post aide-decision reçu');
})

app.post('/historique-patients',function(req,res){
  console.log("post historique-patients");
  //sendResponse(res, 200, 'post historique-patients reçu');
})

app.get('/discussions',function(req,res){
  console.log("post discussions");
//  sendResponse(res, 200, 'post discussions reçu');
})

//////////////////////////////////////////
//////////////  Functions  ///////////////
//////////////////////////////////////////
function sendResponse(res, statusCode, body) {
  res.writeHead(statusCode);
  res.write(body);
  res.end();
}
/*
function send200(res, body) {
  sendResponse(res, 200, body || '<h1>OK</h1>');
}

function send404(res, body) {
  sendResponse(res, 404, body || '<h1>Not Found</h1>');
}*/

function pipeFileToResponse(res, file, type) {
  if (type) {
    res.writeHead(200, {
      'Content-Type': type
    });
  }
  fs.createReadStream(path.join(__dirname, file)).pipe(res);
}

/*server = http.createServer(function (req, res) {
  var url = req.url;*/


  // Format request */ -> */index.html
  /*if (/\/$/.test(url)) {
    url += 'index.html';
  }


//console.log(url);
  if (url === '/' || url === '/index.html') {
  //  console.log('Trouvé');
    console.log(path.join(__dirname, url));
    if (fs.existsSync(path.join(__dirname, url))) {
      pipeFileToResponse(res, url, 'text/html');
    } else {
      send404(res);
    }
  }
  
  console.log("URL : " + req.url);
})

server.listen(8765);*/

/* Server minimal 
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8765, function(){
    console.l1234og('Server running on 8765...');
});
*/
