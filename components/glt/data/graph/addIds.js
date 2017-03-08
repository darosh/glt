export function addIds(graph, ids = {}, parent = null) {
    (graph.data || []).forEach((d) => {
        d.id = Object.keys(ids).length + 1;
        d.parent = parent;
        ids[d.id] = d;
        parent = d.id;
        d.forEach((p) => {
            if (p.data) {
                addIds(p, ids, parent);
            }
        });
    });
    return ids;
}
