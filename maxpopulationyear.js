// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

// The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

// Return the earliest year with the maximum population.

 

// Example 1:

// Input: logs = [[1993,1999],[2000,2010]]
// Output: 1993
// Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
// Example 2:

// Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
// Output: 1960
// Explanation: 
// The maximum population is 2, and it had happened in years 1960 and 1970.
// The earlier year between them is 1960.


function findMinMaxYears(logs) {
    let minYear = Infinity; // Initialize to a large value
    let maxYear = -Infinity; // Initialize to a small value
  
    for (const [birth, death] of logs) {
      minYear = Math.min(minYear, birth);
      maxYear = Math.max(maxYear, death);
    }
  
    return { minYear, maxYear };
  }
  
  var maximumPopulation = function(logs) {
      const {minYear, maxYear} = findMinMaxYears(logs);
      
      let tracker = {};
      for (let i = minYear; i < maxYear ; i++ ) {
        let currentYear = i;
        for (let j in logs) {
          let currentPerson = logs[j];
          if (currentPerson[0] <= currentYear && currentPerson[1] > currentYear) {
              if (tracker[currentYear]) {
                tracker[currentYear] += 1;
              } else {
                tracker[currentYear] = 1;
              }
          }
        }
      }
      let maxPopulation = Math.max(...Object.values(tracker));
      let earliestYear = minYear;
      for (let [key, value] of Object.entries(tracker)) {
        if (value === maxPopulation) {
          earliestYear = parseInt(key);
          break;
        } 
      }
      return earliestYear
  };

//   listed as EASY but had a low acceptance rate, and discussion board said this was not easy...