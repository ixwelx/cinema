const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const setMovies = (movie) => {
    document.querySelector("#title").innerHTML = movie.name
    document.querySelector("#releaseDate").innerHTML = movie.releaseDate
    document.querySelector("#genreList").innerHTML = movie.genres
    document.querySelector("#ratingBadge").innerHTML = `Рейтинг: ${movie.rating}/5`
    document.querySelector("#stars").innerHTML = Array.from({
        length: movie.rating,
    })
    document.querySelector("#description").innerHTML = movie.description
    document.querySelector("#cardImage").src = movie.cardImage
    document.querySelector(".form-card #infoRelease").innerHTML = movie.releaseDate
    document.querySelector(".form-card #infoGenres").innerHTML = movie.genres
}

const getMovie = () => {
    fetch(`https://68c7b9ad5d8d9f514732c30b.mockapi.io/movie/${id}`)
        .then((response) => response.json())
        .then((data) => setMovies(data))
}
getMovie()
