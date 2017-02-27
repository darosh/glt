export function valueToGraph(ids, value) {
    ids[value.id][value.index] = value.value;
}
