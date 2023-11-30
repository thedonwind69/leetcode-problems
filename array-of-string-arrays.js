// given an array of string arrays : [['hello', 'goodbye', 'hello', 'alpha'], ['alpha', 'bravo']]
// find all the words that only appear in a single array. 
// this should return ['hello', 'goodbye', 'bravo']


const arrayOfStringArrays = (arr) => {

    let hash = {};
    let result = [];
    for (let i = 0; i<arr.length; i++) {
        let currentArray = arr[i];
        for (let string of currentArray) {
            if (hash[string]) {
                hash[string]['count']++;
                hash[string]['indexes'].add(i);
            } else {
                hash[string] = {}
                hash[string]['count'] = 1;
                hash[string]['indexes'] = new Set()
                hash[string]['indexes'].add(i)
            }
        }
    }
    let keys = Object.keys(hash);
    for (let key of keys) {
        if (hash[key].indexes.size === 1) {
            result.push(key);
        }
    }

    return result;
}

// correct


let result = arrayOfStringArrays([['hello', 'goodbye', 'hello', 'alpha'], ['alpha', 'bravo']]) 
console.log(result) 
// should be ['hello', 'goodbye', 'bravo']