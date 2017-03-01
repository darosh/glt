import {deep} from '../utils/deep';
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
import {syntaxToPartialShaders} from './syntax/syntaxToPartialShaders';

export function compile(data, type = variableType.INLINE, multi = false) {
    let f = formatOf(data);
    let graph = f === dataFormat.GRAPH ? data : null;
    let ids = graph ? addIds(graph) : null;
    let tree = f === dataFormat.TREE ? data : {data: graphToTree(data)};
    let syntax = treeToSyntax(deep(tree));
    let shader;

    expandPlaceholders(syntax.data);

    let partials = syntaxToPartialShaders(syntax);

    if (type > variableType.INLINE) {
        syntax.data.uniforms = {};
    }

    detectRequired(syntax.data);
    functionsToLib(syntax.data, syntax.data);

    shader = syntaxToShader(syntax.data);

    const ret = {
        graph: graph,
        ids: ids,
        tree: tree,
        syntax: syntax,
        shader: shader,
        partials: partials,
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
