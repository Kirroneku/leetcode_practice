/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    let ipv4 = IP.split(".");
    let ipv6 = IP.split(":");
    
    if( ipv4.length == 4  ) {
        let numRE = /^[0-9]*$/;
        
        
        for ( let i = 0; i < ipv4.length; i++ ) {
            let curNum = ipv4[i];
            if( curNum.length == 0 
               || !numRE.exec(curNum) 
               || parseInt(curNum) > 255 
               || (curNum[0] == '0' && curNum != 0) 
               || (curNum == 0 && curNum.length != 1 ))
             {
                return "Neither";
            } 
        }
        
        return "IPv4";
        
    } else if ( ipv6.length == 8 ) {
        for ( let i = 0; i < ipv6.length; i++ ) {
            let curHex = ipv6[i];
            console.log(parseInt(curHex, 16).toString(16), curHex)
            if( parseInt(curHex, 16).toString(16).padStart(4, '0') != curHex.toLowerCase().padStart(4, '0') || curHex.length > 4 ) {
                return "Neither";
            } 
        }
        
        return "IPv6";
    }
    
    return "Neither";
};