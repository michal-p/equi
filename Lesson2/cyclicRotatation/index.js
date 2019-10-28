function solution(A, K) {
	let B = []
	A.forEach((m, i, arr) => {
		B[(i + K) % A.length] = m
	})
	return B
}