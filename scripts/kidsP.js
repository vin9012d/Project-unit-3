import {displayProduct,wishlist} from "../scripts/export.js"


let arr = JSON.parse(localStorage.getItem("kids"));
let productBox = document.getElementById("products_append")
let array = [];

displayProduct(arr,productBox,array);//this function will going to display product 

window.attireFilter = ()=>{
    //console.log("hello")//check if function is working or not
    let selected = document.getElementById("filter").value;
    if(selected=="usual"){//if this statement went true it will going to display data in their usal order
        displayProduct(arr,productBox,array);
        return;
    }
    let filterData = arr.filter((el)=>{
        return el.type == selected;
    })
    displayProduct(filterData,productBox,array);
}

window.sorting = ()=>{
    let selected = document.getElementById("sorting").value;
    if(selected == "LTH"){//This statement will going to sort by Low to High price
        arr.sort((a,b)=>{
            let x =+a.price;
            let y =+b.price;
            if(x>y){
                return 1;
            }
            else if(y>x){
                return -1;
            }
            else{
                return 0;
            }
        })
        displayProduct(arr,productBox,array);
    }
    if(selected == "HTL"){//This function will going to sort by High to Low price
        arr.sort((a,b)=>{
            let x =+a.price;
            let y =+b.price;
            if(x>y){
                return -1;
            }
            else if(y>x){
                return 1;
            }
            else{
                return 0;
            }
        })
        displayProduct(arr,productBox,array);
    }
    if(selected == "usual"){
        displayProduct(arr,productBox,array);//this will going to bring products in their usual order
    }

}