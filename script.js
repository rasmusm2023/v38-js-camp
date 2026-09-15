const eventName = "Aurora Live";
let ticketCount = 0;
const isVip = false;

console.log(eventName);
console.log(eventName);

ticketCount = 10;
console.log(ticketCount);
console.log(isVip);

// eventName = "Nord Glow"; // TypeError - bortkommentera

function totalMinutes(hours, minutes) {
  return hours * 60 + minutes;
}
console.log(totalMinutes(2, 15));

const isMember = "true";
let shipping = 79;

if (isMember === true) {
  shipping = 0;
} else {
  console.log("Ordinarie frakt");
}

console.log("Shipping");

const cities = ["Malmö", "Göteborg", "Stockholm"];
console.log(cities[0]);
console.log(cities.length);

const product = {
  title: "Hörlurar",
  stock: 4,
  inStock: true,
};

console.log(product.title);
console.log(product.inStock);

for (const city in cities) {
  console.log(city);
}

console.log("--------------------------------------------");

const tempC = 12;
if (tempC >= 20) {
  console.log("Varmt");
} else if (tempC >= 10) {
  console.log("Ljummet");
} else {
  console.log("Kallt");
}

console.log("--------------------------------------------");

const routes = ["Linje 2", "Linje 5", "Linje 8"];

for (const route in routes) {
  console.log("Avgår: " + route);
}

function triple(n) {
  return n * 3;
}
console.log(triple(8));

// Nedan är arrow-funktion som gör samma sak.
const triple2 = (n) => n * 3; // samma jobb, annat sätt att formulera
console.log(triple2(8));

console.log("--------------------------------------------");

const miniList = ["Dammsuga", "Laga mat", "Diska", "Städa"];

for (item of miniList) {
  console.log(item);
}

const todoObject = { title: "Dammsuga", urgency: 1, isOpen: true };
if (todoObject.urgency === 1) {
  console.log("Väldigt akut!");
} else if (todoObject === 2) {
  console.log("Behöver göras snart");
} else {
  console.log("Kan göras senare.");
}

console.log(todoObject.urgency);
console.log(todoObject.title);

const numbersMultiplication = (a, b) => a * b;
console.log(numbersMultiplication(10, 15));
