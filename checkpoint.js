//Solution 1 with an Array
function findSum(set1, set2) {
    let sum = 0;
    for (let i = 0; i < set1.length; i++) {


        if (!set2.includes(set1[i])) {

            sum += set[i];
        }
    }
    for (let i = 0; i < set2.length; i++) {
        if (!set1.includes(set2[i])) {
            sum += set2[i];
        }
    }
    return sum;
}