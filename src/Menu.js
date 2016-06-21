import React from 'react';

const Menu = React.createClass({
	render() {
		var style = {};
		if(!this.props.visible) {
			style = {display: 'none'};
		}
		return (
			<div className={`${this.props.prefixCls}-toolbar-menu`} style={style}>
				{this.props.children}
			</div>
		)
	}
});
export default Menu;