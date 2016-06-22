import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleBlockType('ordered-list-item');
    }
    let active = props.blockType == 'ordered-list-item';
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-list-numbered icon ${active ? 'active':''}`}></i>
        </div>
    )
}