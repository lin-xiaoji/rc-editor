import React from 'react';
import { RichUtils } from 'draft-js';

const Unlink = (props) => {
    function handleCommand() {
        const editorState = props.getEditorState();
        let entityKey = null;
        const newEditorState = RichUtils.toggleLink(
            editorState,
            editorState.getSelection(),
            entityKey
        )
        props.setEditorState(newEditorState);
    }
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand.bind(this)}>
            <i className={`toolbar-item-icon-unlink icon `}></i>
        </div>
    )
};

export default {
    name: 'unlink',
    component: Unlink
};
