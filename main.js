// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")




// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")




// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE

// Rplace One Button appended
const button = document.createElement("button")
button.innerHTML = "Replace One";
const fieldset = document.getElementsByTagName("fieldset")[0];
fieldset.append(button);
console.log(button)
let replaceOneButton = button


let RecordChanges = 0;
replaceOneButton.addEventListener("click", function () {
    let findOneValue = findInput.value
    let replaceOneValue = replaceInput.value
    console.log(findOneValue)
    console.log(replaceOneValue)

    if (findOneValue.length == 0 || replaceOneValue.length == 0) { alert('Value Is not Entered') }
    else {
        for (let rowindex = 0; rowindex < rowElements.length; rowindex ++) {
            let cellrows = getCellElements(rowElements[rowindex])

            for (let cellIndex = 0; cellIndex < cellrows.length; cellIndex ++) {
                if (cellrows[cellIndex].innerText.includes(findOneValue)) {
                    let replacement = cellrows[cellIndex].innerText
                    replacement = replacement.replace(findOneValue, replaceOneValue)
                    cellrows[cellIndex].innerHTML = replacement
                    rowindex = rowElements.length
                    RecordChanges ++
                    console.log('Record of Changes ' + RecordChanges)
                }
            }
        }
    }

})
// replaceAllButton
let RecordChangesAll = 0
replaceAllButton.addEventListener("click", function () {
    let findValue = findInput.value
    let replaceValue = replaceInput.value
    console.log(findValue)
    console.log(replaceValue)
    if (findValue.length == 0 || replaceValue.length == 0) { alert('Enter The Value') }
    else {
        for (let outerIndex = 0; outerIndex < rowElements.length; outerIndex ++) {
            let cellrows = getCellElements(rowElements[outerIndex])
            for (let innerIndex = 0; innerIndex < cellrows.length; innerIndex ++) {


                if (cellrows[innerIndex].innerText.includes(findValue)) {
                    let replacement = cellrows[innerIndex].innerText
                    replacement = replacement.replace(findValue, replaceValue)
                    cellrows[innerIndex].innerHTML = replacement
                    RecordChangesAll +=1
                    console.log('Record of Changes ' + RecordChangesAll)

                }
            }
        }
    }
})
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer