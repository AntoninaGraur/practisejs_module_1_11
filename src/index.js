// import './css/styles.css';
// import axios from "axios";
// const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
// const getContacts = async () => {
//   const res = await fetch(`${BASE_URL}/contacts`);
//   return res.json();
// };
// getContacts().then(console.log());



// GET -> /contacts/:id
// const getContactById = async id => {
//   const res = await fetch(`${BASE_URL}/contacts/${id}`);
//   return res.json();

// };
// getContactById(7).then(console.log)

// POST -> /contacts
// const createContact = async contact => {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(contact),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

//   const res = await axios.post(`${BASE_URL}/contacts`, options)
    // return res.json();
// };
// createContact({
  
// name: "Anti Veum",
// number: "518-844-4344",
// avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/43.jpg",
// email: "aaant@gmail.com",

// })

// PUT -> /contacts/:id
// const updateContact = async newContact => {
//   const res = await axios.put({`${BASE_URL}/contact`}/${id});
//  return res.data
//   };

 


// DELETE -> /contacts/:id
// const deleteContact = async id => {
  
//   await axios.delete(`${BASE_URL}/contacts/${id}`);
// };
// deleteContact(44);
// deleteContact(43);
// deleteContact(45);
// deleteContact(46);
// deleteContact(47);
// deleteContact(48);
// deleteContact(51);

class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #page;
  #searchQuery;
  #totalPages;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: 'black',
    orientation: 'portrait',
  });

  constructor() {
    this.#page = 1;
    this.#searchQuery = '';
    this.#totalPages = 0;
  }

    async getImages() {
      const res = await fetch(`${this.#BASE_URL}?query=${this.#searchQuery}&page=${this.#page}&${this.#searchParams}`);
        if (res.ok) {
          return res.json()
        }
        throw new Error(res.statusText)
    
    }
  

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  set searchQuery(newQuery) {
    this.#searchQuery = newQuery;
  }

  get searchQuery() {
    return this.#searchQuery;
  }

  get totalPages() {
    return this.#totalPages;
  }
    set totalPages(totalPages) {
     this.#totalPages = totalPages;
  }

}
let observer = new IntersectionObserver(callback);
const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-gallery'),
  loadMoreBlock: document.querySelector('.target-element'),
};
 
const { form, list, loadMoreBlock } = refs;

const unsplashApi = new UnsplashAPI();


function createGalleryCards(images) {
  return images
    .map(
      ({ urls, alt_description }) => `<li class="gallery__item">
        <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
    </li>`
    )
    .join('');
}
let isMoreItem = false;



async function loadMoreItems() {
  unsplashApi.page = + 1;

  if (isMoreItem) return;
  isMoreItem = true;
  const res = await unsplashApi.getImages();
  list.insertAdjacentHTML('beforeend', createGalleryCards(res.results));

  if (unsplashApi.page === unsplashApi.totalPages) {
    loadMoreBlock.classList.remove('is-visible');
    observer.unobserve(loadMoreBlock);
  }
  isMoreItem = false;
}

// unsplashApi.totalPages = res.total_pages;

function callback(entries) {
  entries.forEach(entry => {
  //  if (entry.IntersectionRatio === 1) return
    if (entry.isIntersecting) {
      if (unsplashApi.page > 1) {
        
      }
      loadMoreItems();
}
  });
}



async function handleSubmit(evt) {
  evt.preventDefault();
  list.innerHTML = '';
  unsplashApi.page = 1;

  const inputText = form.elements.query.value.trim();
  if (inputText === '') {
    return;
  }
  unsplashApi.searchQuery = inputText;
 

  // const response = unsplashApi.getImages().then(res => res.results);
  // console.log(response);

  //
  
  const res = await unsplashApi.getImages();
  if (res.results.length === 0) {
    return alert('No results');
  }
  unsplashApi.totalPages = res.total_pages;
  list.insertAdjacentHTML('beforeend', createGalleryCards(res.results));
  
  loadMoreItems();

  if (unsplashApi.total_pages > 1) {
    loadMoreBlock.classList.add('is-visible');

  }
  
}

form.addEventListener('submit', handleSubmit);
