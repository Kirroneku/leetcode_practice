encodedUrls = {};

var scramble = function(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let length = Math.max(longUrl.length/4, 10);
    let coded = scramble(length);
    while( encodedUrls[scramble(length)] ) {
        coded = scramble(length);
    }
    
    encodedUrls[coded] = longUrl;
    return 'http://tinyurl.com/' + coded;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let code = shortUrl.split('/');
    code = code[code.length-1];
    
    return encodedUrls[code];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */