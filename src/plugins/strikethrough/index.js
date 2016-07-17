import React from 'react';
import { RichUtils } from 'draft-js';

const Underline = (props) => {
    function handleCommand() {
        props.setEditorState(RichUtils.toggleInlineStyle(props.getEditorState(), 'STRIKETHROUGH'));
    }
    let active = props.currentStyle.has('STRIKETHROUGH');
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-strikethrough icon ${active ? 'active':''}`}></i>
        </div>
    )
};

export default {
    name: 'strikethrough',
    component: Underline
};
