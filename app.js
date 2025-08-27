const arrays = document.querySelector(".arrays")

let array = [12,34,32,2,89,76,44,0,1,56]
arrays.innerHTML =`[${array}]`


// array traverse
for(let i =0 ; i<array.length;i++){
    // console.log("array",array[i])
}
console.log("decensing")
for(let i = array.length-1 ; i>=0 ;i--){
    // console.log("array", array[i])
}


// ARRAY accessing

let position = 3;
// console.log(array[position])



// accessing array element by input value

const accessInput = document.querySelector('.access-input')
const accessButton = document.querySelector('.access-btn')

accessButton.addEventListener("click",()=>{
    let position = accessInput.value
    if(position<array.length && typeof position == "number"){

        console.log(array[position])
    }else{
        alert("enter valid input")
    }
})

