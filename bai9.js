let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];

m = m.filter((elements) => typeof elements == "number");

let mSquared = m.map((elements) => elements ** 2);

console.log(mSquared);
