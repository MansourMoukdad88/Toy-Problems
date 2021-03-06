/*
Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
// Sol 1.
function bouncer(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    let a = Boolean(arr[i])? newArr.push(arr[i]): false;
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

// Sol 2.
function bouncer(arr) {
  return arr.filter(Boolean);
}

// Sol 3.
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
