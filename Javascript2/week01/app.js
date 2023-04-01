'use strict'

  const bookTitles = [
    'harry_potter_chamber_secrets',
    'the_alchemist',
    'a_new_vision_of_astrology',
    'atomic_habits',
    'javascript_beginners',
    'the_law_of_nature',
    'inventions_nikola_tesla',
    'stories_of_prophets',
    'the_great_pyramids_of_giza',
    'web_development'
    
  ];

  const bookData = {
    harry_potter_chamber_secrets:{
      title: 'Harry Potter',
      language: 'English',
      author:'J.K. Rowling',
    },
    the_alchemist:{
      title: 'The Alchemist',
      language: 'English',
      author:'Paulo Coelho',
    },
    a_new_vision_of_astrology:{
      title: 'A New Vision of Astrology',
      language: 'English',
      author:'A.T. Mann',
    },
    atomic_habits:{
      title: 'Atomic Habbits',
      language: 'English',
      author:'James Clears',
    },
    javasrcipt_beginners:{
      title: 'Javascript The Defination Guide',
      language: 'English',
      author:'David Flanagan',
    },
    the_law_of_nature:{
      title: 'The Laws of Human Nature',
      language: 'English',
      author:'Robert Greene',
    },
    inventions_nikola_tesla:{
      title: 'Nikola Tesla My Inventions',
      language: 'English',
      author:'Nikola Tesla',
    },
    stories_of_prophets:{
      title: 'Stories of the Prophets',
      language: 'English',
      author:'Abdullah Mustafazadhe',
    },
    the_great_pyramids_of_giza:{
      title: 'The Great Pyramids of Giza',
      language: 'English',
      author:'James Bonwick',
    },
    web_development:{
      title: 'Web Development for beginers',
      language: 'English',
      author:'White Belt Mastery',
    },
  };
  const cover = {
    harry_potter_chamber_secrets: "/img/harrypotter.jpg" ,
    the_alchemist:"img/alchemist.jpg",
    a_new_vision_of_astrology:'img/astrology.jpg',
    atomic_habits:'img/atomichabits.jpg',
    javasrcipt_beginners: "img/javascriptguide.jpg " ,
     the_law_of_nature: "img/lawsofnature.jpg",
     inventions_nikola_tesla: "img/inventions.jpg",
     stories_of_prophets: "img/stories.jpg",
     the_great_pyramids_of_giza: "img/pyramids.jpg",
     web_development: "img/webdevelopment.jpg",

  };

  function generateBookList() {
    const bookList = document.createElement('ul');
    for (const bookId of Object.keys(bookData)) {
      const bookInfo = bookData[bookId];
      const bookItem = document.createElement('li');
      bookItem.id = bookId;
      const bookTitle = document.createElement('h2');
      bookTitle.textContent = bookInfo.title;
      bookItem.appendChild(bookTitle);
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = 'Author: ' + bookInfo.author;
      bookItem.appendChild(bookAuthor);
      const bookLanguage = document.createElement('p');
      bookLanguage.textContent = 'Language: ' + bookInfo.language;
      bookItem.appendChild(bookLanguage);
      const bookCover = document.createElement('img');
      bookCover.src = cover[bookId];
      bookCover.alt = bookInfo.title + ' book cover';
      bookItem.appendChild(bookCover);
      bookList.appendChild(bookItem);
    }
    document.body.appendChild(bookList);
    return bookList;
  }
  
  generateBookList();
