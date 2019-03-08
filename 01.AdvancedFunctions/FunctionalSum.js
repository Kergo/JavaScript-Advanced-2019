let add = (function() {

    let sum = 0;

    function add(number) {
        sum += number;
        //console.log(sum);
        return add;
    }
    //Required for judge
    add.toString = function () {
        return sum;
    }

    return add;
})()

add(1)(2)(3)