# The Movie Data Base + async-await

## Objectiu
Es pretén acabar d’entendre i agafar solidesa amb les funcionalitats Async-Await, mitjançant la plataforma The Movie Database i el codi de la interfície desenvolupa funcions async-await per mostrar la informació.

## Codi
https://drive.google.com/file/d/1Ec8gC_Bc5EGDEusi5pM4RHFtmO-7-8dA/view?usp=sharing

## Documentació de l’API
https://developers.themoviedb.org/3

## Exercicis
1. Descarrega’t el codi de l’aplicació

2. Implementa mitjançant async-await la crida a showFavs i mostra les pel·lícules que tinguis marcades com a preferides al teu espai personal. Una vegada tinguis el llistat de pel·lícules mostra-les mitjançant la funció printMovie
    ```
    forEach(movie => printMovie(movie, true, false));
    ```
    El primer paràmetre serà l’objecte de la pel·lícula

    El segon el de fav (que en aquest cas sempre serà true)

    El tercer el de watchlist (que de moment no us demano implementar)

3. Implementa el botó setFav, ja està implementat perquè la funció rebi el paràmetre booleà invers del que li passem al print. Només hauràs de fer la crida a l’API. 

    Una vegada s’hagi acabat fes un console.log “id marked as true/false”

    Fes que quan cliquis un botó de fav tornis a cridar la funció showFavs per repintar el llistat.

4. Implementa mitjançant async-await la crida de searchMovies i mostra les pel·lícules (printMovies).

    Veuràs que la crida no ens torna si la pel·lícula la tenim marcada com a fav o com a watchlist.
    
    Amplia la crida per a que per a cada pel·lícula comprovi si està marcada com a fav. Un cop tinguis tota aquesta informació printa la pel·lícula.


## Scroll infinit
1. Per tal de fer el scroll infinit has de definir dues variables
    ```
    var total_pages = 0;
    var current_page = 1;
    ```
    Current page, inicialment sempre serà 1 perquè volem mostrar la primera pàgina.
    Total pages l’actualitzarem amb la informació de la cerca

2. Detectem el scroll
    ```
    window.addEventListener('scroll', () => {
        const {scrollTop, scrollHeight,clientHeight} = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5 &&         current_page<total_pages) {
        }
    });
    ```

3. Si es compleixen les condicions de scroll i de que encara hi ha més pàgines a consultar el que farem serà incrementar la current_page i tornar a cridar a la funció de buscar.

    Tingues en compte que hauràs de modificar el codi per mantenir la variable query per tornar a fer la crida.

4. Mostra un gif de “loading” en el moment d’arribar a sota del scroll i fes-lo desaparèixer en el moment de printar les pel·lícules

    Ex: https://loading.io/