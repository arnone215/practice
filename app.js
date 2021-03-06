'use strict';

let allMovies = [];

function Movie(title, genre, rating, staring, notes) {
  this.title = title;
  this.genre = genre;
  this.rating = parseInt(rating);
  this.staring = staring;
  this.notes = notes;
  allMovies.push(this);
}

new Movie('interstellar', 'drama', 5, 'Matthew McCoughnahey', 'time and space');
new Movie('Tom and Jerry', 'kids', 3, 'Jim Carey', 'movie night');
new Movie('Den of Thieves', 'action', 4, 'Gerard Butler', 'bank robbery');


// let movieParent = document.getElementById('movielist');
// let child = document.createElement('li');
// let currentMovie = allMovies[0];
// child.textContent = currentMovie.title;
// movieParent.appendChild(child);

// let childTwo = document.createElement('li');
// currentMovie = allMovies[1];
// childTwo.textContent = currentMovie.title;
// movieParent.appendChild(childTwo);

// let childThree = document.createElement('li');
// currentMovie = allMovies[2];
// childThree.textContent = currentMovie.title;
// movieParent.appendChild(childThree);

// BELOW IS THE WAY TO DRY IT OUT




function listMovies() {
  let movieParent = document.getElementById('movielist');
  for (let i = 0; i < allMovies.length; i++) {
    let child = document.createElement('li');
    let currentMovie = allMovies[i];
    child.textContent = currentMovie.title;
    movieParent.appendChild(child);
  }

  //Now you just delete everything under here that is commented out.

  // let childTwo = document.createElement('li');
  // currentMovie = allMovies[1];
  // childTwo.textContent = currentMovie.title;
  // movieParent.appendChild(childTwo);

  // let childThree = document.createElement('li');
  // currentMovie = allMovies[2];
  // childThree.textContent = currentMovie.title;
  // movieParent.appendChild(childThree);

}


// Create a form to add new movies to it.

// Now we're going to sort the movies on page by rating.


function movieSorter(movieOne, movieTwo) {
  if (movieOne.rating > movieTwo.rating) {
    return -1;
  }
  if (movieOne.rating < movieTwo.rating) {
    return 1;
  }
  if (movieOne.rating === movieTwo.rating) {
    return 0;
  }
}
//sorting movie by rating ^^^^^^^ complete, ordering movies descending



//main code here, call the function listMovies.
allMovies.sort(movieSorter);
listMovies();
