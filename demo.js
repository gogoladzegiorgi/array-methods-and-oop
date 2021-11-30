const array=[1,2,3,4,5,-1,7,8,-4,5]

for ( const movement of array) {
    if (movement > 0){
        console.log(`your deposited ${movement}`)
    }else{
        console.log(`your withdrew ${Math.abs(movement)}`)
    }
}


//forEach method
console.log("---FOREACH----")

array.forEach((value,i)=>{
    if (value > 0){
        console.log(`your ${i+1}: deposite ${value}`)
    }else {
        console.log(` your ${i+1}: withdrew ${value}`)
    }
})

// sets
const sets  = new Set(array)

console.log(sets)

// map method


const movementsUsd=array.map((mov)=>{
    return mov;
})
console.log(movementsUsd);
console.log(array);
//toLowerCase

const user = 'Giorgi Gogoladze Chiatura';
const userName = user.toLowerCase().split(' ');
console.log(userName)

//filter method
const deposits =array.filter((mov)=> {
    return mov > 0;
})
console.log(deposits)

const depositFor = []
for (const mov of array) if(mov > 0) depositFor.push(mov)
console.log(depositFor)

const withdrawals = []
for (const mov of array) if(mov<0) withdrawals.push(mov);
console.log(withdrawals)

// some
const some = array.some(mov => mov > 0)
console.log(some)

// flat method
const nested_array = [[1,2,3,4],2,34, [1,4,3,2]];
nested_array.flat();
console.log(nested_array)
// flatMap method
const nested_arrays = [[1,2,3,4,5],[1,2,3,[1,2,3,4,]], 7,6,4,3];
nested_arrays.flat();
console.log(nested_arrays)

// sort method for string

const owners = ['giorgi', 'mariami', 'giorgis ', 'amirani', 'gogoladze', 'khazaradze' ]
console.log(owners.sort())

// sort method for  number
console.log(array);
array.sort((a, b)=>{
    if(a>b)return 1;
    if(a<b) return -1;
})
console.log(array)


//oop


const Person = function (firstName, birthYear) {
    this.firstName=firstName;
    this.birthYear=birthYear;

//never do this
// this.calcAge = function (){
//     console.log(2021-this.birthYear)
// }

}

const giorgi = new  Person('giorgi', 2002);
const mariam = new Person('mariami', 1999)
console.log(giorgi,mariam)

// Prototypes

Person.prototype.calcAge = function (){
    console.log(2021 - this.birthYear)
}

giorgi.calcAge();

console.log(array.__proto__)

Array.prototype.uniques = function (){
    return [...new Set(this)]
}
console.log(array.uniques())

// class declaration

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear=  birthYear;
    }

    calcAge(){
        console.log(2021-this.birthYear)
    }
}

const amiran = new PersonCl ('amirani', 1996)
console.log(amiran)
amiran.calcAge();


// setters and getters

const account = {
    owner: 'giorgi',
    movement: [200, 3000, 1000, 4000,1200, 450, 350],

    get latest() {
        return this.movement.slice(-1).pop()
    }
}
console.log(account.latest)





