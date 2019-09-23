/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function pickRandomIn(array) {
    return array[Math.floor(Math.random() * array.length)]
}

export function removeInArray(array, item) {
    array.splice(array.indexOf(item), 1)
}

export function deduplicate(array) {
    return array.filter((e, i, a) => a.indexOf(e) === i)
}