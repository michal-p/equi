
function solution(A) {
	return halfSort(A).reduce((prev, curr, i, array) => {
		if(curr !== array[i+1]) prev++
		return prev
	}, 0)
}

console.log("solution: ", solution([2,1,1,2,3,1,-1, 5, 6,7]))

function halfSort(A) {
	let n = A.length
	if(n < 2) return A
	let half = Math.floor(n / 2)
	let leftHalf = A.slice(0, half)
	let rightHalf = A.slice(half, n)
	return merger(halfSort(leftHalf), halfSort(rightHalf)) 
}

function merger(leftA, rightA) {
	let sortedA = []
	while (leftA.length && rightA.length) {
		if(leftA[0] < rightA[0]) {
			sortedA.push(leftA.shift())
		} else {
			sortedA.push(rightA.shift())
		}

	}
	return [...sortedA, ...leftA, ...rightA]
}

console.log(halfSort([10,5,3,8,2,6,4,7,9,1,1]));