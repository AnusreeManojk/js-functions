const users = [
    { name: 'Alice', age: 24 },
    { name: 'Bob', age: 27 },
    { name: 'Charlie', age: 30 },
  ];
  
  // Step 1: Use the filter method to filter users older than 25
  const usersOlderThan25 = users.filter(user => user.age > 25);
  
  // Step 2: Use the map method to extract names from the filtered users
  const namesOfUsersOlderThan25 = usersOlderThan25.map(user => user.name);
  
  // Output the result
  console.log(namesOfUsersOlderThan25); // Output: [ 'Bob', 'Charlie' ]
  