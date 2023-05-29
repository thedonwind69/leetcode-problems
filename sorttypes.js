
function sortTypes( arr ) {
	var obj = {};
	
	for (let i in arr) {
		
		let current = arr[i];
		if (obj[typeof current] || typeof current === null) {
			obj[typeof current] = []
            obj[typeof current].push(current)
		} else {
			obj[typeof current].push(current)
		}
		

	}
	
	var final = []
	
	for (let j in Object.keys(obj)) {
		let current = Object.keys(obj)[j];
		final.push(obj[current])
	}
	
    return final

	
	
}

console.log(sortTypes([1, "hello"]));