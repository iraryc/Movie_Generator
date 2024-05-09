"use strict"

let myFavoriteMoviesList = [
    {
        title: "Shrek",
        reason: "So funny",
        picture: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "The Interview",
        reason: "Good memories watching it with my little brother",
        picture: "https://upload.wikimedia.org/wikipedia/en/2/27/The_Interview_2014_poster.jpg"
    },
    {
        title: "The Princess Diaries",
        reason: "Good memories watching it with my little sister and love Anne Hathaway <3",
        picture: "https://lumiere-a.akamaihd.net/v1/images/p_theprincessdiaries_19875_2ef7e437.jpeg"
    },
    {
        title: "The Proposal",
        reason: "Love Sandra Bullock <3 and Ryan Reynolds <3!",
        picture: "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
  ];

  function randomMovie() {
    let pickRandom = Math.floor(Math.random() * myFavoriteMoviesList.length);
    let favoriteMovie = myFavoriteMoviesList[pickRandom];
    // Display movie information
    document.getElementById("movieTitle").textContent = favoriteMovie.title;
    document.getElementById("moviePoster").src = favoriteMovie.picture;
    document.getElementById("movieReason").textContent = favoriteMovie.reason;
  }