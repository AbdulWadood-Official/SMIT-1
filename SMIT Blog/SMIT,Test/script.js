
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
document.getElementById('removeDuplicatesBtn').addEventListener('click', function() {
let input = document.getElementById('inputArray').value;
let items = input.split(',').map(item => item.trim());
let uniqueItems = removeDuplicates(items);
document.getElementById('result').textContent = uniqueItems.join(', ');
});


// Allah rasta nikal 