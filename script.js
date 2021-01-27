// 1- a function to delete an item by index:
// deleteByIndex(arr, 1)
// arr = [a, b, c] --> arr = [a, c]
function deleteByIndex(array, item){
    array.splice(item, 1)
    return array;
}

// 2- a function to combine two or more arrays and sort the final array:
// [1, 2, 3], [4, 5, 6], [9, 8, 7, 0] --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function combine(...args) {
    var a = 0
    var array = args[a]
    while (a < args.length - 1) {
        a++;
        array = array.concat(args[a]);
    }
    return array;
}


// 3- flat an array of arrays:
// [[2, 3], 5, [[[2, 9], 4], 4], 1, 0] --> [2, 3, 5, 2, 9, 4, 4, 1, 0]
function flatArray(array) {
    return [].concat(...array);
}


// 4- find item in an array:
// findByItem([2, 3, 4], 3) --> {index: 1, item: 3}
function findByItem(array, item) {
    a = {};
    a.index = array.indexOf(item);
    a.item = item;
    return a;
}


// 5- replace an item in array:
// replaceByItem(array, currentItem, newItem)
// arr = [a, b, c, d, e, f]
// replaceByItem(arr, e, t) --> arr = [a, b, c, d, t, f]
function replaceByItem(array, currentItem, newItem) {
    array.splice(array.indexOf(currentItem), 1, newItem);
    return array;
}


// 6- a function to extract numbers from a string:
// “I have 2 apples and 3 pineapples” --> [2, 3]
function extractNumbers(txt){
    var numb = txt.match(/\d/g);
    return (numb);
}


// 7- remove duplicate items of an array:
// [1, 1, 4, 5, 3, 5, 3, 9] --> [1, 4, 5, 3, 9]
function removeDuplicateItems(array) {
    uniq = [...new Set(array)];
    return uniq;
}


var input1 = deleteByIndex(["a", "b", "c"], 1);
var input2 = combine([1, 2, 3], [4, 5, 6], [9, 8, 7, 0]);
var input3 = flatArray([[2, 3], 5, [[[2, 9], 4], 4], 1, 0]);
var input4 = findByItem([2, 3, 4], 3);
var input5 = replaceByItem(["a", "b", "c", "d", "e", "f"], "e", "t");
var input6 = extractNumbers("I have 2 apples and 3 pineapples");
var input7 = removeDuplicateItems([1, 1, 4, 5, 3, 5, 3, 9]);


