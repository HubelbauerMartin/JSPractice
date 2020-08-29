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
