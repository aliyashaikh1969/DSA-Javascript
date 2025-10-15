const arrays = document.querySelector(".arrays");
// const result = document.querySelector(".result");
// const arrlen = document.querySelector('.length')


let array = [12, 34, 32, 22, 12, 1, 4, 89, 112]
// let array = [1,2,3,4]
// arrays.innerHTML = `[${array}]`


// array traverse
for (let i = 0; i < array.length; i++) {
    // console.log("array",array[i])
}
// console.log("decensing")
for (let i = array.length - 1; i >= 0; i--) {
    // console.log("array", array[i])
}


// ARRAY accessing

// let position = 3;
// console.log(array[position])



// accessing array element by input value

const accessInput = document.querySelector('.access-input')
const accessButton = document.querySelector('.access-btn')

// accessButton.addEventListener("click", () => {
//     let position = accessInput.value
//     console.log(typeof position)
//     if (position < array.length) {
//         result.textContent = array[position];
//     } else {
//         alert("enter valid input")
//         accessInput.value = ""
//     }
// })







// adding element on array

const elemInput = document.querySelector(".elemInput");
const elemPosition = document.querySelector(".elemPosition");
const addBtn = document.querySelector(".add-btn");


// addBtn.addEventListener("click", () => {
//     let position = elemPosition.value
//     if (position !== "") {
//         for (let i = array.length - 1; i >= 0; i--) {

//             if (i >= position) {
//                 array[i + 1] = array[i]
//                 if (i == position) {
//                     array[i] = elemInput.value
//                 }
//             }
//         }
//     } else {
//         array[array.length] = elemInput.value
//     }
//     // console.log(array[i])
//     arrays.innerHTML = `[${array}]`
//     elemInput.value = "";
//     elemPosition.value = ''
//     arrlen.textContent = array.length - 1
// })





// removing element from an array

const removeBtn = document.querySelector('.remove-btn');
const removeInput = document.querySelector('.elemRemove')


// removeBtn.addEventListener('click', () => {
//     for (let i =parseInt(removeInput.value); i < array.length; i++) {
//         array[i] = array[i+1]
//     }
//     array.length = array.length-1
//     arrays.innerHTML = `[${array}]`
// })







// searching element from an array


const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.elemSearch');
const searchPosition = document.querySelector('.searchPosition')


// searchBtn.addEventListener('click', () => {
//     // console.log(searchInput.value)

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == searchInput.value) {
//             searchPosition.textContent = i
//             console.log(i, array[i])
//             break;
//         } else {
//             searchPosition.textContent = "not in the array"
//         }
//     }
// searchInput.value = ""
// })




// merging arrays with the help of for loop nad while loop

// const array2 = document.querySelector('.array2')
// const forLoopBtn = document.querySelector(".for-loop")
// const whileLoopBtn = document.querySelector(".while-loop")
// let result = [];

// let array1 = [1, 3, 12, 54, 62, 9, 13]
// array2.textContent = `[${array1}]`


// forLoopBtn.addEventListener("click", () => {
//     console.log("forloop")
//     for (let i = 0; i < array.length; i++) {
//         console.log(i)
//         result[i] = array[i]
//     }
//     for (let i = 0; i < array1.length; i++) {
//         console.log(i)
//         result[i + array.length] = array1[i]
//     }
//     console.log(result)
// })

// whileLoopBtn.addEventListener("click", () => {
//     console.log("whileloop")

//     let len1 = 0
//     let len2 = 0
//     let len3 = 0


//     while (len1 < array.length || len2 < array1.length) {
//         if (len1 < array.length) {
//             console.log("len1", len1, array[len1])
//             result[len1] = array[len1]
//             len1++
//         } else {
//             console.log("len2", len2 + array.length, array1[len2])
//             result[len2 + array.length] = array1[len2]

//             len2++
//         }
//         console.log(result)
//     }


// })


// sort an arrays with the help of for loop and while loop

const arraySorting = document.querySelector(".array-sorting")
const forLoopSortBtn = document.querySelector(".for-loop-sort")
const whileLoopSortBtn = document.querySelector(".while-loop-sort");


// forLoopSortBtn.addEventListener("click",()=>{
//     for(let i = 0 ; i<array.length;i++){
//         for(let j =0 ;j<array.length;j++){
//             if(array[j]>array[j+1]){
//                 let swap = array[j]
//                 array[j] = array[j+1];
//                 array[j+1]= swap
//             }
//         }
//     }
//     console.log(array)
//     arraySorting.innerHTML = `[${array}]`
// })


// whileLoopSortBtn.addEventListener("click", () => {
//     let i = 0
//     while (i < array.length) {
//         let j = 0
//         while (j < array.length) {

//             if (array[j] > array[j + 1]) {
//                 let swap = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = swap
//             }
//             j++
//         }
//         i++;
//     }

//     console.log(array)
// })



 

// RECURSION BASIC


let rupess = 100
let totalApple = 0
let appleMRP = 20


function buyingApple(){
    if(rupess>0){
        rupess = rupess-appleMRP
        totalApple++
        console.log("total apple :",totalApple,"rupess remaining",rupess)
        buyingApple(rupess)
    }
}
buyingApple()

