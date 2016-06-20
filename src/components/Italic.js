import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleInlineStyle('ITALIC');
    }
    return (
        <div className={`${props.prefixCls}-menu-item`} onMouseDown={handleCommand}>
            <i className={`menu-item-icon-italic icon `}></i>
        </div>
    )
}