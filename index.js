import React from 'react'
import {render} from 'react-dom'
import RcEditor from './src';

const plugins = [
    {
        type:'underline',
        title:'下划线'
    },
    {
        type:'font-family',
        title:'字体',
        click:function(editor) {

        }
    },
];


render(<RcEditor plugins={plugins} /> ,document.getElementById("app"))