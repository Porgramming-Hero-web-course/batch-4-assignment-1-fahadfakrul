{
  const getProperty = <T, Q extends keyof T>(object: T, key: Q): T[Q] => {
    return object[key];
  };

  // Sample Input:
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}
