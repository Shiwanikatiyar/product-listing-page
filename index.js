const nav = document.getElementById("nav");
const main = document.getElementById("main")

// fetch data

let URL ='https://fakestoreapi.com/products'

const fetchProduct = async () => {
    try{
        let res = await fetch(URL)
        let data = await res.json()
        console.log(data);
        displayData(data)
    }
    catch(error){
        console.log("error");
    }
}
fetchProduct()

// display data
const displayData = (data) => {
    data.forEach(function(product) {
        let container = document.createElement("div");
        container.className = "container";

        let title = document.createElement("h2");
        title.innerText = product.title;

        let productImg = document.createElement("img");
        productImg.src = product.image;

        let price = document.createElement("p");
        price.innerText = product.price;

        container.append(productImg,title,price);

        main.append(container);
    })
}


// search box 

let searchBtn = document.getElementById("input");
// searchBtn.innerHTML = ""

var input = JSON.parse(localStorage.getItem("searchBtn")) || [];

console.log(input)
displayData(input)

localStorage.setItem("searchBtn" , JSON.stringify(input));