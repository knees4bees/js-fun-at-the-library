function createTitle(title) {
  return `The ${title}`;
}


function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };

  return character;
}


function saveReview(review, reviews) {
  if (reviews.includes(review) === false) {
    reviews = reviews.push(review);
  }
}


function calculatePageCount(title) {
  var pageCount = title.length * 20

  return pageCount;
}


function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  }

  return book;
}


function editBook(book) {
  book.pageCount = (3/4) * book.pageCount;
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
