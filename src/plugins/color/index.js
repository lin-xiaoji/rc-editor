import React from 'react';
import { RichUtils } from 'draft-js';
import MenuEnhance  from '../../MenuEnhance';
import Color,{colorArr}  from './components/Color';

let styleMap = {};
colorArr.map((item) => styleMap['COLOR-'+item] = {'color': '#'+item});

export default {
    name: 'color',
    component: MenuEnhance(Color),
    customStyleMap:styleMap
};
