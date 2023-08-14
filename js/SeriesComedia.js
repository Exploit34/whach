import { buscarElemento } from "./busque.js";

const series = document.getElementById('seriesComedia');

const baseURL = 'https://image.tmdb.org/t/p/w500'; // Base URL de las imágenes de la API


let arraySeries = [
    'XtyptqJ3_58',
    'DigctFieJH0',
    'B2_0T_e-eFs',
    'i40oXOjETAM',
    'Frqi2ufN4K8',
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
  let arraySeries1 = [
    '9Ocsz7lap3w',
    'KxQwGtjTc38',
    '9Pggd8Snboc',
    'CJba2YAWSEI',
    'TYRRVk2F2Ro',
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
    img.src = baseURL + serieData.poster_path; // Concatenar el 'poster_path' con la base URL de las imágenes

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



fetch('https://api.themoviedb.org/3/discover/tv?with_genres=35&language=en-US', requireOptions)
    .then(response => response.json())
    .then(data => {
        const seriesComedia = data.results;
        for (const serie of seriesComedia) {
            let crearS = crearSeries(serie);
            crearS[9] = arraySeries[i];
            crearS[10] = arraySeries1[i];
            matriz2.push(crearS);
            i++;
        }
        leerMasyMenos2();
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
                    elemento[4].style = 'overflow: visible; width: 100%; white-space: wrap; '; // Cambia el overflow para que se muestre todo el texto
                    elemento[6].textContent = 'Leer Menos'
                    elemento[6].style = 'display: block; text-align: start;'; // Oculta el botón "Leer más" después de expandir el texto
                } else if (elemento[6].textContent == "Leer Menos") {
                    elemento[4].style = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
                    elemento[7].style = 'flex-direction: wrap;'
                    elemento[6].textContent = 'Leer Más'
                }
            });
        })
    
}

// ... (Código anterior)

function openTrailerWindow(trailerId1, trailerId2) {
    const trailerURL1 = `https://www.youtube.com/embed/${trailerId1}`;
    const trailerURL2 = `https://www.youtube.com/embed/${trailerId2}`;
    const ventanaNueva = window.open(
        "",
        "_blank",
        "width=800,height=450,menubar=no,toolbar=no,location=no"
    );

    if (!ventanaNueva || ventanaNueva.closed || typeof ventanaNueva.closed === "undefined") {
        alert("La reproducción del video requiere habilitar ventanas emergentes.");
    } else {
        const contenidoHTML = `
        <style>
            body {
                background-color: #341740;
                color: #ffffff;
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            .video-container {
                display: flex;
                flex-direction: column; /* Alinea los iframes en columna */
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background-color: #000;
            }
            .trailer {
                margin-bottom: 20px; /* Espacio entre los trailers */
            }
            iframe {
                width: 500px;
                max-width: 800px;
                height: 300px;
                border: none;
            }
        </style>
        <div class="video-container">
            <div class="trailer">
                <h3>Capítulo 1</h3>
                <iframe src="${trailerURL1}" allowfullscreen></iframe>
            </div>
            <div class="trailer">
                <h3>Capítulo 2</h3>
                <iframe src="${trailerURL2}" allowfullscreen></iframe>
            </div>
        </div>
        `;
        ventanaNueva.document.write(contenidoHTML);
        ventanaNueva.document.close();
    }
}

export function btnLookT() {
    matriz2.forEach(elemento => {
        elemento[8].addEventListener('click', () => {
            const trailerId1 = elemento[9];
            const trailerId2 = elemento[10];
            openTrailerWindow(trailerId1, trailerId2);
        });
    });
}



