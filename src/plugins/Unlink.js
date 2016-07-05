import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleLink();
    }
    return (
        <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={handleCommand}>
            <i className={`toolbar-item-icon-unlink icon `}></i>
        </div>
    )
}