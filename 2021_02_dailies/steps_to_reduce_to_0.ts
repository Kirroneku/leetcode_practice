function numberOfSteps (num: number): number {
    let steps = 0;
    while( num != 0 ) {
        steps ++;
        if( num%2 == 1 ) {
            num--;
        } else {
            num/=2;
        }
    }
    
    return steps;
};