export function pair(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
}
