class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        if hour == 12:
            hour = 0
            
        hourAngle = ((hour + minutes/60) /12) * 360
        minAngle = (minutes/60) * 360
        
        angle = abs(hourAngle - minAngle)
        if( angle  > 180 ):
            return 360 - angle
        
        return angle