import React from 'react';

export default class extends React.Component {
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
};