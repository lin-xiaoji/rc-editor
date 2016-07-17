import React from 'react';
import { RichUtils } from 'draft-js';
import MenuEnhance  from '../../MenuEnhance';
import Color,{colorArr}  from '../color/components/Color';

let styleMap = {};
colorArr.map((item) => styleMap['BGCOLOR-'+item] = {'backgroundColor': '#'+item});

const BgColor = (props) => {
    return <Color {...props} type="BGCOLOR" title={props.title} />
}

export default {
    name: 'bgcolor',
    component: MenuEnhance(BgColor),
    customStyleMap:styleMap
};
