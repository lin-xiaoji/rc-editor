import React from 'react';
import DropList from './../Toolbar/DropList';
import DropItem from './../Toolbar/DropItem';
import {sizeArr} from './../Constants'

const Family = React.createClass({
	render() {
		let fontArr = [
			{style:'FONT-SONG',label:'<a style="font-family:宋体;">宋体</a>'},
			{style:'FONT-HEI',label:'<a style="font-family:黑体;">黑体</a>'},
			{style:'FONT-KAI',label:'<a style="font-family:楷体;">楷体</a>'},
			{style:'FONT-YAHEI',label:'<a style="font-family:微软雅黑;">微软雅黑</a>'},
			{style:'FONT-ARIAL',label:'<a style="font-family:Arial;">Arial</a>'},
		];
		let fontList = fontArr.map((item,i) => {
			return <DropItem key={i} label={item.label} style={item.style} {...this.props}></DropItem>
		});
		return (
			<DropList {...this.props}>
				{fontList}
			</DropList>
		)
	}
});

const Size = React.createClass({
	render() {
		let fontList = sizeArr.map((item,i) => {
			let block = '<a style="font-size: '+item+'px;">'+item+'px</a>';
			return <DropItem key={i} label={block} style={`SIZE-${item}`} {...this.props}></DropItem>
		});
		return (
			<DropList {...this.props}>
				{fontList}
			</DropList>
		)
	}
});

const Font = {
	Family:Family,
	Size:Size
}

export default Font;