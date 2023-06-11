function calculateConflictTimes(arr) {
    let conflictCount = 0;
    let totalConflictTime = 0;
    const convertedTimes = [];
  
    // Convert times to military format (HHMM)
    for (let i = 0; i < arr.length; i++) {
      const startTime = convertToMilitaryTime(arr[i].substring(0, 4));
      const endTime = convertToMilitaryTime(arr[i].substring(5));
  
      if (startTime && endTime) {
        convertedTimes.push([startTime, endTime]);
      }
    }
  
    // Sort the converted times in ascending order
    convertedTimes.sort((a, b) => a[0] - b[0]);
  
    // Calculate conflict count and total conflict time
    for (let i = 1; i < convertedTimes.length; i++) {
      const previousEndTime = convertedTimes[i - 1][1];
      const currentStartTime = convertedTimes[i][0];
  
      if (currentStartTime < previousEndTime) {
        conflictCount++;
        totalConflictTime += previousEndTime - currentStartTime;
      }
    }
  
    return {
      conflictCount,
      totalConflictTime
    };
  }
  
  function convertToMilitaryTime(time) {
    const hours = parseInt(time.substring(0, 2));
    const minutes = parseInt(time.substring(2));
  
    if (isNaN(hours) || isNaN(minutes)) {
      return null;
    }
  
    return hours * 60 + minutes;
  }
  
  // Example usage
  const times = ['0830-0915', '1000-1045', '1130-1215', '1300-1345'];
  const result = calculateConflictTimes(times);
  
  console.log('Number of conflicts:', result.conflictCount);
  console.log('Total conflict time (in minutes):', result.totalConflictTime);