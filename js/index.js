/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeople = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

// Get number of people from number of people div 

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
        const bill = Number(billTotalInput.value)
  
    // get the tip from user & convert it into a percentage (divide by 100)
        const tip = Number(tipInput.value) / 100
  
    // get the total tip amount
        const totalTip = bill * tip
    
    // calculate the total (tip amount + bill)
        const total = bill + totalTip
  
    // calculate the per person total (total divided by number of people)
        const perPerson = total / Number(numberOfPeople.textContent)
  
    // update the perPersonTotal on DOM & show it to user
        perPersonTotal.textContent =`$ ${perPerson.toFixed(2)}` 
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
        const newPeople = Number(numberOfPeople.textContent) + 1 
  
    // update the DOM with the new number of people
        numberOfPeople.textContent = newPeople 
        
    // calculate the bill based on the new number of people
        calculateBill()
       // perPersonTotal.textContent =  / numberOfPeople.textContent
        console.log(perPersonTotal.textContent)
    
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
        if (numberOfPeople.textContent <= 1) {
            return
        }
    
    // decrement the amount of people
        numberOfPeople.textContent = numberOfPeople.textContent - 1
  
    // update the DOM with the new number of people
        calculateBill()
    // calculate the bill based on the new number of people
        
  }







// color button counter which manipulates with DOM and uses forEach() loop 



//   const squares = document.querySelectorAll('.color-btn')
//   console.log(squares);

//   const timesClicked = {
//     'red': 0,
//     'green': 0,
//     'blue': 0
//  }

//   squares.forEach(square => {

//     square.onclick = () => {
//         console.log(square.value)
//     }

//     square.onclick = () => {
//         timesClicked[square.value] += 1
//         square.innerHTML = timesClicked[square.value]
//     }
//   })

//   const clearBtn = document.getElementById('clear-btn')

//   clearBtn.onclick = () => {
//     timesClicked.red = 0
//     timesClicked.green = 0
//     timesClicked.blue = 0
//     squares.forEach(square => square.innerHTML = '')
//   }





// Tip calculator practice 



// const billTotalInput = document.getElementById('billTotalInput')
// const tipInput = document.getElementById('tipInput')
// const numberOfPeople = document.getElementById('numberOfPeople')
// const perPersonTotal = document.getElementById('perPersonTotal')

// const calculateBill = () => {
//     const bill = billTotalInput.value
    
//     const tipPercentage = Number(tipInput.value) / 100

//     const tip = bill * tipPercentage

//     const total = Number(bill) + Number(tip)

//     const finalTotal = total / Number(numberOfPeople.innerHTML)

//     perPersonTotal.innerHTML = `$ ${finalTotal.toFixed(2)}` 

// }

// const increasePeople = () => {

//     numberOfPeople.innerHTML = Number(numberOfPeople.innerHTML) + 1

//     calculateBill()
// }

// const decreasePeople = () => {

//     if (numberOfPeople.innerHTML <= 1) {        // this condition work as guard clause it prevents number of people to go down from 1 as we don't need value in 0 or minus.
//         return      // this return nothin and tells that when this occurs stop right here don't go any further
//     }


//     // This code will only work if condition obove is false 
//     numberOfPeople.innerHTML = Number(numberOfPeople.innerHTML) -1 

//     calculateBill()
// }
