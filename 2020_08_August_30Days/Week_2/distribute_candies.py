class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> List[int]:
        candyPerPerson = [0] * num_people
        
        distribute = 1
        currentPerson = 0
        
        while( candies > 0 ):
            if( distribute < candies ):
                candyPerPerson[currentPerson] += distribute
            else:
                candyPerPerson[currentPerson] += candies
                
            candies -= distribute
            distribute += 1
            currentPerson = (currentPerson + 1) % num_people
            
        return candyPerPerson