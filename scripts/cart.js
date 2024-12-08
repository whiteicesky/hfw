// Корзина
let cart = [];

// Загрузка корзины из LocalStorage при загрузке страницы
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
}

// Сохранение корзины в LocalStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart)); // Преобразуем объект в строку
}

// Функция добавления товара в корзину
function addToCart(id) {
  const productCard = document.querySelector(`.product-card[data-id='${id}']`);
  const name = productCard.getAttribute("data-name");
  const price = parseFloat(productCard.getAttribute("data-price"));
  const image = productCard.getAttribute("data-image");

  // Проверяем, есть ли товар уже в корзине
  const existingProduct = cart.find(item => item.id === id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1, image });
  }
  saveCart();
  updateCartUI();
}

// Обновить интерфейс корзины
function updateCartUI() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout");

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  totalPrice.textContent = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  total = parseFloat(totalPrice.textContent)
  if (total === 0) {
    checkoutButton.setAttribute("disabled", "true");
    checkoutButton.disabled = true;
    checkoutButton.classList.add("disabled"); // Добавляем класс для стилизации, если нужно
  } else {
    checkoutButton.removeAttribute("disabled");
    checkoutButton.disabled = false;
    checkoutButton.classList.remove("disabled");
  }
  // Отображение товаров в корзине
  cartItems.innerHTML = "";
  cart.forEach(item => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <p>${item.name}</p>
          <p>Price: ${item.price}$</p>
          <p>Count: 
            <button class="minus-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
            ${item.quantity}
            <button class="plus-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
          </p>
          <p><button class="delete-btn" onclick="removeFromCart(${item.id})">Delete</button></p>
          
        </div>
      </div>
      <hr>
      <br>
    `;
  });
}

// Увеличить или уменьшить количество товара
function changeQuantity(id, delta) {
  const product = cart.find(item => item.id === id);
  if (!product) return;

  product.quantity += delta;
  if (product.quantity <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    updateCartUI();
  }
}

// Удалить товар из корзины
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

// Переключение отображения корзины
function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.classList.toggle("active");
}

document.addEventListener("click", (event) => {
  const cartModal = document.getElementById("cart-modal");
  
  if (cartModal.classList.contains("active")) {
    const cartContent = document.querySelector(".cart-content");
    
    if (!cartContent.contains(event.target)) {
      cartModal.classList.remove("active");
    }
  }
});

// Предотвращение всплытия события для кнопки корзины
document.querySelector(".cart-button").addEventListener("click", (event) => {
  event.stopPropagation(); // Остановка всплытия события
});

// Предотвращение всплытия события для содержимого корзины
document.querySelector(".cart-content").addEventListener("click", (event) => {
  event.stopPropagation(); // Остановка всплытия события
});

document.getElementById("checkout").addEventListener("click", function () {
  const userConfirmed = confirm("Do you want to proceed to the checkout page?");
  if (userConfirmed) {
    window.location.href = "payment.html";
  }
});

window.addEventListener("DOMContentLoaded", loadCart);


