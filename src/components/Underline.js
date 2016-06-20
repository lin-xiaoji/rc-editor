import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleInlineStyle('UNDERLINE');
    }
    return (
        <div className={`${props.prefixCls}-menu-item`} onMouseDown={handleCommand}>
            <i className={`menu-item-icon-underline icon `}></i>
        </div>
    )
}