let images= document.getElementById('images')
let Jewelery = document.getElementById('Jewelery')
let MenWear = document.getElementById('MenWear')
let WomenWear = document.getElementById('WomenWear')
let Electronics = document.getElementById('Electronics')
let Cart = document.getElementById('Cart')
let addItem = document.getElementById('addItem')
let addProduct = document.getElementById('addProduct')
Jewelery.addEventListener('click', ()=>{
  window.location.href = 'indexJew.html';
})
Electronics.addEventListener('click', ()=>{
  window.location.href = 'electronics.html';
})
WomenWear.addEventListener('click', ()=>{
  window.location.href = 'womenWear.html';
})
MenWear.addEventListener('click', ()=>{
  window.location.href = 'menWear.html';
})
Cart.addEventListener('click', ()=>{
  window.location.href= 'cartedItems.html'
  console.log(789);
})
addItem.addEventListener('click', ()=>{
window.location.href = 'addProduct.html'
})
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
