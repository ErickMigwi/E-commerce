let items = document.getElementById('cartedItems')
let cartedItems = JSON.parse(localStorage.getItem('cartedItems'))

cartedItems.forEach(element => {
    items.innerHTML+=`
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    <li>
    <h3>${element.title}</h3>
    <img src="${element.image}" alt="" srcset="">
    <p>${element.description}</p>
    <h4>Ksh${element.price}<h4>
    <button id='delete' data-id=${element.id}><i class="fa fa-trash" aria-hidden="true"></i></button>
    <button id="addQuantity">AddQuantity</button>
    </li>`
})
let deleteBtn = document.querySelectorAll('#delete')
 
deleteBtn.forEach(element => {
    element.addEventListener("click", ()=>{
        let deleteId= element.getAttribute("data-id")
        cartedItems.forEach((element, index) => {
         if(element.id==deleteId){
            cartedItems.splice(index, 1);
            localStorage.setItem("cartedItems", JSON.stringify(cartedItems))
             location.reload()
         }
        });
       
    })
    
});

