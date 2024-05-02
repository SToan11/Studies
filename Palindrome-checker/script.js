function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lower case
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
  }

  // Function to handle button click
  function checkPalindrome() {
    var inputText = document.getElementById("text-input").value;
    var resultDiv = document.getElementById("result");
    // Check if inputText is empty
    if (!inputText) {
      alert("Please input a value");
      return; // Stop execution if inputText is empty
    }
    // Check if the input is a palindrome
    if (isPalindrome(inputText)) {
      resultDiv.textContent = `${inputText} is a palindrome`;
    } else {
      resultDiv.textContent = `${inputText} is not a palindrome`;
    }
  }

  // Attach click event listener to the button
  document.getElementById("check-btn").addEventListener("click", checkPalindrome);