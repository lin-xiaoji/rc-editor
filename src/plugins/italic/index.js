import React from 'react';
import { RichUtils } from 'draft-js';

const Italic = (props) => {
    function handleCommand() {
        props.setEditorState(RichUtils.toggleInlineStyle(props.getEditorState(), 'ITALIC'));
    }

    let active = props.currentStyle.has('ITALIC');
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-italic icon ${active ? 'active':''}`}></i>
        </div>
    )
};

export default {
    name: 'italic',
    component: Italic
};
