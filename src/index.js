class Sorter {
    constructor() {
        this.array = []
    }

    add(element) {
        this.array.push(element)
    }

    at(index) {
        return this.array[index]
    }

    get length() {
        return this.array.length
    }

    toArray() {
        return this.array
    }

    sort(indices) {

        let subArray = [];
        for (let i = 0; i < indices.length; i++) {
            subArray.push(this.array[indices[i]]);
        }
        let sortedSubArray;
        if (this.compareFunction === undefined) {
            sortedSubArray = subArray.sort((a, b) => a - b)
        } else {
            sortedSubArray = subArray.sort(this.compareFunction);
        }

        let sortedIndexes = indices.sort((a, b) => a - b);

        for (let i = 0; i < sortedIndexes.length; i++) {

            this.array[sortedIndexes[i]] = sortedSubArray.shift();
        }

    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction
    }
}


module.exports = Sorter;



