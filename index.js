import React from 'react'
import {render} from 'react-dom'
import RcEditor from './src';
const plugins = [];
const toolbars = [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    '|',
    'color',
    'bgcolor',
    'font',
    'size',
    '|',
    'head',
    'orderlist',
    'unorderlist',
    '|',
    'link',
    'unlink',
    'image'
];

render(<RcEditor
    plugins={plugins}
    toolbars={toolbars}
     />
    ,document.getElementById("app"));