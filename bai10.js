let a = " High knowledge, high return";
let b = a.toLowerCase().split(" ");
let c = [];

for (i of b) {
  if (i != "") {
    c.push(i);
  }
}

console.log(c);
