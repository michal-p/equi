function solution(X, A) {
	let sum  = 0
	let obj = {}
	let position = -1
	for (let i = 0; i < A.length; i++) {
		const element = A[i];
		if(element <= X) {
			if(!obj[element]) {
				obj[element] = 1
				sum++
			}
		}
		if(sum === X) {
			position = i
			break
		}
	}
	return position
}

console.log("solution: ", solution(2, [1,4,2,1,3,1,3]))