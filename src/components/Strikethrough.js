import React from 'react';
module.exports = (props) => {
    function handleCommand() {
        props.toggleInlineStyle('STRIKETHROUGH');
    }
    return (
        <div className={`${props.prefixCls}-menu-item`} onMouseDown={handleCommand}>
            <i className={`menu-item-icon-strikethrough icon `}></i>
        </div>
    )
}