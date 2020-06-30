import collections

class TrieNode():
    def __init__(self):
        self.children = collections.defaultdict(TrieNode)
        self.isWord = False
    
class Trie():
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for w in word:
            node = node.children[w]
        node.isWord = True
    
class Solution(object):
    # Establish tries
    def findWords(self, board, words):
        res = []
        trie = Trie()
        node = trie.root
        
        for w in words:
            trie.insert(w)

        for i in range(len(board)):
            for j in range(len(board[0])):
                self.dfs(board, node, i, j, "", res)
        return res
    
    def dfs(self, board, node, i, j, path, res):
        if node.isWord:
            res.append(path)
            # We found the word so we dont wanna search for it again
            node.isWord = False

        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]):
            return 

        curChar = board[i][j]
        node = node.children.get(curChar)

        if not node:
            return 

        # don't reuse the current indicies
        board[i][j] = "-"

        self.dfs(board, node, i+1, j, path+curChar, res)
        self.dfs(board, node, i-1, j, path+curChar, res)
        self.dfs(board, node, i, j-1, path+curChar, res)
        self.dfs(board, node, i, j+1, path+curChar, res)

        # put the char back after we are done
        board[i][j] = curChar