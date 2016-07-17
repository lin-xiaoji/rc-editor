import React from 'react';
import { RichUtils } from 'draft-js';

const Underline = (props) => {
    function handleCommand() {
        props.setEditorState(RichUtils.toggleInlineStyle(props.getEditorState(), 'UNDERLINE'));
    }
    let active = props.currentStyle.has('UNDERLINE');
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-underline icon ${active ? 'active':''}`}></i>
        </div>
    )
};

export default {
    name: 'underline',
    component: Underline
};
