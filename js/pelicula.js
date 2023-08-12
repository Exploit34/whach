import { buscarElemento } from "../js/busquedas.js";

let trailer = [
    'zh4KhVSMwtQ',
    'av-9lvBdZ0k',
    'NjBGzJ5FFmI',
    'uNZu5dNck9Y',
    'Gwk9EMcDsj4',
    'uIvBFUYzeOc',
    'OzAoGlARPFQ',
    '7wuK5PhzcNY',
    'mJqwSpxq2W4',
    'sinstLBy9l8',
    'FDhvbIqTQwI',
    'JdMxXytjzoc',
    'xdxFwUqKc-A',
    'w65PKQBycNI',
    'izQA8C3emt4',
    'jxkGUWRJV24',
    'awpDl9eB6Tg',
    'lizOlZ-r3II',
    'oBmazlyP220',
    'gMPEbJQun68'
]
// JavaScript
const section = document.getElementById('peliculas');
const crear = () => {
    const divGeneral = document.createElement('div');
    divGeneral.id = 'divGeneral';

    const button = document.createElement('button')
    button.id = 'button'

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

    const h1 = document.createElement('h4');
    h1.id = 'h4';

    const descripcion = document.createElement('p');
    descripcion.id = 'description';

    const leermas = document.createElement('button')
    leermas.id = 'leermas';
    leermas.textContent = 'Leer Más';

    const div2 = document.createElement('div')
    div2.id = 'div2'

    div2.appendChild(descripcion);
    div2.appendChild(leermas)

    div.appendChild(h1);
    div.appendChild(div2);

    divGeneral.appendChild(img)
    divGeneral.appendChild(div);
    divGeneral.appendChild(buttonLook)

    button.appendChild(divGeneral)

    section.appendChild(button)

    let key = 0;
    let array = [div, divGeneral, img, h1, descripcion, section, leermas, div2, buttonLook, key];
    return array
}

const options = { method: 'GET' };
let matriz = [];
let i = 0;
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=ebe8a7dd9de9ff2deeefda7565d16289&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => {
        console.log(response.results);
        response.results.forEach(element => {
            let array = crear();
            array[2].src = 'https://image.tmdb.org/t/p/original' + element.backdrop_path
            array[3].textContent = element.original_title;
            array[4].textContent = element.overview
            array[9] = trailer[i];
            console.log(array[9]);
            matriz.push(array)
            i++;
        });
        leerMasyMenos()
        buscarElemento();
        btnLookT();
    })
    .catch(err => console.error(err));


function leerMasyMenos() {
    matriz.forEach(elemento => {
        elemento[6].addEventListener('click', () => {
            if (elemento[6].textContent == 'Leer Más') {
                elemento[7].style = 'flex-direction: column;'
                elemento[4].style = 'overflow: visible; width: 100%; white-space: wrap; '; // Cambia el overflow para que se muestre todo el texto
                elemento[6].textContent = 'Leer Menos'
                elemento[6].style = 'display: block; text-align: start;'; // Oculta el botón "Leer más" después de expandir el texto
            } else {
                elemento[4].style = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
                elemento[7].style = 'flex-direction: wrap;'
                elemento[6].textContent = 'Leer Más'
            }
        });
    })
}

// button look
export function btnLookT() {
    let cardTrailer = document.getElementById('divGeneralTrailer');
    matriz.forEach(elemento => {
        elemento[8].addEventListener('click', () => {
            cardTrailer.style = 'display: flex'
            let iframe = document.getElementById('iframeP')
            iframe.src = `https://www.youtube.com/embed/${elemento[9]}`
            // elemento[8].getElementById 
        })
    })
}

// trailer
const cardTrailer = () => {
    const divGeneral = document.createElement('div');
    divGeneral.id = 'divGeneralTrailer';

    const div = document.createElement('div');
    div.id = 'divDescriptionTrailerPeli';

    const button = document.createElement('button')
    button.id = 'buttonTrailer'
    button.textContent = "X"

    const iframe = document.createElement('iframe');
    iframe.id = "iframeP";
    iframe.src = `https://www.youtube.com/embed/iFl1cFggFb8`

    const div2 = document.createElement('div');
    div2.id = 'divTrailer';

    const descripcion = document.createElement('p');
    descripcion.id = 'description';

    div.appendChild(button)
    div.appendChild(iframe)

    div2.appendChild(descripcion);

    divGeneral.appendChild(div)
    divGeneral.appendChild(div2);
    const main = document.querySelector('main')
    main.appendChild(divGeneral);
    return divGeneral;
}
// Trailer

cardTrailer();
