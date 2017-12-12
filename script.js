//Comparison with the Equality Operator

function testEqual(val) {
  if (val ==12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

Output:
Not Equal


//Comparison with the Strict Equality Operator

function testStrict(val) {
  if (val ===7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

Output:
Not Equal
