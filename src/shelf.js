function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
    shelf.unshift(book);
  }
}


// Solution 1: works great
function unshelfBook(givenTitle, givenShelf) {
  for (var i = 0; i < givenShelf.length; i++) {
    if (givenShelf[i].title === givenTitle) {
      givenShelf.splice(i, 1);
    }
  }
}

// // Solution 2: yields a seemingly correct array of book objects, but does not pass the test
// function unshelfBook(givenTitle, givenShelf) {
//   var newShelf = [];
//
//   for (var i = 0; i < givenShelf.length; i++) {
//     if (givenShelf[i].title !== givenTitle) {
//       newShelf.push(givenShelf[i]);
//     }
//   }
//
//   givenShelf = newShelf;  // From Kayla: You can't reassign the value of a parameter like that. JS is not going to read that line and follow the parameter all the way up back to its original source and reassign the value. The reason .splice works in your first solution, is because splice is a mutator method.
// }


function listTitles(shelf) {
  var bookList = "";

  for (var i = 0; i < shelf.length; i++) {
    if (i < shelf.length) {
      bookList = bookList + shelf[i].title ;
    }
    if (i < shelf.length - 1) {
      bookList = bookList + ", ";
    }
  }

  return bookList;
}


function searchShelf(shelf, givenTitle) {
  var isOnShelf = false;

  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === givenTitle) {
      isOnShelf = true;
    }
  }

  return isOnShelf;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
