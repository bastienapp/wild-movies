const movieTheThing = {
  title: 'The Thing',
  poster:
    'https://images-na.ssl-images-amazon.com/images/I/51Lj1GL7s9L._AC_.jpg',
  year: 1982,
  description:
    'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
  director: 'John Carpenter',
};
const movieAlien = {
  title: 'Alien',
  poster:
    'https://images-na.ssl-images-amazon.com/images/I/615Jt--UndL._AC_SY741_.jpg',
  year: 1979,
  description:
    'After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.',
  director: 'Ridley Scott',
};
document.querySelector('.movie-list').innerHTML = '';

const movies = [movieAlien, movieTheThing, movieAlien];
for (let movie of movies) {
  insertMovie(movie);
}

function insertMovie(movie) {
  const section = document.createElement('section');
  section.classList.add('movie-main');

  const img = document.createElement('img');
  img.classList.add('movie-poster');
  img.src = movie.poster;
  img.alt = movie.title;
  section.appendChild(img);

  const div = document.createElement('div');
  div.className = 'movie-description';

  const h1 = document.createElement('h1');
  h1.innerHTML = `${movie.title} (${movie.year})`;

  const h2 = document.createElement('h2');
  h2.innerHTML = movie.director;

  const p = document.createElement('p');
  p.innerHTML = movie.description;

  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(p);
  section.appendChild(div);

  document.querySelector('.movie-list').appendChild(section);
}

/*
showMovie(movieTheThing);

function showMovie(movie) {
  const titleElement = document.querySelector('.movie-description>h1');
  console.log(titleElement);
  titleElement.innerHTML = `${movie.title} (${movie.year})`;
  const directorElement = document.querySelector('.movie-description>h2');
  directorElement.innerHTML = movie.director;
  const descriptionElement = document.querySelector('.movie-description>p');
  descriptionElement.innerHTML = movie.description;
  const posterElement = document.querySelector('.movie-poster');
  posterElement.src = movie.poster;
  posterElement.alt = movie.title;
}
*/
