// jshint esversion: 6
window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'));

const btn = document.querySelector('.navbar-toggler');
btn.addEventListener('click', () => {
  btn.classList.toggle('change');
});
//Smoth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// $(document).ready(function() {
// //toggler btn
// $('.navbar-toggler').click(function () {
//  $('.navbar-toggler').toggleClass('change');
// });
$(document).ready(function() {
  //magnific popUp
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    },
    // other options
  });
});

//// create product Model

const createProduct = (() => {
  // product data
  const products = [];
  class Product {
    constructor(name, style, type, img, price) {
      this.name = name;
      this.style = style;
      this.type = type;
      this.price = price;
      this.img = img;
    }
  }
  // make product
  function makeProduct(name, style, type, img, price) {
    const product = new Product(name, style, type, img, price);
    products.push(product);
  }
  //produce product
  function produceProducts() {
    makeProduct('wedding style', 'beach wedding', 'arrangments', 'img/wedding-1.jpeg', '5000');
    makeProduct('wedding style', 'beach wedding', 'arrangments', 'img/wedding-2.jpeg', '2000');
    makeProduct('wedding style', 'beach wedding', 'arrangments', 'img/wedding-3.jpeg', '50000');
    makeProduct(' white cake', 'wedding', 'cakes', 'img/cake-1.jpeg', '500');
    makeProduct('pink cake', 'wedding', 'cakes', 'img/cake-2.jpeg', '500');
    makeProduct('yellow cake', 'wedding', 'cakes', 'img/cake-3.jpeg', '500');
    makeProduct('Wedding flowers', 'wedding', 'flowers', 'img/wedding-flowers-1.jpeg', '300');
    makeProduct('Wedding flowers', 'wedding', 'flowers', 'img/wedding-flowers-2.jpeg', '500');
    makeProduct('Wedding flowers', 'wedding', 'flowers', 'img/wedding-flowers-3.jpeg', '500');
    makeProduct('Wedding rings', 'wedding', 'rings', 'img/wedding-rings-1.jpeg', '8000');
    makeProduct('Wedding rings', 'wedding', 'rings', 'img/wedding-rings-2.jpeg', '2000');
    makeProduct('Wedding rings', 'wedding', 'rings', 'img/wedding-rings-3.jpeg', '7000');
  }
  produceProducts();
  return {
    products,
  };
})();

//Display all products Module

const displayAllProducts = ( () => {
    const products = createProduct.products;
    // console.log(products);
//product container
const productContainer = document.querySelector('.product-container');
document.addEventListener('DOMContentLoaded', () => {
  productContainer.innerHTML = '';
  let output = '';
  products.forEach( product => {
     output += `  <!-- single product -->
      <div class="col-10 mx-auto col-md-6 col-lg-4 my-3 single-product ${product.type}">
        <div class="card product-card">
          <img src="${product.img}" class="card-img-top product-img" alt="">
          <!-- card body -->
          <div class="card-body">
            <div class="product-info d-flex justify-content-between">
              <!-- first flex child -->
              <div class="product-text primary-color">
                <h6 class="font-weight-bold text-uppercase">${product.name}</h6>
                <h6 class="text-capitalize">${product.style}</h6>
              </div>
              <!-- second flex child -->
              <h5 class="product-value align-self-center secondary-color">$
                <span class="product-price">${product.price}</span>
              </h5>
            </div>
          </div>
          <!-- card footer -->
          <div class="card-footer d-flex justify-content-between text-capitalize">
            <p><span><i class="fa fa-ring"></i> rose</span></p>

            <p><span><i class="fa fa-kiss-wink-heart"></i> style</span></p>
          </div>
        </div>
      </div>
      <!-- end of single product -->`;
      productContainer.innerHTML = output;
  });
});
})(createProduct);


//filter products Module
const FilterCars = (() => {
const filter = document.querySelectorAll('.filter-btn');
filter.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const value = event.target.dataset.filter;
    console.log(value);
    const singleProduct = document.querySelectorAll('.single-product');

    singleProduct.forEach( product => {
      if(value === 'all') {
        product.style.display='block';
      }
      else {
        (!product.classList.contains(value)) ? product.style.display = 'none' : product.style.display='block';
      }
    });
  });
});

})();
