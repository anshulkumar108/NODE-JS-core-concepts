const name="Anshul";
let age=27;
const hasHobbies=true;

function userDetails(userName,uaerAge,userHobbies){

    return ("nmae is "+userName+" age "+age + " hashobbies" +userHobbies);
}

console.log(userDetails( name,age,hasHobbies));

const multiply=(a,b)=>{
    return a*b;
}

console.log(multiply(3,4));

//map method return new array of array.

const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

for(let items of array){
    console.log(items);
}

console.log(array.map(items=>{
    
        if(items===" "){
            return "empty";
        }else{
           return items;
    }
}))

//.declaring array with const does not define a constant array. It defines a constant reference to an array.
//Because of this, we can still change the elements of a constant array.

const spreadOperator=[...array]
console.log(spreadOperator)

const obj1 = {'key1': 1 , 'key2' : 2}
const obj2 = { ...obj1, key1: 1000}
console.log(obj1)
console.log(obj2)

//rest operator:The rest operator in javaScript allows a function to take an indefinite number of arguments and bundle them in an array,
// thus allowing us to write functions that can accept a variable number of arguments, irrespective of the number of parameters defined.