'use strict';

function includes(collection, ch) {
    return collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(ch => includes(objectB.value, ch));
}
