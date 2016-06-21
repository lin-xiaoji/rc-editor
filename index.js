import React from 'react'
import {render} from 'react-dom'
import RcEditor from './src';
import My from './src/components/Bold';


const plugins = {
    'my':My
};


render(<RcEditor
    plugins={plugins}
    lang="zh-CN"
    items={['my','italic','underline','pencil']}
    /> ,document.getElementById("app"))