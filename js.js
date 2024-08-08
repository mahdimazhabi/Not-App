const $=document;
const inputElement=$.querySelector("#input-field")
const btnAdd=$.querySelector("#btn-save")
const colorbox=$.querySelectorAll(".color-box")
const listtext=$.querySelector("#listed")
const btnromove=$.querySelector("#btn-delete")

colorbox.forEach(function(colorbox) {
    colorbox.addEventListener('click', function(event) {
    let boxbackgroundColor=event.target.style.backgroundColor
    inputElement.style.backgroundColor=boxbackgroundColor
    
});
});

btnAdd.addEventListener("click",function(){
   let newNotelementnot=$.createElement("div")
   newNotelementnot.className="card shodow-sm rounded"
   let inputbg=inputElement.style.backgroundColor
   newNotelementnot.style.backgroundColor=inputbg


   let newelemnewp=$.createElement("p");
   newelemnewp.className="card-text p-3"
   newelemnewp.innerHTML=inputElement.value

   newNotelementnot.append(newelemnewp)
   listtext.append(newNotelementnot)
   inputElement.value=" "
   inputElement.style.backgroundColor="#fff"
   btnromove.addEventListener("click",function(){
       newNotelementnot.remove();
   })
   listtext.addEventListener("click",function(event){
    console.log(event);
      if((event.target.tagName)==="P"){
        newNotelementnot.remove();
      }
   
   })
})


