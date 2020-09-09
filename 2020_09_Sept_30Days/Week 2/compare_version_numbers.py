class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        split1 = version1.split('.')
        split2 = version2.split('.')
        
        while len(split1) < len(split2):
            split1.append(0)
        
        while len(split2) < len(split1):
            split2.append(0)
            
        for i in range(0, len(split1)):
            first = int(split1[i])
            second =  int(split2[i])
            if( first != second):
                if( first < second ):
                    return -1
                elif( second < first ):
                    return 1
            
        return 0