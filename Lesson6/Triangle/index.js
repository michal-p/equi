/**
 * Returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.
 * @param {Integer array} A 
 */
function solution(A) {
	let sortedA = A.sort((a, b) => {
		return a - b
	})
	let isTriangle = false
	for(let i = 0; i < sortedA.length - 2; i++) {
		isTriangle = ((sortedA[i] + sortedA[i + 1])      > sortedA[i + 2]) &&
								 ((sortedA[i + 1] + sortedA[i + 2])  > sortedA[i]) &&
								 ((sortedA[i + 2] + sortedA[i])    > sortedA[i + 1])
		if(isTriangle) break
	}

	return isTriangle ? 1 : 0
}

console.log("solution: ", solution([10,2,5,1,8,20]))