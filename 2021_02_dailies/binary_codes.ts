function hasAllCodes(s: string, k: number): boolean {
    let subStringSet: Set<number> = new Set();
    for( let i = 0; i <= s.length-k; i++ ) {
        subStringSet.add(parseInt(s.substring(i, i+k), 2));
    }
    
    // console.log(subStringSet);
    
    // for( let i = 0; i < k**2; i++ ) {
    //     if( !subStringSet.has(i) ) {
    //         return false;
    //     }
    // }
    return subStringSet.size == 2**k;
};