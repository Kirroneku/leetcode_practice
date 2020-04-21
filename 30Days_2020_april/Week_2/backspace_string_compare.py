class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        def findAfterPound(S: str):
            sBuild = []
            for char in S:
                if char == '#':
                    if len(sBuild) > 0:
                        sBuild.pop()
                else:
                    sBuild.append(char)

            return ''.join(sBuild)

        return findAfterPound(S) == findAfterPound(T)