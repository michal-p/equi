function solution(A) {
	let minDiff = undefined
	let leftSums = [] //Sum of elements on the left from the current value
  let sum = A.reduce((prev, curr) => {
    leftSums.push(prev);
    return prev + curr;
	}, 0);
	
	leftSums.forEach((leftSum, i) => {
		let rightSum = sum - leftSum
		let diff = Math.abs(rightSum - leftSum)
		minDiff = minDiff || diff
		if(diff < minDiff) minDiff = diff
	});
	//let rightSums = (leftSum => sum - leftSum)

	return minDiff
}
console.log("solution minimal difference: ", solution([3,1,2,4,3]))