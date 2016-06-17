import React from 'react'
import {render} from 'react-dom'
import RcEditor from './src';

const plugins = {
    hello:{
        e: function () {
            alert(1);
        }
    }
};


render(<RcEditor plugins={plugins} /> ,document.getElementById("app"))