function solution(N, A) {
	let counters = new Array(N).fill(0)
	let max = 0
	A.forEach(element => {
		element--
		if(element === N) {
			counters = new Array(N).fill(max)
		} else {
			counters[element] += 1
			if(counters[element] > max) max = counters[element]
		}
	});
	return counters
}

console.log("solution: ", solution(5, [3,4,4,6,1,4,4]))