// console.log('hello')


let sum=0
function cardImageButton(result){

const output=result.parentNode.childNodes[3].childNodes[3].innerText;

const liSetUp=document.getElementById('listCreate')

const liCreate=document.createElement('li')

liCreate.innerText=output
liSetUp.appendChild(liCreate)

const mathResult = result.parentNode.childNodes[3].childNodes[5].innerText.split(" ")[1]
 console.log(mathResult)
const amount=document.getElementById('added')
sum = parseFloat(sum)+ parseFloat(mathResult)
// sum= parseInt (sum) + parseInt(mathResult)
amount.innerText=sum
if(sum>=1){

const refreshButton=document.getElementById('makePurchase')

refreshButton.disabled=false
}

if(sum>=200){
const applyButton= document.getElementById('applyButton')
applyButton.disabled=false
}











}



 function ApplyButton(apply){

    let inputField=document.getElementById('inputField').value
  
if(inputField>=100){

   
const discount=20;
const outputInput=(inputField*discount)/100




const inputParse=(apply.parentNode.childNodes[11].innerText.split(" ")[1])

 inputField=parseInt(outputInput)+ parseInt(inputParse)

// console.log(inputField)

const finallyDiscount=document.getElementById('totalDiscount')

finallyDiscount.innerText=inputField

// console.log(outputInput)
}
// inputField.value==''


// total price amount set here

const totalAmount=document.getElementById('totalAmount')

const tptalPrice=sum + inputField

totalAmount.innerText=tptalPrice

 }

function modalPurchase(){

// console.log(modal)




}



