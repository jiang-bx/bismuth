export function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    const helper = (s: string, i: number, j: number) => {
        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    };

    while (left < right) {
        if (s[left] !== s[right]) {
            return helper(s, left + 1, right) || helper(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
}
