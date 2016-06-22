import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleInlineStyle('BOLD');
    }
    let active = props.currentStyle.has('BOLD');
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-bold icon ${active ? 'active':''}`}></i>
        </div>
    )
}