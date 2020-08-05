const scientists = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// filter for scientists who born in the 1500's
const fifteen = scientists.filter(scientist => scientist.year >= 1500 && scientist.year < 1600 );
console.log(fifteen);


// map through scientist names and give a new fullName array
const fullNames = scientists.map(scientist => `${scientist.first } ${scientist.last}`);
console.log(fullNames);


// Sort the scientists by birthdate, oldest to youngest...
const ordered = scientists.sort((a,b) => a.year > b.year ? 1 : -1);
console.log(ordered);


// reduce
const totalYears = scientists.reduce((total, scientist) => {
  return total +  (scientist.passed - scientist.year)
}, 0);
console.log(totalYears);


// sort the scientists by years lived
const oldest = scientists.sort((a, b) => {
  const last = a.passed - a.year;
  const next = b.passed - b.year;
  return last > next ? -1 : 1;
});
console.log(oldest);

// sort people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const a = lastOne.split(', ');
  const b = nextOne.split(', ');
  return a > b ? 1 : -1;
})
console.log(alpha);


// sum up the instances of each of these
const cars = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = cars.reduce((car, item) => {
  if (!car[item]) {
    car[item] = 0;
  }
  car[item]++;
  return car;
}, {})
console.log(transportation)