module.exports.checkPalindrome = (wording) => {
    if (!wording || wording.length <= 0) {
        console.log('Empty Text Please Input Character as least one');
        return;
    }
    let reverseWord = '';
    for (let i = String(wording).length - 1; i >= 0; i--) {
        reverseWord = reverseWord + String(wording).charAt(i);
    }
    if (wording == reverseWord) {
        console.log(' Is Palindrome : ', wording);
    } else {
        console.log(' Not Palindrome : ', wording);
    }

}
require('make-runnable/custom')({
    printOutputFrame: false
})
