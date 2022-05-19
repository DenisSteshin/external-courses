const btnAddBook = document.querySelector('.btn_add-book');
const contentMain = document.querySelector('.content_main');
const search = document.querySelector('.search');
const mostPopular = document.querySelector('.most_popular');
const allBooks = document.querySelector('.all_books');

function addBook() {
  const title = window.prompt('Введите название книги', 'Какая-то книга...');
  const author = window.prompt('Введите автора', 'Ноунейм');

  const counter = contentMain.children.length + 1;

  if (title === null && author === null) {
    window.alert('Вы не ввели название или автора!');
  } else {
    contentMain.innerHTML += `<div class="cart_book">
              <div class="cover"></div>
              <span>${title}</span>
              <span>${author}</span>
              <div class="rating-css">
                <div class="star-icon">
                  <input type="radio" name="rating${counter}" id="rating${counter}${1}" />
                  <label for="rating${counter}${1}" class="fa fa-star"></label>
                  <input type="radio" name="rating${counter}" id="rating${counter}${2}" />
                  <label for="rating${counter}${2}" class="fa fa-star"></label>
                  <input type="radio" name="rating${counter}" id="rating${counter}${3}" />
                  <label for="rating${counter}${3}" class="fa fa-star"></label>
                  <input type="radio" name="rating${counter}" id="rating${counter}${4}" />
                  <label for="rating${counter}${4}" class="fa fa-star"></label>
                  <input type="radio" name="rating${counter}" id="rating${counter}${5}" />
                  <label for="rating${counter}${5}" class="fa fa-star"></label>
                </div>
              </div>
            </div>`;
  }
}

function searchBook() {
  const textSearch = search.value;
  const books = Array.from(contentMain.children);

  books.forEach((book) => {
    const nameBook = book.children[1];
    const authorBook = book.children[2];

    if (
      nameBook.innerHTML.toLowerCase().includes(textSearch.toLowerCase())
      || authorBook.innerHTML.toLowerCase().includes(textSearch.toLowerCase())
    ) {
      book.style.display = 'flex';
    } else {
      book.style.display = 'none';
    }
  });
}

function filterPopular() {
  const books = Array.from(contentMain.children);

  books.forEach((book) => {
    const ratingBook = Array.from(book.children[3].children[0].children).filter(
      (el) => el.nodeName === 'INPUT',
    );
    let rating;
    ratingBook.forEach((star, i) => {
      if (star.checked) {
        rating = i + 1;
      }
    });
    if (rating === 5) {
      book.style.display = 'flex';
    } else {
      book.style.display = 'none';
    }
  });
}

function filterAllBooks() {
  const books = Array.from(contentMain.children);

  books.forEach((book) => {
    book.style.display = 'flex';
  });
}

btnAddBook.addEventListener('click', addBook);
search.addEventListener('keyup', searchBook);
mostPopular.addEventListener('click', filterPopular);
allBooks.addEventListener('click', filterAllBooks);
