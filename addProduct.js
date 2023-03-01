let addProduct = document.getElementById('addProduct')
addProduct.innerHTML = `
<form id= 'Inputs'><label for="">Product Name
<input id="productName" type="text">
</label>
<label for="">Description
<input type= "text" id="description" cols="30" rows="10"></input>
</label>
<label for="">Price
<input id="productPrice" type="number" min="0.01" step="0.01" required>
</label>

<label >Select a category
<select id="category">
<option value="women's clothing">Women's Wear</option>
<option value="jewelery">Jewelery</option>
<option value= "men's clothing">Men's Wear</option>
<option value="electronics">Electronics</option>
</select>
</label>
<label for="">Enter  Image link:
<input id="productImage" type="text">

<div id="add"><button id= "addProducts">Add Product</button></div> 
</label>
</form>`
let addProducts = document.getElementById('addProducts')
addProducts.addEventListener('click', ()=>{
    let product = {
        title: document.getElementById("productName").value,
        Descritpion: document.getElementById('description').value,
        id: Math.floor(Math.random() * 100000),
        Category: document.getElementById('category').value,
        price: document.getElementById('productPrice').value,
        image:document.getElementById('productImage').value,
        ProductQuantity:document.getElementById("quantity").value
      };
      console.log(product);
      localStorage.setItem("product", JSON.stringify(product))
      let menWear = JSON.parse( localStorage.getItem("menItems"))
      let womenWear = JSON.parse( localStorage.getItem("womenItems"))
      let electronicsItems = JSON.parse( localStorage.getItem("electronicsItems"))
      let jeweleryItems = JSON.parse( localStorage.getItem("jeweleryItems"))
       if(product.Category== "jewelery"){
        jeweleryItems.push(product)
        localStorage.setItem('jeweleryItems', JSON.stringify(jeweleryItems) )
       }
       if(product.Category== "men's clothing"){
        menWear.push(product)
        localStorage.setItem('menItems', JSON.stringify(menWear) )
       }
       if(product.Category== "women's clothing"){
        womenWear.push(product)
        localStorage.setItem('womenItems', JSON.stringify(womenWear) )
       }
       if(product.Category== "electronics"){
        electronicsItems.push(product)
        localStorage.setItem('electronicsItems', JSON.stringify(electronicsItems) )
       }
       
      const apiUrl = "https://fakestoreapi.com/products";
fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(product),
})
  .then((response) => {
    if (response.ok) {
      console.log("Object successfully pushed to API.");
    } else {
      console.error("Error pushing object to API.");
    }
  })
  .catch((error) => {
    console.error("Error pushing object to API:", error);
  });
})
  let Cart = document.getElementById('Cart')
  Cart.addEventListener('click', ()=>{
    window.location.href= 'cartedItems.html'
    
  })