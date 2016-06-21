import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleInlineStyle('UNDERLINE');
    }
    let active = props.currentStyle.has('UNDERLINE');
    return (
        <div className={`${props.prefixCls}-toolbar-item`} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-underline icon ${active ? 'active':''}`}></i>
        </div>
    )
}