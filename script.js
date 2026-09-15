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
