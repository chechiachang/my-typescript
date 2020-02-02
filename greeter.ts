class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string ){
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}


let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);

let list: number[] = [1,2,3];

const arrSum = arr => arr.reduce(
  (a,b) => a+b, 
  0,
);

let sum: number = arrSum(list);

enum Color {Red, Green, Blue};

function error(message: string): never {
  throw new Error(message);
}
function fail(): never{
  return error("Failed");
}

// declare ambience. An implementation cannot be declared in ambient contexts.
declare function create(o: object | null):void
create({v:1});
