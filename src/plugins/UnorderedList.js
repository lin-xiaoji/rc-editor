import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleBlockType('unordered-list-item');
    }
    let active = props.blockType == 'unordered-list-item';
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-list-bullet icon ${active ? 'active':''}`}></i>
        </div>
    )
}