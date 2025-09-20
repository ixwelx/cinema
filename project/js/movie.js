const params = new URLSearchParams(window.location.search);

function setMovies(){
    document.querySelector("#title").innerHTML = movie.name
    document.querySelector("#releaseDate").innerHTML = movie.releaseDate
    document.querySelector("#genreList").innerHTML = movie.genres
    document.querySelector("#rating").innerHTML = movie.rating

}

const getMovie = () => {
    const id = params.get("id")

    fetch(`https://68c7b9ad5d8d9f514732c30b.mockapi.io/api/v1/movie/${id}`).then(
        (response) => response.json()
            .then((data) => console.log(data))
    )
}