//jshint esversion: 6

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

//get random index of key
    _hash(key) {
        let total = 0;
        let PRIME_NUMBER = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME_NUMBER + value) % this.keyMap.length;
        }
        return total;
    }

//add new key value pair to hash table
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }


//get the value of specific element
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

//get array of all values
    values() {
        let valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                       valuesArray.push(this.keyMap[i][j][1]);
                   }
                }
            }
        }
        return valuesArray;
    }

//get array of all keys
        keys() {
        let keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArray.includes(this.keyMap[i][j][0])) {
                       keysArray.push(this.keyMap[i][j][0]);
                   }
                }
            }
        }
        return keysArray;
    }
}

let hashTable = new HashTable(17);
hashTable.set('maroon', '#800000');
hashTable.set('yellow', '#FFFF00');
hashTable.set('olive', '#808000');
hashTable.set('salmon', '#FA8072');