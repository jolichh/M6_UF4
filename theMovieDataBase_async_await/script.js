// Claus
const keys = {
    api_key: '',
    session_id: '',
    account_id: ''
}

let moviesResult = document.getElementById("moviesResult");

var total_pages = 0;
var current_page = 1;
var current_query = "";
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight,clientHeight} =
    document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 &&
        current_page<total_pages) {
            loading();
            searchMovies(current_query);
            hideLoading();
        }
});
function loading() {
    document.getElementById('loading').style.display = 'block';
}
function hideLoading() {
    document.querySelector('#loading').style.display = 'none';
}

async function setFav(id, favBool){
    console.log("id: "+id);
    console.log("antes: "+favBool);
    moviesResult.innerHTML="";
    
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDcxZjBjOWUyMTYyN2MxZGQ1ZjYzNTczNDU3MzY1NSIsInN1YiI6IjY2MWQ1Nzk1ZTQ4ODYwMDE4NTNiOTg3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._WwPgOLeMWz55o-WMDHfxcI3hqEbp_32VoJU3SsLdkc'
        },
        body: JSON.stringify({media_type: 'movie', media_id: id, favorite: favBool})
    };
      
    fetch(`https://api.themoviedb.org/3/account/21215424/favorite`, options)
        .then(response => response.json())
        .then(response => {
            console.log("id: "+ id + " favorite: "+favBool);
        })
        .catch(err => console.error(err));
    
    showFavs();
}

//mostrar pelis marcadas como favs
async function showFavs(){
    moviesResult.innerHTML="";
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDcxZjBjOWUyMTYyN2MxZGQ1ZjYzNTczNDU3MzY1NSIsInN1YiI6IjY2MWQ1Nzk1ZTQ4ODYwMDE4NTNiOTg3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._WwPgOLeMWz55o-WMDHfxcI3hqEbp_32VoJU3SsLdkc'
        }
    };
      
    await fetch(`https://api.themoviedb.org/3/account/21215424/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.results.forEach(movie => printMovie(movie, true, false));
        })
    .catch(err => console.error(err));
        
}

async function searchMovies(query){   
    //nueva busqueda
    if (current_query != query) {
        current_page = 1;
        moviesResult.innerHTML="";
    }
    //cuando haga scroll
    current_query = query;

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDcxZjBjOWUyMTYyN2MxZGQ1ZjYzNTczNDU3MzY1NSIsInN1YiI6IjY2MWQ1Nzk1ZTQ4ODYwMDE4NTNiOTg3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._WwPgOLeMWz55o-WMDHfxcI3hqEbp_32VoJU3SsLdkc'}
    };
    
    await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log("total pages: "+JSON.stringify(data.total_pages));
            total_pages = data.total_pages;
            moviesResult.innerHTML="";//limpiar contenido para mostrar solo resultados del search
            data.results.forEach(movie => {            
                printMovie(movie, esFav(movie.id),false);
            });
            // Incrementar la pàgina actual si encara hi ha més pàgines disponibles
            if (current_page < total_pages) {
                current_page++;
            }
        })
    .catch(err => console.error(err));

    clearInput();
    removeActive();
}

//Get the rating, watchlist and favourite status of an account.
// se usa para ver el estado del favorite
function esFav(id) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDcxZjBjOWUyMTYyN2MxZGQ1ZjYzNTczNDU3MzY1NSIsInN1YiI6IjY2MWQ1Nzk1ZTQ4ODYwMDE4NTNiOTg3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._WwPgOLeMWz55o-WMDHfxcI3hqEbp_32VoJU3SsLdkc'
        }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/account_states`, options)
        .then(response => response.json())
        .then(response =>{
            return response.favorite;            
        })
    .catch(err => console.error(err));

    return false;
}


/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
/* El primer paràmetre serà l’objecte de la pel·lícula
El segon el de fav (que en aquest cas sempre serà true)
El tercer el de watchlist (que de moment no us demano implementar)*/
function printMovie(movie, fav, watch){

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

