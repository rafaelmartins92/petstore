// BACK TO TOP
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// When Scroll
window.addEventListener("scroll", function () {
  backToTop();
});

// ADD PRODUCT IN CART
const cart = document.querySelector(".cart");
const cartMobile = document.querySelector(".cart-mobile");
let productsInCart = 0;

function addToCart() {
  window.innerWidth > 1024
    ? cart.classList.add("cart-items")
    : cartMobile.classList.add("cart-items");
  productsInCart += 1;
  document
    .querySelector(".cart-items")
    .setAttribute("data-after", productsInCart);
}
