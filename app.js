let storeArray=[];
let storeCards=document.getElementById('storeCards')
console.log(storeCards);
function store(title,price,description,image){
    this.title=title  
    this.price=price                    
    this.description=description
    this.image=image  
    
}
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    // console.log(json)
    for(let i=0;i<json.length;i++){
        storeArray.push(new store(json[i].title,json[i].price,json[i].description,json[i].image))
      
    }
    let newArray=storeArray.map(store =>{
      let card=document.createElement('div')
      card.classList.add('store')
      storeCards.appendChild(card)
      
      let title=document.createElement('h3')
      card.appendChild(title)
      title.textContent=store.title
      let image=document.createElement('img')
      image.classList.add('cardImg')
      card.appendChild(image)
      image.setAttribute('src',store.image)

      let price=document.createElement('p')
      card.appendChild(price);
      price.textContent=`price: ${store.price}`
      let description=document.createElement('p')
      card.appendChild(description)
      description.textContent=`about store: ${store.description}`
    })
   
})







