import React from 'react'
import {render} from 'react-dom'
import RcEditor from './src';
import My from './src/plugins/Bold';


const plugins = {
    'my':My
};


render(<RcEditor
    plugins={plugins}
    lang="zh-CN"
    /> ,document.getElementById("app"))