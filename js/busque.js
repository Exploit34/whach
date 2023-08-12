const filtrarPeliculas = (term) => {
    const section = document.getElementById('general');
    const peliculas = section.getElementsByTagName('button');
    for (const pelicula of peliculas) {

        if (pelicula.querySelector('h4')) {
            const titulo = pelicula.querySelector('h4').textContent.toLowerCase();
            if (titulo.includes(term.toLowerCase())) {
                pelicula.style.display = 'block';
            } else {
                pelicula.style.display = 'none';
            }
        }
    }
};

export function buscarElemento() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (event) => {
        const term = event.target.value;
        filtrarPeliculas(term);
    });
}
