const mergeSort = function (arr) {

    const merge = function (arr1, arr2) {
        let sortArr = [];

        while(arr1.length && arr2.length) {
            if (arr1[0] < arr2[0]) {
                sortArr.push(arr1.shift());
            } else {
                sortArr.push(arr2.shift());
            }
        }

        return [...sortArr, ...arr1, ...arr2];
    }
    
    const split = function (arr) {
        const mid = Math.floor(arr.length/ 2);
        const leftSide = arr.slice(0, mid);
        const rightSide = arr.slice(mid);

        if (arr.length <= 1) {
            return arr;
        } 

        return merge(split(leftSide), split(rightSide));
    }

    return split(arr);
}

const testArr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const testArr2 = [105, 79, 100, 110];

const mergeResult1 = (mergeSort(testArr1)); // Answer using testArr1
const mergeResult2 = (mergeSort(testArr2)); // Answer using testArr2

const answer1_1 = document.querySelector('p#ass2-1-1 span.value');
const answer1_2 = document.querySelector('p#ass2-1-2 span.value')

answer1_1.textContent = `[${mergeResult1}]`;
answer1_2.textContent = `[${mergeResult2}]`;


const array = []
array.push([].shift())