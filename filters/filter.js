let products={
    data:[{
        productName:"Regular White T-Shirt",
        catogory:"Topwear",
        price:"30",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGT3Ac0TNGPNSlpeDGtOkD11hfoCSaiX6Og&s"
    },
    {
        productName:"Beige short skirt",
        catogory:"Bottomwear",
        price:"49",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUDR7gfr77lK-lCDqwImNJJP7TQpWrQojSg&s"
    },
    {
        productName:"Sporty SmartWatch",
        catogory:"Watch",
        price:"99",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gAPbY0GkwwA9jAIDgFpo2suWq4pGdw_qkg&s"
    },
    {
        productName:"Basic Knitted Top",
        catogory:"Topwear",
        price:"29",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQBQNlndSI8h1QsIgloVW3Ec1qfsPq_S4ow&s"
    },
    {
        productName:"Black Leather Jacket",
        catogory:"Jacket",
        price:"129",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzT1gSQQ62RKmPx0d8hw1_F_2mf1Lvb3gHw&s"
    },
    {
        productName:"Stylish Pink Trousers",
        catogory:"Bottomwear",
        price:"89",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgSWdUuGNeyVcVAm9ECQtPmgY5nafVIW87w&s"
    },
    {
        productName:"Brown Men's Jacket",
        catogory:"Jacket",
        price:"189",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPadLo3-SQv36VAlCvMRX_BLEaOeaso5BNQ&s"
    },
    {
        productName:"Comfy gary Pants",
        catogory:"Bottomwear",
        price:"49",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQgmZzfFYaQQS4MWZPrjVDn6-bqDzu5qTbw&s"
    }
]
}
for (let i of products.data){
    // create card
    let card=document.createElement("div")
    // card shoud have catogory and  should stay hidden  initially
    card.classList.add("card","i.catogory" ,"hidde")
    let imgContainer =document.createElement("div")
    imgContainer.classList.add("image-container")
    // img tag
    let image=document.createElement("img")
    image.src=i.image
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)
    

    let container=document.createElement("div")
    container.classList.add("container")
    // product name
    let name=document.createElement("h5")
    name.classList.add("product-name")
    name.innerText=i.productName.toUpperCase()
    container.appendChild(name)
    let price=document.createElement("h6")
    price.innerText="$" +i.price
    container.appendChild(price)
    
    document.getElementById("products").appendChild(card);
}
//  parameter passed from button(Parameter same as category)

  function filterProduct(value){
    // button  class code
    let buttons=document.querySelectorAll(".button-value")
    buttons.forEach(button=>{
// chech if value equals to innertext
if(value.toUpperCase()==button.innerText.toUpperCase()){
button.classList.add("active")
}else{
    button.classList.remove("active")

}
    });
    let elements=document.querySelectorAll(".card")
    // loop through all cards
    elements.forEach(element=>{
        // display all cards on 'all' button click
        if(value=="all"){
            element.classList.remove("hide")
        }
        else{
            // check if element catogory
            if(element.classList.contains(value)){
// display
element.classList.remove("hide")
            }
            else{
                // hide other elements
                element.classList.add("")
            }
        }
    })
  }
//   search button click
document.getElementById("search").addEventListener("click",()=>{
    // initialization
    let searchInput=document.getElementById("search-input").value;
    let element=document.querySelectorAll(".product-name")
    let cards= document.querySelectorAll(".card")
    // console.log(searchInput)
    // loop  through all elements
    element.forEach((element,index)=>{
        if( element.innerText.includes(searchInput.toUpperCase())){
            // display matching card
            cards[index].classList.remove("hide");

        }
        
        else{
            // hide others
            cards[index].classList.add("hide")
        }
    })

})

    // Initially display all products

    window.onload=()=>{
        filterProduct("all")
    
}

