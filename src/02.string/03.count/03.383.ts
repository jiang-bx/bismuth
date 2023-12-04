export function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineArr = new Array(26).fill(0);

    for (let i = 0; i < magazine.length; i++) {
        magazineArr[magazine[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineArr[ransomNote[i].charCodeAt(0) - "a".charCodeAt(0)] <= 0) {
            return false;
        } else {
            magazineArr[ransomNote[i].charCodeAt(0) - "a".charCodeAt(0)]--;
        }
    }

    return true;
}
