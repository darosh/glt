export function addIds(graph, ids = {}) {
    (graph.data || []).forEach((d) => {
        d.id = Object.keys(ids).length + 1;
        ids[d.id] = d;
        d.forEach((p) => {
            if (p.data) {
                addIds(p, ids);
            }
        });
    });
    return ids;
}
