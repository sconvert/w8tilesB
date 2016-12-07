#Lien vers les pages projet
[Pages projet](https://sconvert.github.io/w8tilesB/)

Il faudra sans doute utiliser rapidement un autre serveur :
Celui de Clem
https://www.heroku.com/ gratuit - git - 12h d'upload/j

https://github.com/nodejs/node-v0.x-archive/wiki/Node-Hosting

#Utilisation
Lancer le serveur :
```
npm install
node server.js
http://localhost:8765/
```

#Notes
Avancement :

- tablesaw est intégré, tuile discussion.
- Le chargement provient d'un fichier json.
- Les classes sont créées dynamiquement et utilisables.
- Clic sur une cellule patient affiche le formulaire de messagerie. Re-clic ferme, clic ailleurs déplace. Le redimensionnement de la page n'affecte pas le formulaire.
- Clic sur send ferme le formulaire et affiche un message "Envoyé".

A faire :
Le tri ne fonctionne plus une fois que le formulaire a été affiché.
Le reload ou accès direct à une page ne fonctionne pas. Je cherche à distinguer l'appel direct à la page de l'appel depuis la page déjà chargée.

1- Je vire history qui ne fonctionne pas avec les gh-pages.
Ca marche en local : dans scriptRouter.js, enlever la remarque devant ```   mode: 'history', ```



#Ressources
[Vue](https://vuejs.org/v2/guide/)
[Axios](https://github.com/mzabriskie/axios)
[Vue-router](https://github.com/vuejs/vue-router)
[JsonPlaceholder](https://jsonplaceholder.typicode.com/)

Adaptation de
windows8-animations
===================

Demo for the tutorial "[How to Create Windows-8-like Animations with CSS3 and jQuery](http://sarasoueidan.com/blog/windows8-animations)".

License: Creative Commons Attribution.

**Please note** that this demo is only meant as a demo for the code in the tutorial to show how CSS animations and transforms work. It is not meant to be a ready-to-use template. I cannot provide maintanenace and/or support if you decide to implement the code in your production project.

The tutorial contains everything you need to know about the code and explains every bit of it, so if you have any questions about the code please refer to the tutorial here: http://sarasoueidan.com/blog/windows8-animations

Thank you!
