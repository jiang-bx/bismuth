export function findDuplicate(paths: string[]): string[][] {
    const map = new Map<string, string[]>();
    const ans: string[][] = [];

    for (const path of paths) {
        const files = path.split(" ");
        const dir = files[0];

        for (let i = 1; i < files.length; i++) {
            const str = /^(.+)\((.+)\)$/.exec(files[i]);
            if (!str) {
                continue;
            }

            const filename = str[1];
            const content = str[2];
            const p = dir + "/" + filename;

            if (map.has(content)) {
                map.get(content).push(p);
            } else {
                map.set(content, [p]);
            }
        }
    }

    for (const value of map.values()) {
        if (value.length >= 2) {
            ans.push(value);
        }
    }

    return ans;
}
