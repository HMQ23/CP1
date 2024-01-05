class People {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getAddress() {
    return this.address;
  }

  set setName(name) {
    this.name = name;
  }
  set setAge(age) {
    this.age = age;
  }
  setAddress(address) {
    this.address = address;
  }
}

class Students extends People {
  constructor(name, age, address, id, math, physical, chemistry) {
    super(name, age, address);
    this.id = id;
    this.math = math;
    this.physical = physical;
    this.chemistry = chemistry;
  }
}
