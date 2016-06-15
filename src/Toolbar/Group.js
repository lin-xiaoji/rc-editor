import React from 'react';

const MenuGroup = React.createClass({
	render() {
		return (
			<div className={`${this.props.prefixCls}-menu-group`}>
				{this.props.children}
			</div>
		)
	}
});
export default MenuGroup;