import React from 'react';
import DropList from './../Toolbar/DropList';
import DropItem from './../Toolbar/DropItem';


const Head = React.createClass({
	render() {
		let headArr = [
			{blockType:'header-one',label:"<h1>标题1</h1>"},
			{blockType:'header-two',label:"<h2>标题2</h2>"},
			{blockType:'header-three',label:"<h3>标题3</h3>"},
			{blockType:'header-four',label:"<h4>标题4</h4>"},
		];
		let headList = headArr.map((item,i) => {
			return <DropItem
				key={i}
				label={item.label}
				block={item.blockType}
				{...this.props} />
		});
		return (
			<DropList {...this.props}>
				{headList}
			</DropList>
		)
	}
});


export default Head;