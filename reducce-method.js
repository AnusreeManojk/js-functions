const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Initialize an empty object to store the frequencies
const frequencyMap = fruits.reduce((frequencyObject, fruit) => {
  if (frequencyObject[fruit]) {
    frequencyObject[fruit]++;  // Increment the count if the fruit is already present
  } else {
    frequencyObject[fruit] = 1;  // Initialize the count to 1 if it's the first occurrence
  }
  return frequencyObject;
}, {});

console.log(frequencyMap);


