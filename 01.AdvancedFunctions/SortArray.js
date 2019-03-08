function sortArray(inputArray, sortMethod) {

    let ascendingComparator = function (a, b) {
        return a - b;
    };
    
    let descendingComparator = function (a, b) {
        return b - a;
    };
    
    let sortingStrategies = {
        asc: ascendingComparator,
        desc: descendingComparator
    };

    return inputArray.sort(sortingStrategies[sortMethod]);
};


console.log(sortArray([1,3,6,8,-2], 'desc'))