// Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].




// var noneIsLower = function (j, temps) {
//     for (let i = j + 1; i< temps.length; i++) {
//         var temp1 = temps[j];
//         var temp2 = temps[i];
//         if (temp2 > temp1) {
//             return false
//         }
//     }
//     return true;

// }

// var dailyTemperatures = function(temperatures) {
//     var list = [];
//     for (let i = 0; i<temperatures.length;i++) {
//         var temp = temperatures[i];
//         for (let j = i; j<temperatures.length; j ++) {
//             var temp2 = temperatures[j];
//             if (temp < temp2) {
//                 list.push(j - i);
//                 break;
//             } else if (noneIsLower(j, temperatures)) {
//                 list.push(0);
//                 break;
//             }
            
//         }
        
//     }
    
//     return list;
// };

var dailyTemperatures = function(temperatures) {
    var l = temperatures.length;
    var a = 0;
    var b = 0;
    var count = 0;
    var result = [];
    for(a = 0;a < l;a++){
      count = 0;
      for(b = a + 1 ;b < l;b++){
        if(temperatures[a] < temperatures[b]){
          count += 1;
          result.push(count);
          count = 0;
          break;
        }
        if(b == l - 1){
          result.push(0);
          break;
        }
        count+=1;
      }
    }
  result.push(0);
  return result;
};

