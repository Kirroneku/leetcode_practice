/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.val;
    this.word = false;
    this.children = new Map();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if( this.children.has( word[0] ) ) {
        let curTrie = this.children.get(word[0]);
        if( word.length == 1 ) {
            curTrie.word = true;
        } else {
            curTrie.insert(word.substring(1));
        }
    } else {
        let newTrie = new Trie();
        newTrie.val = word[0];
        this.children.set(word[0], )
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if( this.children.has( word[0] ) ) {
        let curTrie = this.children.get(word[0]);
        if( word.length == 1 ) { 
            return curTrie.word;
        } else {
            return curTrie.search(word.substring(1));
        }
    } else {
        return false;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if( this.children.has( prefix[0] ) ) {
        let curTrie = this.children.get(prefix[0]);
        if( prefix.length == 1 ) { 
            return true;
        } else {
            return curTrie.startsWith(prefix.substring(1));
        }
    }
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */