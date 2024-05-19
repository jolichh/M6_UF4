# Activitat React
## Introducció
El present treball pretén continuar profunditzant en el desenvolupament de React, i introduïr conceptes com els hooks useState i useEffect.

Podeu utilitzar les icones que trobareu aquí.

## Enunciat
1. Crea un nou projecte vite amb react i javascript tal i com va aprendre l’activitat anterior. Crea dins de src les carpetes: components, compnents/styles, img, pages, config
2. Investiga com afegir suport de base de dades firebase a un projecte Web aquí

    a. Crea una nova aplicació des de la consola de firebase i guarda l’objecte firebaseConfig amb els valors per inicialitzar la bdd i guarda-ho en config/config.js.
    
    b. Instal·la la dependència firebase amb npm
3. Instal·la suport de react-router-dom amb npm i investiga com es creen diferents pàgines i es vinculen entre si aquí els link, aquí els Route, aquí el BrowseRouter
4. Crea un component components/Welcome.jsx que rebi un username, i et saludi a username i escrigui «Pel·lícules per a l’estiu».
5. Crea un component components/MovieCard.jsx que rebi title, image, rate, direction de les props (desestructura-les per major comoditat) i fes que ho mostri tot.
6. Crea component/App.jsx que retorne les rutes «/» «/movies/list» i «/movies/add»
7. La página pages/IndexMenu.jsx que instancii 2 components/Card.jsx per mostrar:

    a. Una targeta per anar al llistat de pel·lícules

    b. Una targeta per afegir una pel·lícula.
8. Crea un component MoviesAdd.jsx que mostri un formulari per afegir una pel·lícula amb: títol, descripció, direcció, imatge (url), Nota(1-5), any i durada (min). Fes que ho guardi en base de dades firebase.
9. Fes una pàgina pages/MoviesList.jsx que llegeixi les pel·lícules de firebase, les carregui en un array i després converteixi aquest array en un llistat de component/MovieCard.jsx mostrat en format de targetes on es vegi l’imatge del cartell de la pel·lícula de fons.