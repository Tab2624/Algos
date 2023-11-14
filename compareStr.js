function compare(str) {
  // Create an empty array variable
  const emptyArr = [];

  //create a for of loop to iterate over each character in the string
  for (const char of str) {
    //Create an if statement saying if the character in the string is equal to # and the emptyarr length is more the zero, pop the character
    if (char === "#" && emptyArr.length > 0) {
      emptyArr.pop();

      // Create an else if statement saying that if the character in the string is not equal to # push that character into the empty array variable
    } else if (char !== "#") {
      emptyArr.push(char);
    }
  }

  // return the empty array variable and use the .join method to return combine the character and return the array as a string
  return emptyArr.join("");
}

// Compare the first string to the second string
return compare(S) === compare(T);

function gigaBrainBackspaceStringCompare(S, T) {
  let temp = [];
  let temp2 = [];
  let something = S.split("");
  let something2 = T.split("");
  for (letter of something) {
    if (letter == "#") {
      temp.pop();
    } else {
      temp.push(letter);
    }
  }
  for (letter of something2) {
    if (letter == "#") {
      temp2.pop();
    } else {
      temp2.push(letter);
    }
  }
  return temp.toString() === temp2.toString();
}

function backspaceStringCompare(S, T) {
  let temp = "";
  let temp2 = "";
  for (letter of S) {
    if (letter == "#") {
      temp = temp.slice(0, temp.length - 1);
    } else {
      temp = temp.concat(letter);
    }
  }
  for (letter of T) {
    if (letter == "#") {
      temp2 = temp2.slice(0, temp2.length - 1);
    } else {
      temp2 = temp2.concat(letter);
    }
  }
  return temp === temp2;
}
