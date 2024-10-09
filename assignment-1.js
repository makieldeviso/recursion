const fibs = function(n) {
    const fibArr = [0, 1]

    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }

    for(let i = fibArr.length; i < n; i++) {
        const newNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(newNum);
    }

    return fibArr
}

// const fibsRec1 = function (n) {

//     let baseArr = [0, 1, n];
    
//     if (!Array.isArray(n)) {
//         if (n === 0) {
//             return [];
//         } else if (n === 1) {
//             return [0];
//         } else {
//             return fibsRec1(baseArr);
//         }
        
//     } else {
        
//         const length = n[n.length - 1];

//         if (n.length < length + 1) {
//             const newNum = n[n.length - 2] + n[n.length - 3];
//             n.splice(-1, 0, newNum);
//             return fibsRec1(n);
            
//         } else if (n.length === length + 1) {
//             const final = n.slice(0, -1);
//             return final
//         }
//     }
// }

// // Alternate solution
// const fibsRec2 = function (length, arr) {

//     if (length === 1) {
//         return arr[0];
        
//     } else if (length === 0) {
//         return arr = [];
//     }

//     if (arr === undefined) {
//        arr = [0, 1];
//     }

//     if (arr.length < length) {
//         const newNum = arr[arr.length - 2] + arr[arr.length - 1];
//         arr.push(newNum);
//         return fibsRec2(length, arr)
//     }

//     if (arr.length === length) {
//         return arr
//     }
    
// }

const fibsRec3 = function (arrLength) {

    const createFibArr = function (fibArr = [0, 1]) {
        
        if (fibArr.length === arrLength) {
            return fibArr
        }

        const secondLastNum = fibArr[fibArr.length - 2];
        const lastNum = fibArr[fibArr.length - 1];
        const newNum = secondLastNum + lastNum

        return createFibArr([...fibArr, newNum])
    }

    return createFibArr()
}

const result1 = fibs(8)
// const result2_1 = fibsRec1(8);
// const result2_2 = fibsRec2(8);
const result2 = fibsRec3(8); // Updated solution -- Im enlightened now xd

const answer1 = document.querySelector('p#ass1-1 span.value');
const answer2 = document.querySelector('p#ass1-2 span.value');

answer1.textContent = `[${result1}]`;
answer2.textContent = `[${result2}]`;