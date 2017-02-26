export function deep(obj) {
    // return JSON.parse(JSON.stringify(obj));

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const temp = obj.constructor();

    for (let key in obj) {
        temp[key] = deep(obj[key]);
    }

    return temp;
}
