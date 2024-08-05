const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

function findCommonElements(arr1, arr2) {
  // Use a Set to store unique elements from arr1
  const set1 = new Set(arr1);

  // Use filter to return elements that are present in both arr1 and arr2
  const commonElements = arr2.filter(element => set1.has(element));

  return commonElements;
}

// Test the function
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements); // Output: [3, 4]


