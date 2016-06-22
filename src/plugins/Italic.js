import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleInlineStyle('ITALIC');
    }
    let active = props.currentStyle.has('ITALIC');
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-italic icon ${active ? 'active':''} `}></i>
        </div>
    )
}