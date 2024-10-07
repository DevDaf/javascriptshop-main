const cartButton = document.querySelector('.cta-select'); 
const addToCartButton = document.querySelector('.cta-add');
const cartBadge = document.querySelector('.badge');
let cartCount = 0; 


function updateCart() {
  cartBadge.setAttribute('value', cartCount); 
  if (cartCount > 0) {
    cartButton.textContent = 'Remove from cart'; 
    addToCartButton.disabled = false; 
  } else {
    cartButton.textContent = '14 Inch'; 
  }
}


addToCartButton.addEventListener('click', function () {
  cartCount++; 
  updateCart(); 
});


cartButton.addEventListener('click', function () {
  if (cartCount > 0) {
    cartCount--; 
    updateCart(); 
  }
});