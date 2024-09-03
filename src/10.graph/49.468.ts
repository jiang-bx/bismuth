export function validIPAddress(queryIP: string): string {
    const v4 = queryIP.split(".");
    const v6 = queryIP.split(":");

    if (v4.length === 4) {
        for (let i = 0; i < v4.length; i++) {
            const sp = v4[i];
            if (
                !/^\d{1,3}$/.test(sp) ||
                Number(sp) > 255 ||
                (sp.length > 1 && sp[0] === "0")
            ) {
                return "Neither";
            }
        }
        return "IPv4";
    } else if (v6.length === 8) {
        for (let i = 0; i < v6.length; i++) {
            const sp = v6[i];
            if (!/^[a-f|A-F|0-9]{1,4}$/.test(sp)) {
                return "Neither";
            }
        }
        return "IPv6";
    }

    return "Neither";
}
