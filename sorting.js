const list = [10, 9, 8, 7, 6, 5, 11, 23, 24, 4, 3, 2, 0];
const list2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];


module.exports.selectionSort = () => {
    console.log(' List Before Sort : ', list);
    for (let i = 0; i < list.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j <= list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = list[i];
            list[i] = list[minIndex];
            list[minIndex] = temp;
        }
    }
    console.log(' List After Sort : ', list);
}

module.exports.insertionSort = () => {
    var holePosition;
    var valueToInsert
    console.log(' List Before Sort : ', list);
    for (let i = 1; i < list.length; i++) {
        valueToInsert = list[i]
        holePosition = i
        console.log(`valueToInsert :${valueToInsert}  , holePosition : ${holePosition} `)
        while (holePosition > 0 && (list[holePosition - 1] > valueToInsert)) {
            list[holePosition] = list[holePosition - 1]
            holePosition = holePosition - 1
        }
        /* insert the number at hole position */
        list[holePosition] = valueToInsert
    }
    console.log(' List After Sort : ', list);

}

require('make-runnable/custom')({
    printOutputFrame: false
})