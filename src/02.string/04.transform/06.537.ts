export function complexNumberMultiply(num1: string, num2: string): string {
    /**
	const nums1 = num1.split("+");
    const nums2 = num2.split("+");

    const a = Number(nums1[0]) * Number(nums2[0]);

    const b =
        Number(nums1[0]) * Number(nums2[1].replace("i", "")) +
        Number(nums1[1].replace("i", "")) * Number(nums2[0]);

    const c =
        Number(nums1[1].replace("i", "")) * Number(nums2[1].replace("i", ""));

    const d = a - c;

    const res = d + "+" + b + "i";

	return res;
	 */

    /**
     * num1: a + bi, num2: c + di, i^2 = -1
     * num1 * num2
     * = (a + bi) * (c + di)
     * = a*c + a*di + bi*c + bi*di
     * = a*c + a*di + bi*c - b*d
     * = a*c - b*d + (a*d + b*c)i
     */
    const nums1 = num1.split("+");
    const nums2 = num2.split("+");

    const a = Number(nums1[0]);
    const b = Number(nums1[1].replace("i", ""));
    const c = Number(nums2[0]);
    const d = Number(nums2[1].replace("i", ""));

    return `${a * c - b * d}+${a * d + b * c}i`;
}
