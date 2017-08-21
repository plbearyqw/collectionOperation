'use strict';

function includes(collection, ch) {
    return  collection.indexOf(ch) > -1;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.forEach(item => {
        let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count--;
        }
        result.push({key, count});
    });
    return result;
}
