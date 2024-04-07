// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

 

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
// Example 3:

// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".


// /**
//  * @param {string[]} list1
//  * @param {string[]} list2
//  * @return {string[]}
//  */
var findRestaurant = function(list1, list2) {
    let count = {}
    for (let i = 0 ; i<list1.length; i++) {
        if (count[list1[i]]) {
            count[list1[i]]['indexes'].push(i)
        } else {
            count[list1[i]] = {}
            count[list1[i]]['indexes'] = [i]
        }
    
    }
    for (let i = 0 ; i<list2.length; i++) { 
        if (count[list2[i]]) {
            count[list2[i]]['indexes'].push(i)
        } else {
            count[list2[i]] = {}
            count[list2[i]]['indexes'] = [i]
        }
    }

    let minIndex = 1000 * 2
    let result = [];
    for (let key of Object.keys(count)) {
        if (count[key]['indexes'].length > 1) {
            let sumOfIndexes = count[key]['indexes'].reduce((accum, index) => {
                return accum + index
            }, 0)
            if (sumOfIndexes < minIndex) {
                minIndex = sumOfIndexes
            }
        }
    }
    console.log(minIndex)
    console.log(count)
    for (let key of Object.keys(count)) {
        if (count[key]['indexes'].length > 1) {
            let sumOfIndexes = count[key]['indexes'].reduce((accum, index) => {
                return accum + index
            }, 0)
            if (sumOfIndexes === minIndex) {
                result.push(key)
            }
        }
    }
    return result

};