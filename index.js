import React from 'react'
import {render} from 'react-dom'
import RcEditor from './src';
import My from './src/plugins/Test';


const plugins = {
    'my':My
};

var value = RcEditor.createValueFromString('欢迎使用 rc-editor...');
render(<RcEditor
    plugins={plugins}
    defaultValue={value} />
    ,document.getElementById("app"))