export function convertDateToBinary(date: string): string {
    const list = date.split("-");
    list.forEach((item, index) => {
        list[index] = parseInt(item).toString(2);
    });

    return list.join("-");
}
