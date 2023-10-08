// if-else statement
let num = 10;
if (num > 0) {
  console.log("Angka positif");
} else if (num < 0) {
  console.log("Angka negatif");
} else {
  console.log("Angka nol");
}

// switch-case statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Hari Senin");
    break;
  case "Tuesday":
    console.log("Hari Selasa");
    break;
  default:
    console.log("Hari lain");
}

// for loop
for (let i = 0; i < 5; i++) {
  console.log("Iterasi for loop ke-" + i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log("Iterasi while loop ke-" + i);
  i++;
}

// do-while loop
let j = 0;
do {
  console.log("Iterasi do-while loop ke-" + j);
  j++;
} while (j < 5);

// function
function greet(name) {
  return "Halo, " + name + "!";
}

let greeting = greet("John");
console.log(greeting);
