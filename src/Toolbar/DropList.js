import React from 'react';

const DropList = React.createClass({
	render() {
		var style = {};
		if(!this.props.visible) {
			style = {display: 'none'};
		}
		return (
			<div className={`${this.props.prefixCls}-menu-drop-list`} style={style}>
				{this.props.children}
			</div>
		)
	}
});
export default DropList;