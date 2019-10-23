function solution(A) {
	let zeroesCount = 0
	let pairs = 0
	A.forEach(element => {
		if(element === 0) {
			zeroesCount++
		}	else {
			pairs += zeroesCount
		}
	});
	return pairs > 1000000000 ? -1 : pairs
}

console.log("pairs: ", solution([0,1,0,1,1]))