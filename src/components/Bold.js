import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleInlineStyle('BOLD');
    }
    return (
        <div className={`${props.prefixCls}-menu-item`} onMouseDown={handleCommand}>
            <i className={`menu-item-icon-bold icon `}></i>
        </div>
    )
}