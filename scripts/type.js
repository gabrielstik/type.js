function type() {
  let element = document.querySelector(".type") // Your element
  let content = element.innerHTML // Getting the content of your element
  let lenght = content.length // Getting its length
  let start_interval, type_interval
  element.innerHTML = "" // Setting its content to void

  if (element.getAttribute("type-start")) {
    // If attributes are not empty
    let start_interval = element.getAttribute("type-start") // Interval before begining
    let type_interval = element.getAttribute("type-interval") // Interval between chars
  } else {
    // If they are, use default values
    let start_interval = 1000 // Setting default values
    let type_interval = 100 // Idem
  }

  let i = 0 // Setting up loop increment to 0

  setTimeout(() => {
    // After start_interval (*)
    writeInterval = setInterval(() => {
      // Do writeInterval each type_interval (**)
      element.innerHTML += content.charAt(i) // Add to your element content its content plus the current incrementation letter
      i++; // Increments
      if (i >= lenght) {
        // If incrementation is as more as the length of your element
        clearInterval(writeInterval); // Clear interval: stop function
      }
    }, type_interval) // **
  }, start_interval) // *
}
type();
