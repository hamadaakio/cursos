class Person {

  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get namePerson() {
    return this.name;
  }

  set namePerson(name) {
    this.name = name;
  }

  get agePerson() {
    return this.name;
  }

  set agePerson(name) {
    this.name = name;
  }

  payment(value) {
    return value * 2;
  }

}

// person 1
let p1 = new Person('Jones', 23);
console.log(p1.name, p1.age);

//person 2
let p2 = new Person();
p2.name = 'Tiago';
p2.age = 19;

console.log(p2.name, p2.age)
console.log('Payment:', p2.payment(45));

class Student extends Person{
  constructor(name, age) {
    super(name, age)
  }

  payment(value) {
    return value / 2;
  }
}

// student 1
let s1 = new Student('Mariana', 28);
console.log(s1.name, s1.age);
console.log('Payment Student:', s1.payment(300));