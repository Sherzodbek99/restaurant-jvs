import {menuArray}  from "./data.js"

// const plusPizza = document.getElementById('plusPizza')
// const plusBurger = document.getElementById('plusBurger')
// const plusBeer = document.getElementById('plusBeer')
let menu = document.getElementById('menu')
let yourOrder = document.getElementById('yourOrder')
let inner = document.getElementById('inner')
let totalP = document.getElementById('totalP')
let totalPrice = 0


for(let i = 0; i < 3; i++){
    menu.innerHTML += 
    `<div class="sec">
        <p class="icon">${menuArray[i].emoji}</p>
        
        <div class="info">
            <p class="nameItem">${menuArray[i].name}</p>
            <p class="inside">${menuArray[i].ingredients}</p>
            <p class="price">$${menuArray[i].price}</p>
        </div>
        
        <i class="fa-solid fa-circle-plus" id="${menuArray[i].name}"></i>
    </div>`
}

Pizza.addEventListener('click', function(){
    yourOrder.style.display = 'flex'
    if(menuArray[0].isClicked == false){
    document.getElementById('orderP').innerHTML += `<section class="order">

                                <p class="nameItem">Pizza</p>
                                <button id="removeP" class="remove">remove</button>
                                <p class="priceOrder" id="priceP" >$${menuArray[0].price}</p>
                            </section>
`
    const remP = document.getElementById('removeP')
    let orderPiz = document.getElementById('orderP')

    remP.addEventListener('click', function(){
        
        totalPrice = totalPrice - menuArray[0].price
        totalP.innerText = "$" + totalPrice
        menuArray[0].price = 0  
        
        document.getElementById('priceP').innerText = "$" + menuArray[0].price
    })
    
    totalPrice += menuArray[0].price
    totalP.innerText = "$" + totalPrice
    
    menuArray[0].isClicked = true
    } else {
        menuArray[0].price += 14  
        
        document.getElementById('priceP').innerText = "$" + menuArray[0].price
        totalPrice += 14
        totalP.innerText = "$" + totalPrice
                 
        }
    
    


})
Hamburger.addEventListener('click', function(){
    yourOrder.style.display = 'flex'
    
    if(menuArray[1].isClicked == false){
        document.getElementById('orderH').innerHTML += `<section class="order">

        <p class="nameItem">Hamburger</p>
        <button class = "remove" id = "removeH" data-remove = ${menuArray[1].id}>remove</button>
        <p class="priceOrder" id = "priceH">$${menuArray[1].price}</p>
    </section>`


    const remH = document.getElementById('removeH')
    let orderHam = document.getElementById('orderH')

    remH.addEventListener('click', function(){
        
        totalPrice = totalPrice - menuArray[1].price
        totalP.innerText = "$" + totalPrice
        menuArray[1].price = 0  
        
        document.getElementById('priceH').innerText = "$" + menuArray[1].price
    })


    totalPrice += menuArray[1].price
    totalP.innerText = "$" + totalPrice

    menuArray[1].isClicked = true
    } else {
        menuArray[1].price += 12 
        totalPrice += 12
        document.getElementById('priceH').innerText = "$" + menuArray[1].price 
        totalP.innerText = "$" + totalPrice
                
        }
    
      
})



Beer.addEventListener('click', function(){
    yourOrder.style.display = 'flex'
    if(menuArray[2].isClicked == false){
      
        document.getElementById('orderB').innerHTML += `<section class="order">
                                <p class="nameItem">Beer</p>
                                <button class = "remove" id = "removeB" data-remove = ${menuArray[2].id}>remove</button>
                                <p class="priceOrder" id = "priceB">$${menuArray[2].price}</p>
                            </section>
`     
    const remB = document.getElementById('removeB')

    remB.addEventListener('click', function(){
        
        totalPrice = totalPrice - menuArray[2].price
        totalP.innerText = "$" + totalPrice
        menuArray[2].price = 0  
        
        document.getElementById('priceB').innerText = "$" + menuArray[2].price
    })
    totalPrice += menuArray[2].price
    totalP.innerText = "$" + totalPrice

    menuArray[2].isClicked = true
    } else {
        
        totalPrice += 12
        totalP.innerText = "$" + totalPrice
        menuArray[2].price += 12  
        document.getElementById('priceB').innerText = "$" + menuArray[2].price          
        }
    

})


const modal = document.getElementById('modal')
const formModal = document.getElementById('form-modal')
const complete = document.getElementById('complete')
const submit = document.getElementById('modal-submit')


complete.addEventListener('click',() => {
    modal.style.display = 'inline'
});

formModal.addEventListener('submit', function(e){
    e.preventDefault()

    const formModalData = new FormData(formModal)
    const fullName = formModalData.get('fullName')
    modal.style.display = 'none'
    
    yourOrder.innerHTML = 
    `<section class="final">
    <h2>Thanks <span class="modalName">${fullName}</span>, your order is on its way! </h2>
    
    </section>
    
    `
})







