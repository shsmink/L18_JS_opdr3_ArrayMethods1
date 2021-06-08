// Opdracht A

const addTheWordCool = function(array){
    array.push("cool");
    return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// Opdracht B

const amountOfElementsInArray = function(array) {
    return array.length;
};

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"])); 

// Opdracht C

const selectBelgiumFromBenelux = function(array) {
    return array[0];
};

console.log(selectBelgiumFromBenelux(["België", "Nederland", "Luxemburg"])); 

// Opdracht D

const lastElementInArray = function (array) {
    return array.pop();
  };

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 

// Opdracht E 

const presidents = ["Trump", "Obama", "Bush", "Clinton"]; 
  
const impeachTrumpSlice = function(array) {
    const newArray = array.slice(1, 4);
    console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
    return newArray;
};

const impeachTrumpSplice = function(array) {
    const removedElement = array.splice(0, 1);
    console.log(
    "Verwijderd element:",
    removedElement,
    "De gewijzigde array, Trump is missing:",
    array
    );
  return array;
};
  
console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents)); 

// Opdracht F

const stringsTogether = function(array) {
    return array.join(" ");
};

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 

// Opdracht G
const combineArrays = function(array1, array2) {
    return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));