function solve() {

    let sortedTypes = [];
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    for (const currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }

     sortedTypes = sortedTypes.sort((a, b) => {
        return b[1] - a[1]
    });    
}


solve('cat', 42, function () { console.log('Hello world!'); }, 22)

