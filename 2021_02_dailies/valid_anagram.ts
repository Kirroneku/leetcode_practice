function isAnagram(s: string, t: string): boolean {
    let uniqueMap = new Map();
    for( let char of s ) {
        if( !uniqueMap.has(char) ) {
            uniqueMap.set(char, 1);
        } else {
            uniqueMap.set(char, uniqueMap.get(char)+1);
        }
    }
        
    for( let char of t ) {
        if( uniqueMap.has(char) ) {
            let left = uniqueMap.get(char)-1;
            if( left == 0 ) {
                uniqueMap.delete(char);
            } else {
                uniqueMap.set(char, left);
            }
            
        } else {
            return false;
        }
    }
    
    return uniqueMap.size == 0;
};