function isOdd(num) {
	return num % 2
}

function solution(A = [9,3,9,3,9,9,8,8,6]) {
	let obj = A.reduce((prev, curr) => {
		prev[curr] = prev[curr] || 0
		prev[curr]++
		return prev
	}, {})
	let result = -1
	let ones = 0
	let odds = 0
	for (var prop in obj) {
    if (isOdd(obj[prop]) && obj[prop] !== 1) odds++
		if(obj[prop] === 1) {
			result = prop
			ones++
		}
	}
	if(ones > 1 || odds > 0) result = -1
	return Number(result)
}
console.log(solution())
