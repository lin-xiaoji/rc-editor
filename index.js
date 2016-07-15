import React from 'react'
import {render} from 'react-dom'
import RcEditor from './src';
const plugins = [];
const toolbars = [['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji']];

render(<RcEditor
    plugins={plugins}
     />
    ,document.getElementById("app"));