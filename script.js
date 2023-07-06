import {product} from "./data/product.js"
import { imageslider } from "./data/imageslider.js"
import { topOffer} from "./data/topOffer.js"
import { fashion } from "./data/fashion.js"
import { adimages } from "./data/adimages.js"
import { gift } from "./data/gift.js"
import { style } from "./data/style.js"
// console.log(product);

function reload(){
    window.location.reload();
 }
let productlist = document.querySelector(".productlist")
let productlistItem = ''


product.forEach(el =>{
    // console.log(el);
    productlistItem += `
    <div class="productItem">
                    <a href="#">
                    <div class="produvtimg">
                    <img src="${el.img}">
                    </div>
                <div class="ar">
                <p class="productCAt">${el.name}</p>
            ${el.subnavigation ?`<i class="fa-solid fa-angle-down prodwon"></i>` : "" } 
            </div>
            </a>
            </div> `
})
productlist.innerHTML = productlistItem
//  console.log(imageslider)

let imagesliderr = document.querySelector(".imageList")
let imagessliderno = '';
 imageslider.forEach(el =>{
    
    imagessliderno += `
    <div class="imageiteam">
                    <a href="#">
                    <img src="${el.img}">
                </a>
                </div>`
 })

 imagesliderr.innerHTML = imagessliderno;

   let imagesliderrALl = document.querySelectorAll(".imageList")  
//    console.log(imagesliderrALl)   
let startbtn = document.getElementById("startbtn");
let endbtn = document.getElementById("endbtn");
// const arr = ()=>{
//     console.log("hi");
// }
//  startbtn.addEventListener('click', arr)
let start = 0;
let end = -400;
startbtn.addEventListener('click',firstimg)
endbtn.addEventListener('click',endimg)

function firstimg(){
    let imageall = document.querySelectorAll(".imageiteam");
    // console.log(imageall)
    if(start < 0)
     start +=100
     imageall.forEach(el =>{
         /* transform: translateX(-400%); */
         el.style.transform = `translateX(${start}%)`;
     });

}
function endimg(){
    let imageall = document.querySelectorAll(".imageiteam");
//    console.log(imageall)
   if(start > end)
    start -=100
    imageall.forEach(el =>{
        /* transform: translateX(-400%); */
        el.style.transform = `translateX(${start}%)`;
    });
  
};

function imgeaslider(){
    if(start >end){
        endimg()
    }
    else{
        start = 100
    }
}

setInterval(imgeaslider,3000)

let topofferr = document.querySelector(".electroniclist")
console.log(topofferr)
let topofferPro = "";


topOffer.forEach(el =>{
    topofferPro += `
    <div class="electronicitem">
                    
                    <div class="electronicMoreOption">
                        <img src="${el.img}" alt="">
                    </div>
                    <p class="Topiteam">${el.name}</p>
                    <h5 class="Price">${el.price}</h5>
                </div>
    `
})
topofferr.innerHTML = topofferPro;

let fashionn = document.querySelector(".fashionList");
// console.log(fashionn)
let fashionColone ="";
fashion.forEach(el =>{
    fashionColone += `
    <div class="fashioniteam">
    <div class="fashionImage">
        <img src="${el.img}" alt="">
    </div>
    <p class="fashionName">${el.name}</p>
    <h5 class="pricel">${el.price}</h5>
</div>
    `  

})

fashionn.innerHTML = fashionColone;

let adimage = document.querySelector(".Adproductlist")
let adimageClone = "";


adimages.forEach(el =>{
    adimageClone += `
    <div class="adieam">
               <div class="adimage">
                 <img src="${el.img}" alt="">
               </div>
            </div>`

})

adimage.innerHTML = adimageClone;

let gift1 = document.querySelector(".GiftList");
let giftclone = "";

gift.forEach(el =>{
    giftclone += `
    <div class="GiftIteam">
    <div class="giftimage">
        <img src="${el.img}" alt="">
    </div>
</div>
    `
})

gift1.innerHTML = giftclone;

let style1 = document.querySelector(".styleList")
let sytle2 = "";

style.forEach(el =>{
    sytle2  += ` <div class="styleiteam">
    <div class="styleimg">
        <img src="${el.img}" alt="">
    </div>
    <p class="StyleName">${el.name}</p>
    <h5 class="stylePrice">${el.price}</h5>

</div>
    `
})
 
style1.innerHTML = sytle2;
