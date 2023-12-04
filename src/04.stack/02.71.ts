export function simplifyPath(path: string): string {
    const stack: string[] = [];

    for (let i = 0; i < path.length; i++) {
        if (path[i] === "/") {
            let temp = "";
            for (let j = i + 1; j < path.length; j++) {
                if (path[j] === "/") {
                    break;
                }
                i++;
                temp += path[j];
            }

            if (temp === "." || temp === "") {
                continue;
            } else if (temp === "..") {
                stack.pop();
            } else {
                stack.push(temp);
            }
        }
    }

    let res = "/";
    for (let i = 0; i < stack.length; i++) {
        res += stack[i];
        if (stack.length - 1 !== i) {
            res += "/";
        }
    }

    return res;
}
