function solution(S, P, Q) {
	let impacts = ['A', 'C', 'G', 'T']
	let smallImpactsArray = []
	P.forEach((element, i) => {
		let smallestImpact = 4
		let left = element
		let right = Q[i]
		
		for (let i = left; i <= right; i++) {
			let element = S[i];
			let index = impacts.indexOf(element) + 1
			if(index < smallestImpact) smallestImpact = index
    }
		smallImpactsArray.push(smallestImpact)
	});
	return smallImpactsArray
}

console.log("solution: ", solution('CAGCCTA'.split(''), [2,5,0], [4,5,6]))