let duplicatedList = [1, 1, 2, 4, 5, 4, 2, 6, 4]


// Set
// Time: 0(1) iterates array once and inserts into set
// Space: 0(n) worst case stores all values
function removeDuplicatesSet(duplicatedList: number[]): Set<number> {
    const nonDupedList = new Set(duplicatedList);
    return nonDupedList;
}

console.log(removeDuplicatesSet(duplicatedList))



// Hash map
// Each element is processed once, hash map lookup in 0(1) - total 0(n)
// Space: store up to n unique values - 0(n)
// Trading: More memory → much faster execution

function removeDuplciateHash(duplicatedList: number[]): number[] {
    let seen = new Map()
    for (let i = 0; i < duplicatedList.length; i++) {
        let current = duplicatedList[i]
        if (seen.has(current)) {
            duplicatedList.splice(i, 1)
            i--
        } else {
            seen.set(current, true)
        }
    }
    return duplicatedList
}

console.log(removeDuplciateHash(duplicatedList))



// Nested loop
// Big O: O(n²) time, O(n) space (because for each element you might scan all of result).
// Splice: O(n) as it shifts elements
function removeDuplciate(duplicatedList: number[]): number[] {
    for (let i = 0; i < duplicatedList.length; i++) {
        for (let j = i + 1; j < duplicatedList.length; j++) {
            if (duplicatedList[i] === duplicatedList[j]) {
                duplicatedList.splice(j, 1),
                j--
            }
        }
    }
    return duplicatedList
}

console.log(removeDuplciate(duplicatedList))
