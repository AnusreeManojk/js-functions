let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
//   alert(message);
}

console.log(userName); // John before the function call

showMessage();

// alert( userName ); // Bob, the value was modified by the function


 
