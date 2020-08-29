# JSPractice

## Array integer filtering

```js
function filter_list(l) {
  const result = [];
  
  for (let index = 0; index <= l.length-1; index++) {
    const item = l[index];
    
    if (Number.isInteger(item)) {
      result.push(item);
    }   
  }
  
  return result;
}
```

## Extract number and sort

```js
function order(words) {
  // Keep track of resulting ordered strings
  let result = [];
  
  // Split words string into pairs of word + number, eg: T4est
  let pairs = words.split(' ');
  
  // Extract number and letters from each pair
  for (let pair of pairs) {
    let word = '';
    let number = 0;
    
    // Check each character of the pair to determine letter/digit
    for (let index = 0; index < pair.length; index++) {
      let letterOrDigit = pair[index];
      let maybeNumber = parseInt(letterOrDigit);
      
      // Handle the character being a letter
      if (Number.isNaN(maybeNumber)) {
        // Collect all characters which are letters
        word += letterOrDigit;
      }
      
      // Handle the character being a number
      else {
        // Remember the number we found in the pair
        number = maybeNumber;
      }
    }
    
    // Derive index in result array from the position number
    let index = number - 1;
    result[index] = word;
  }
  
  // Join the array into a string separated by spaces
  return result.join(' ');
}
```

## Extract number simplified

```js
function order(words) {
  // Keep track of resulting ordered strings
  let result = [];
  
  // Split words string into pairs of word + number, eg: T4est
  let pairs = words.split(' ');
  
  // Extract number and letters from each pair
  for (let pair of pairs) {
    // Check each character of the pair to determine letter/digit
    for (let index = 0; index < pair.length; index++) {
      let letterOrDigit = pair[index];
      let maybeNumber = parseInt(letterOrDigit);
      
      // Handle the character being a digit
      if (!Number.isNaN(maybeNumber)) {
        // Place the pair into the result array at index derived from number
        let index = maybeNumber - 1;
        result[index] = pair;
        break;
      }
    }
  }
  
  // Join the array into a string separated by spaces
  return result.join(' ');
}
```

## Regex practice

```js
// https://regex101.com/
function validatePIN (pin) {
  return /^\d{4}(\d{2})?$/.test(pin);
}
```

## Triangle check

```js
function isTriangle(a,b,c) {
 return a + b > c && a + c > b && b + c > a;
}
```

## Space removal using regex

```js
function noSpace(x){
  return x.replace(/ /g, '');
}
```
