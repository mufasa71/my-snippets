function* cities() {
  yield "London (UK)";
  yield "Suez (Egypt)";
  yield "Bombay (India)";
  yield "Calcutta (India)";
  yield "Victoria (Hong-Kong)";
  yield "Singapore (Singapore)";
  yield "Yokohama (Japan)";
  yield "San Francisco (USA)";
  yield "New-York (USA)";
  yield "London (UK)";
  // If Phileas went to every city in the world this list would be very long.
}

let citiesIter = cities();

console.log(
  citiesIter
    .filter((x) => x.includes("India"))
    .reduce((acc, x) => acc + 1, 0)
);
