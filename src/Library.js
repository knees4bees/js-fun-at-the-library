function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }

  return library;
}


function addBook(library, book) {
  library.shelves[book.genre].push(book);
}


function checkoutBook(library, titleString, genre) {  // `titleString` because otherwise I got myself confused AF
  var isCheckedOut;

  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === titleString) {
      library.shelves[genre].splice(i, 1);
      isCheckedOut = true;
    }
  }

  if (isCheckedOut === true) {
    message = `You have now checked out ${titleString} from the ${library.name}`;
  } else {
    message = `Sorry, there are currently no copies of ${titleString} available at the ${library.name}`;
  }

  return(message);
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
