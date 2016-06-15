import React from 'react';

const DropItem = (props) => {
	const handleClick = function(e) {
		e.preventDefault();
		e.stopPropagation();
		if (props.block) {
			props.toggleBlockType(props.block);
		}  else {
			props.toggleInlineStyle(props.style);
		}

	};
	return (
		<div onMouseDown={handleClick} className={`${props.prefixCls}-menu-drop-item`} dangerouslySetInnerHTML={{__html: props.label}} />
	)
}

export default DropItem;