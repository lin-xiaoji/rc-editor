/**
 * Created by linxiaoji on 16/9/20.
 */
function noop() {
    return null;
}

require.extensions['.css'] = noop;
require.extensions['.less'] = noop;
require.extensions['.scss'] = noop;