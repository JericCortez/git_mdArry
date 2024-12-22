let names = prompt(" Genevieve, Juan, Luna, Gabriel, Elise:")
  .split(","); // Convert to an array of strings

let ages = prompt("24, 65, 21, 5, 9:")
  .split(",")
  .map(Number);

let restructuredArray = names.map((name, index) => [name.trim(), ages[index]]);

console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach((subArray) => {
  console.log([${subArray[0]}, ${subArray[1]}]);
});