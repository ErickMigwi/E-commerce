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



