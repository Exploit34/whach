import { buscarElemento } from "../js/busque.js";

const series = document.getElementById('series');

const baseURL = 'https://image.tmdb.org/t/p/w500';


let arraySeries = [
    'QIdFe_UF6EM',
    'XL2uitZ0TvY',
    '4i5BAEyhpEg',
    'aPBUUJbrAWo',
    '3Mz_aAbtm6E',
    'HLyXCOgXJns',
    'QoCZB5304P0',
    'FnYQWX5Bo_k',
    '1dqOSD2iDdI',
    'DiJ71etOG8M',
    'CKUf6eeNieM',
    '2sJTSw2qWnQ',
    'q8HTURegJnc',
    'U8W4VSBo4JU',
    'SGPmATwOMzs',
    'AZ5LA42rbHo',
    'JhNIEExNAYE',
    '_2un1aU7mT0',
    'KcBStos46EM',
    'hatjI-dygQE'
  ]

const crearSeries = (serieData) => {
    const divGeneral = document.createElement('div');
    divGeneral.id = 'divGeneral';

    const button = document.createElement('button');
    button.id = 'button';

    const buttonLook = document.createElement('button')
    buttonLook.id = 'buttonLook'
    const h4Look = document.createElement('h4');
    h4Look.id = 'h4Look';
    h4Look.textContent = "Ver trailer"
    buttonLook.appendChild(h4Look)

    const div = document.createElement('div');
    div.id = 'div';

    const img = document.createElement('img');
    img.id = 'img2';
    img.src = baseURL + serieData.poster_path; 

    const h1 = document.createElement('h4');
    h1.id = 'h4';
    h1.textContent = serieData.name;

    const descripcion = document.createElement('p');
    descripcion.id = 'description';
    descripcion.textContent = serieData.overview;

    const leermas = document.createElement('button');
    leermas.id = 'leermas';
    leermas.textContent = 'Leer Más';

    const div2 = document.createElement('div');
    div2.id = 'div2';

    div2.appendChild(descripcion);
    div2.appendChild(leermas);

    div.appendChild(h1);
    div.appendChild(div2);

    divGeneral.appendChild(img);
    divGeneral.appendChild(div);
    divGeneral.appendChild(buttonLook)

    button.appendChild(divGeneral);

    series.appendChild(button);
    let key = 0;
    let array = [div, divGeneral, img, h1, descripcion, series, leermas, div2, buttonLook, key];
    return array
};

const requireOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmU4YTdkZDlkZTlmZjJkZWVlZmRhNzU2NWQxNjI4OSIsInN1YiI6IjY0YzNiMWM2MDI4ZjE0MDBlZTlkN2I1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9fXvxMy_bnwoHZg-fCDQrcYq3vkYgavLw4suPglYgg'
    }
};

let matriz2 = [];
let i = 0;

fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', requireOptions)
    .then(response => response.json())
    .then(data => {
        const seriesTrending = data.results;
        for (const serie of seriesTrending) {
            let crearS = crearSeries(serie);
            crearS[9] = arraySeries[i]
            matriz2.push(crearS)
            i++;
        }
        leerMasyMenos2()
        buscarElemento();
        btnLookT();
    })
    .catch(err => console.error(err));

console.log(matriz2);
function leerMasyMenos2() {
    matriz2
        .forEach(elemento => {
            elemento[6].addEventListener('click', () => {
                console.log(elemento[6].textContent);
                if (elemento[6].textContent == 'Leer Más') {
                    elemento[7].style = 'flex-direction: column;'
                    elemento[4].style = 'overflow: visible; width: 100%; white-space: wrap; ';
                    elemento[6].textContent = 'Leer Menos'
                    elemento[6].style = 'display: block; text-align: start;';
                } else if (elemento[6].textContent == "Leer Menos") {
                    elemento[4].style = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
                    elemento[7].style = 'flex-direction: wrap;'
                    elemento[6].textContent = 'Leer Más'
                }
            });
        })
}

export function btnLookT() {
    let cardTrailer = document.getElementById('divGeneralTrailer');
    matriz2.forEach(elemento => {
        elemento[8].addEventListener('click', () => {
            cardTrailer.style = 'display: flex'
            let iframe = document.getElementById('iframeP')
            iframe.src = `https://www.youtube.com/embed/${elemento[9]}`
        })
    })
}