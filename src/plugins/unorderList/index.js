import React from 'react';
import { RichUtils } from 'draft-js';

const OrderList = (props) => {
    function handleCommand() {
        props.setEditorState(RichUtils.toggleBlockType(props.getEditorState(), 'unordered-list-item'));
    }
    let active = props.blockType == 'unordered-list-item';
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-list-bullet icon ${active ? 'active':''}`}></i>
        </div>
    )
};

export default {
    name: 'unorderList',
    component: OrderList
};
