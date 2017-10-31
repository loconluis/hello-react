
class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi. I'm ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }

}

class Student extends Person{
  constructor(name, age, major) {
    super(name, age)
    this.major = major;
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `Their major is ${this.major}.`
    }

    return description;
  }
}

class Traveler extends Person{
  constructor(name, location) {
    super(name);
    this.location = location;
  }

  hasLocation() {
    return !!this.location;
  }

  getGretting() {
    let gretting = super.getGretting()

    if(this.hasLocation()) {
      gretting += ` Im visiting from ${this.location}`;
    }

    return gretting;
  }
}

const me = new Traveler('Luis Locon', 'Guatemala');

console.log(me.getGretting())
