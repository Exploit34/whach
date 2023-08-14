const button0 = document.querySelector('.Navegar0');
const button1 = document.querySelector('.Navegar1');
const button2 = document.querySelector('.Navegar2');
const button3 = document.querySelector('.Navegar3');
const button4 = document.querySelector('.Navegar4');
const button5 = document.querySelector('.Navegar5');
const button6 = document.querySelector('.Navegar6');
const button7 = document.querySelector('.Navegar7');

const buttonElement = document.querySelectorAll('.menu button');

let arrayA = [button0, button1, button2, button3, button4, button5, button6,button7];

for (let i = 0; i < arrayA.length; i++) {
    arrayA[i].addEventListener('click', () => {
        arrayA[i].style.color = '#4384a7';
        condicionButton(i);
        for (let j = 0; j < arrayA.length; j++) {
            if (arrayA[j] !== arrayA[i]) {
                arrayA[j].style.color = '#fff';
            }
        }
    });
}

const h4peliculas = document.getElementById('sectionPelis');
const films = document.getElementById('peliculas');
const h4SeriesM = document.getElementById('sectionSeries');
const seriesC = document.getElementById('series');
const h4Dramas = document.getElementById('sectionPelisDocumental');
const DramasC = document.getElementById('pelisDocumental');
const h4Comedia = document.getElementById('sectionPelisComedia');
const ComediaC = document.getElementById('pelisComedia');
const h4Historia = document.getElementById('sectionPelisHistoria');
const HistoriaC = document.getElementById('pelisHistoria');
const h4seriesComedia = document.getElementById('sectionSeriesComedia');
const SerieComediC = document.getElementById('seriesComedia');
const h4seriesAnima = document.getElementById('sectionSeriesAnima');
const SerieAnimaC = document.getElementById('seriesAnimacion');

function condicionButton(i) {
    h4SeriesM.style.display = "none";
    seriesC.style.display = "none";
    h4peliculas.style.display = "none";
    films.style.display = "none";
    h4Dramas.style.display = "none";
    DramasC.style.display = "none";
    h4Comedia.style.display = "none";
    ComediaC.style.display = "none";
    h4Historia.style.display = "none";
    HistoriaC.style.display = "none";
    h4seriesComedia.style.display = "none";
    SerieComediC.style.display = "none";
    h4seriesAnima.style.display = "none";
    SerieAnimaC.style.display = "none";

    if (arrayA[i] == button0) {
        h4peliculas.style.display = "block";
        films.style.display = "flex";
        h4SeriesM.style.display = "block";
        seriesC.style.display = "flex";
    } else if (arrayA[i] == button1) {
        h4SeriesM.style.display = "none";
        seriesC.style.display = "none";
        h4peliculas.style.display = "flex";
        films.style.display = "flex";

    } else if (arrayA[i] == button2) {
        h4SeriesM.style.display = "flex";
        seriesC.style.display = "flex";
        h4peliculas.style.display = "none";
        films.style.display = "none";

    } else if (arrayA[i] == button3) {
        h4Dramas.style.display = "flex";
        DramasC.style.display = "flex";

    } else if (arrayA[i] == button4) {
        h4Comedia.style.display = "flex";
        ComediaC.style.display = "flex";

    } else if (arrayA[i] == button5) {
        h4Historia.style.display = "flex";
        HistoriaC.style.display = "flex";

    } else if (arrayA[i] == button6) {
        h4seriesComedia.style.display = "flex";
        SerieComediC.style.display = "flex";
    }else if(arrayA[i] == button7){
        h4seriesAnima.style.display = "flex";
        SerieAnimaC.style.display = "flex";
    }
}
