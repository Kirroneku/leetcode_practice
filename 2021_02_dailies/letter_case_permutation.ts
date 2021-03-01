function letterCasePermutation(S: string): string[] {
    let builtPerms = [""];
    for( let i = 0; i < S.length; i++ ) {
        if( (S[i] >= 'a' && S[i] <= 'z') ||
            (S[i] >= 'A' && S[i] <= 'Z')) {
            let newPerms = [];
            for( let perm of builtPerms ) {
                newPerms.push(perm+S[i].toLowerCase());
                newPerms.push(perm+S[i].toUpperCase());
            }
            
            builtPerms = newPerms;
        } else {
            for( let j = 0; j < builtPerms.length; j++ ) {
                builtPerms[j] = builtPerms[j] + S[i];
            }
        }
    }
    
    return builtPerms;
};