import React from 'react';
import { RichUtils } from 'draft-js';

const OrderList = (props) => {
    function handleCommand() {
        props.setEditorState(RichUtils.toggleBlockType(props.getEditorState(), 'ordered-list-item'));
    }
    let active = props.blockType == 'ordered-list-item';
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-list-numbered icon ${active ? 'active':''}`}></i>
        </div>
    )
};

export default {
    name: 'orderList',
    component: OrderList
};
