const arrays = document.querySelector(".arrays");
const result = document.querySelector(".result");
const arrlen = document.querySelector('.length')


let array = [12, 34, 32, 22, 12, 1, 4, 89, 112]
// let array = [1,2,3,4]
arrays.innerHTML = `[${array}]`


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


searchBtn.addEventListener('click', () => {
    // console.log(searchInput.value)

    for (let i = 0; i < array.length; i++) {
        if (array[i] == searchInput.value) {
            searchPosition.textContent = i
            console.log(i, array[i])
            break;
        } else {
            searchPosition.textContent = "not in the array"
        }

    }
})