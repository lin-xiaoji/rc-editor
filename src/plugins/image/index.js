import React from 'react';
import { RichUtils , Entity } from 'draft-js';

import MenuEnhance  from '../../MenuEnhance';
import Media  from './components/Media';

const Image = (props) => {
    const entity = Entity.get(props.block.getEntityAt(0));
    const {src} = entity.getData();
    return <img src={src} />;
};

function blockRendererFn(block) {
    if (block.getType() === 'atomic') {
        return {
            component: Image,
            editable: true,
        };
    }
    return null;
}


export default {
    name: 'image',
    component: MenuEnhance(Media),
    blockRendererFn:blockRendererFn
};
