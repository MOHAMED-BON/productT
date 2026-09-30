let Btn = document.querySelector(".btn")
let Div = document.querySelector(".Div")
 Btn.addEventListener("click",async()=>{
 let rej = await fetch('https://dummyjson.com/products');
 let data = await rej.json();
 let products = data.products
  console.log(products);
  
  let nemPro= products.filter(id=>id.id<=10)
Div.innerHTML = ""
nemPro.forEach( (card)=>{

Div.innerHTML +=`<div class="card" style="width: 18rem;">
  <img src="${card.images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
 
    <h5 class="card-title">${card.title}</h5>
    <p class="card-text">${card.description}</p>
     <h4 class="card-title"> EGP${card.price}</h4>
    <a href="#" class="btn btn-primary">ADD to cart</a>
  </div>
</div>`

}
)

  



 
 



 })

 