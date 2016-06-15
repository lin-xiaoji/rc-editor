import React from 'react';
import DropList from './../Toolbar/DropList';
import DropItem from './../Toolbar/DropItem';
import {colorArr} from './../Constants'


const BgColor = React.createClass({
	render() {
		let colorList = colorArr.map((item,i) => {
			let colorBlock = '<a style="background: #'+item+';" title="#'+item+'"></a>';
			return <DropItem key={i} label={colorBlock} style={`BGCOLOR-${item}`} {...this.props}></DropItem>
		});
		return (
			<div className={`${this.props.prefixCls}-menu-color-panel`}>
				<DropList {...this.props}>
					{colorList}
					<div className="clear"></div>
				</DropList>
			</div>
		)
	}
});


export default BgColor;