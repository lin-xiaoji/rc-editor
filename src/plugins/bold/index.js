import React from 'react';
import { RichUtils } from 'draft-js';

const Bold = (props) => {
    function handleCommand() {
        props.setEditorState(RichUtils.toggleInlineStyle(props.getEditorState(), 'BOLD'));
    }
    let active = props.currentStyle.has('BOLD');
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-bold icon ${active ? 'active':''}`}></i>
        </div>
    )
};

export default {
    name: 'bold',
    component: Bold
};
