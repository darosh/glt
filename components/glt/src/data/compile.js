import {deep} from '../utils/deep';
import {compositionToTree} from './composition/compositionToTree';
import {treeToSyntax} from './tree/treeToSyntax';
import {syntaxToShader} from './syntax/syntaxToShader';
import {expandPlaceholders} from './syntax/expandPlaceholders';
import {getLib} from './shader/getLib';
import {detectRequired} from './syntax/detectRequired';
import {functionsToLib} from './syntax/functionsToLib';
import {variableType} from './variableType';
import {formatOf, dataFormat} from './dataFormat';
import {graphToTree} from './graph/graphToTree';
import {addIds} from './graph/addIds';

export function compile(data, type = variableType.INLINE, multi = false) {
    let f = formatOf(data);
    let recipe = f === dataFormat.COMPOSITION ? data : null;
    let graph = f === dataFormat.GRAPH ? data : null;
    let ids = graph ? addIds(graph) : null;
    let tree = f === dataFormat.TREE
        ? data
        : f === dataFormat.GRAPH
            ? {data: graphToTree(data)}
            : compositionToTree(data);

    let syntax = treeToSyntax(deep(tree));
    let shader;

    if (type > variableType.INLINE) {
        syntax.data.uniforms = {};
    }

    expandPlaceholders(syntax.data);
    detectRequired(syntax.data);
    functionsToLib(syntax.data, syntax.data);

    shader = syntaxToShader(syntax.data);

    const ret = {
        graph: graph,
        ids: ids,
        recipe: recipe,
        tree: tree,
        syntax: syntax,
        shader: shader,
        uniforms: syntax.data.uniforms,
        required: syntax.data.required,
        functions: syntax.data.functions,
        code: getLib(syntax.data.required, syntax.data.functions, !multi)
    };

    delete syntax.data.functions;
    delete syntax.data.uniforms;
    delete syntax.data.required;
    delete syntax.data.names;

    return ret;
}
