var lib = require('./Library.js');

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }


greetPatron(name, isMorning) {
  if (isMorning === true) {
    return `Good morning, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}


findBook(titleString) {

  var genreList = Object.keys(this.library.shelves);
  var isOnShelf;
  var message = "";

  for (var i = 0; i < genreList.length; i++) {
    for (var j = 0; j < this.library.shelves[genreList[i]].length; j++) {
      if (this.library.shelves[genreList[i]][j].title === titleString) {
        isOnShelf = true;
        lib.checkoutBook(this.library, titleString, genreList[i]);
        message = `Yes, we have ${titleString}`;
      } else {
        isOnShelf = false;
        message = `Sorry, we do not have ${titleString}`;
      }
    }
  }

  return message;
}


calculateLateFee(daysLate) {
  var lateFee = Math.ceil(0.25 * daysLate);

  return lateFee;
}

}



module.exports = Librarian;
