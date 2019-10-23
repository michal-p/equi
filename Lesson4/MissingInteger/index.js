//Missing Integer
function counting(A) {
	let count = []
	A.forEach(element => {
		// Because of array count from 0 but values starts from 1 so one I save to [0] index and so on
		if(element-- > 0) {
			count[element] = count[element]++ || 1
		}
	});
	return count
}

function solution(A) {
	let np = Math.min(...A)
	let mp = Math.max(...A)
	// The smallest positive value is 1 so if the smallest member from array is bigger then the smallest missing is 1
	if(np > 1) return 1
	let count = counting(A)
	let index = count.findIndex(element => element === undefined)
	mp =  mp > 0 ? mp : 0
	return index === -1 ? 
				 // Here I return Max + 1 ement becasue there is no missing element in array
				 mp + 1 : 
				 // Here I have to add 1 because in counting() I saved values in indexes -1 -> (element--)
				 index + 1
}
console.log("find the smallest missing positive integer: ", solution([1,2,3]))