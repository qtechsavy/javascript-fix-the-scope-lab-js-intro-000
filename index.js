function myAnimal() {
  var animal = 'dog';
  return animal;
}
describe('yourAnimal()', function()){
  it('returns your animal', function()){
    expect (window.yourAnimal()).toEqual('cat')
  }
}

function yourAnimal() {
  var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}

function add2(n) {
  var two = 2;
  return (n + 2);

  // Feel free to move things around!
  const two = 2
}

var theFunk = funkyFunction();
  function funkyFunction(FUNKY!){
  return funkyFunction;
  }
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
