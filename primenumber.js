module.exports.primenumber = (num) => {
    var n = num;
    var k = 2;                  // ลองหารด้วย k = 2, 3, ..., n-1
    while (true) {
        if (k >= n) break;        // หลุดจากวงวนเมื่อลองหารครบทุกตัวแล้ว 
        if ((n % k) == 0) break;  // หลุดจากวงวนเมื่อพบ k ที่หาร n ลงตัว 
        k++;
    }
    console.log(k == n);
}

module.exports.primenumber2 = (num) => {
    var prime = true;
    var number = num;
    var limit = Math.ceil(Math.sqrt(number));
    if (number === 1) {
        prime = false;
        return;
    }
    for (let i = 2; i <= limit; i++) {
        if (number % i == 0) {
            prime = false;
            break;
        }
    }
    console.log(number + " is prime = " + prime);
}
require('make-runnable/custom')({
    printOutputFrame: false
})