const fibsRec = function (n) {

    let baseArr = [0, 1, n];
    
    if (!Array.isArray(n)) {
        if (n === 0) {
            return [];
        } else if (n === 1) {
            return [0];
        } else {
            return fibsRec(baseArr);
        }
        
    } else {
        
        const length = n[n.length - 1];

        if (n.length < length + 1) {
            const newNum = n[n.length - 2] + n[n.length - 3];
            n.splice(-1, 0, newNum);
            return fibsRec(n);
            
        } else if (n.length === length + 1) {
            const final = n.slice(0, -1);
            return final
        }
    }
}


const fibsRec2 = function (length, arr) {

    if (length === 1) {
        return arr[0];
        
    } else if (length === 0) {
        return arr = [];
    }

    if (arr === undefined) {
       arr = [0, 1];
    }

    if (arr.length < length) {
        const newNum = arr[arr.length - 2] + arr[arr.length - 1];
        arr.push(newNum);
        return fibsRec(length, arr)
    }

    if (arr.length === length) {
        return arr
    }
    
}

const result1 = fibsRec(10);
const result2 = fibsRec2(10);
const answer1 = document.querySelector('p#ass1-1');
const answer2 = document.querySelector('p#ass1-2');

answer1.textContent = `[${result1}]`;
answer2.textContent = `[${result2}]`;