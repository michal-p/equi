function solution(X, Y, D) {
	let steps = Math.ceil((Y - X) / D)
	return steps
}

console.log(solution(1, 1, 1))