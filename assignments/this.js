/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The default setting when "this" is not currently tied to a specific object
* 2. When this is used in this context, it is tied to object that called it.
* 3. New Binding is used with constructor functions to create an object. The this keyword would then refer
*    to the instance of the object created
* 4. Explicit binding uses call and apply to explicitly bind this to an object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function birdCall(str){
    console.log(this); // This is not currently tied to the function so this will return the properties of the global object
    return str;
}

// Principle 2

// code example for Implicit Binding
const myBird = {
    name: "Bernard",
    renderType: function(type) {
        console.log(`My bird's name is ${name} and he is a ${this.type}`)
    }

}
myBird.renderType("Parrot");    //In this instance, Javascript binds the this references the object myBird

// Principle 3

// code example for New Binding

function PetAnimal(animal, type, name) {
    this.animal = animal;
    this.type = type;
    this.name = name;
    this.renderType = function() {
        console.log(`My pet ${this.animal} is named ${this.name} and it is a ${this.type}`);
    }
}
const brock = new PetAnimal("dog", "pitbull", "Brock");
const johnny = new PetAnimal("bird", "Parakeet", "Johnny");

brock.renderType();
johnny.renderType();

// Principle 4

// code example for Explicit Binding

brock.renderType.call(johnny); //the this now references johnny's information rather than brock's
johnny.renderType.apply(brock); // the this keyword now references brock's information rather than johnny's