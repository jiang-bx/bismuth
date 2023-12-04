const originToTiny = {};
const tinyToOrigin = {};
const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const prefix = "https://leetcode.com/";
const k = 6;

/**
 * Encodes a URL to a shortened URL.
 */
export function encode(longUrl: string): string {
    while (!originToTiny[longUrl]) {
        let tinyStrList = [];
        for (let i = 0; i < k; i++) {
            // 随机获取一个字符
            tinyStrList[i] = str.charAt(Math.round(Math.random() * str.length));
        }
        let curTiny = prefix + tinyStrList.join("");
        if (tinyToOrigin[curTiny]) {
            continue;
        }
        tinyToOrigin[curTiny] = longUrl;
        originToTiny[longUrl] = curTiny;
    }

    return originToTiny[longUrl];
}

/**
 * Decodes a shortened URL to its original URL.
 */
export function decode(shortUrl: string): string {
    return tinyToOrigin[shortUrl];
}
