import React from 'react';

const Toolbar = React.createClass({
	handleCommand(e){
		e.preventDefault();
		e.stopPropagation();
	},
	render() {
		const props = this.props;

		return (
			<div className={`${props.prefixCls}-toolbar-container`} onMouseDown={this.handleCommand}>

			</div>
		)
	}

});
export default Toolbar;