class Solution:

    def __init__(self, rects: List[List[int]]):
        self.pointEnd = []
        self.pointCount = 0
        self.rects = rects
        random.seed()
        
        for rect in rects:
            self.pointCount += (rect[2] - rect[0] + 1) * ( rect[3] - rect[1] +1)
            self.pointEnd.append(self.pointCount)

    def pick(self) -> List[int]:
        picker = random.randint(0, self.pointCount)
        index = 0
        while( self.pointEnd[index] < picker ):
            index += 1
        selectedRect = self.rects[index]
        return [random.randint(selectedRect[0], selectedRect[2]), random.randint(selectedRect[1], selectedRect[3])]


# Your Solution object will be instantiated and called as such:
# obj = Solution(rects)
# param_1 = obj.pick()