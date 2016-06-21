import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleInlineStyle('STRIKETHROUGH');
    }
    let active = props.currentStyle.has('STRIKETHROUGH');
    return (
        <div className={`${props.prefixCls}-toolbar-item`} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-strikethrough icon ${active ? 'active':''}`}></i>
        </div>
    )
}