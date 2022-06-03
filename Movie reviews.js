let reviewsContainer = document.getElementById("reviewsContainer");
let titleInput = document.getElementById("titleInput");
let reviewTextarea = document.getElementById("reviewTextarea");

function onAddBtn() {
    let movieTitle = titleInput.value;
    let movieReview = reviewTextarea.value;

    if (movieTitle === "") {
        alert("Please enter a movie title");
        return;
    }

    let movieTitleEl = document.createElement("h1");
    movieTitleEl.textContent = "Movie Title:" + movieTitle;
    movieTitleEl.classList.add("movie-title");
    reviewsContainer.appendChild(movieTitleEl);

    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = "Review: " + movieReview;
    reviewsContainer.appendChild(movieReviewEl);

    let horizontalLineEl = document.createElement("hr");
    reviewsContainer.appendChild(horizontalLineEl);

    titleInput.value = "";
    reviewTextarea.value = "";
};