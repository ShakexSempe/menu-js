//items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 45.00,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Munch Up",
    category: "brand",
    price: 70.00,
    img: "./images/munch-logo.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
  },
  
  
];

//get unique categories
//iterate over categories return button
// make sure to select buttons when they are available




const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


//when page loads
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});












displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map(item => {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">R${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

displayMenuButtons = () => {
//reduce() takes 2 parameters in the callback() and also requires an initial value
  //check if item category is already in the 'all' array
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['all']);
  //load category buttons by wrapping each category value in the html 
  const categoryButtons = categories.map(category => {
    return `<button class="filter-btn" 
    type="button" 
    data-id=${category}>
    ${category}
    </button>`
  }).join("");

  container.innerHTML = categoryButtons;
  //select buttons only after adding them to the dom
  const filterButtons = document.querySelectorAll('.filter-btn');

  //filter items
  filterButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(menuItem => {

        if (menuItem.category === category) {
          return menuItem
        }
      });

      if (category === 'all') {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}