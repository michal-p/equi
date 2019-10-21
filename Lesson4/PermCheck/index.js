function counting(A, m) {
	let n = A.length
	let count = new Array(m).fill(0)
	A.forEach((element, i) => {
		count[element] += 1 
	});
	return count
}

function solution(A) {
	let n = A.length
	let presumtionSumA = n * (n+1) / 2
	let sumA = A.reduce((prev, curr) => prev + curr)
	if(presumtionSumA !== sumA) return 0
	let count = counting(A, n)
	count.forEach(element => {
		if(element !== 1) return 0
	})

	return 1
}

console.log("solution: ", solution([4,1,3]))