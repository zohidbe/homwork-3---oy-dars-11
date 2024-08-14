function collectNestedObjects(obj, result = []) {
    if (typeof obj === 'object' && obj !== null) {
        result.push(obj);

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    collectNestedObjects(obj[key], result);
                }
            }
        }
    }
    return result;
}

// Funksiyani sinab ko'rish
const exampleObj = {
    "name": "my name",
    "age": 10,
    "cities": [
      {
        "name": "Hello",
        "country": "india",
        "state": "something",
        "email": "myemail@gmail.com",
        "is_active": true
      }
    ],
    "is_present": true
  };

const nestedObjectsArray = collectNestedObjects(exampleObj);
console.log(nestedObjectsArray);


// task 2 
function extractObjects(array) {
  let objectsArray = [];
  
  array.forEach(item => {
      if (typeof item === 'object' && !Array.isArray(item) && item !== null) {
        
          objectsArray.push(item);
      }
  });
  
  return objectsArray;
}

const mixedArray = [1, { name: 'John' }, 'hello', { age: 25 }, 42, ['array'], null];


const objectsOnlyArray = extractObjects(mixedArray);
console.log(objectsOnlyArray); 
