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

new Movie ('interstellar', 'drama', 5, 'Matthew McCoughnahey', 'time and space');
new Movie ('Tom and Jerry', 'kids', 3, 'Jim Carey', 'movie night');
new Movie ('Den of Thieves', 'action', 4, 'Gerard Butler', 'bank robbery');



