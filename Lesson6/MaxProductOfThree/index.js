/**
 * Returns the value of the maximal product of any triplet.
 * @param {Integers [−1,000..1,000]} A 
 */
function solution(A) {
	let maxField = new Array(3).fill(-1001)
	let minField = new Array(2).fill(1001)
	A.forEach(element => {
		if(element < minField[0]) {
      minField[1] = minField[0]
      minField[0] = element
    } else if(element < minField[1]) minField[1] = element
		if(element > maxField[0]) {
			maxField[2] = maxField[1]
			maxField[1] = maxField[0]
			maxField[0] = element
		} else if(element > maxField[1]) {
			maxField[2] = maxField[1]
			maxField[1] = element
		} else if(element > maxField[2]) maxField[2] = element
	});
	let sumMax = maxField[0] * maxField[1] * maxField[2]
	let sumMin = maxField[0] * minField[0] * minField[1]
	return sumMax > sumMin ? sumMax : sumMin
}

console.log("solution: ", solution([-5,5,-5,4]))