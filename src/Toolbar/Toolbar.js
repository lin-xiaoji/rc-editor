import React from 'react';
import Group from './Group';
import Item from './Item';
import { toolbarItemActive } from './../funcs'

const EditorMenu = React.createClass({
	render() {
		const props = this.props;
		const currentStyle = props.editorState.getCurrentInlineStyle();
		const {editorState} = props;
		const selection = editorState.getSelection();
		const blockType = editorState
			.getCurrentContent()
			.getBlockForKey(selection.getStartKey())
			.getType();
		let toolbarData = [
			{type:'bold', title:'加粗'},
			{type:'underline', title:'下划线'},
			{type:'italic', title:'斜体'},
			{type:'strikethrough', title:'删除线'},
			{type:'pencil', title:'文字颜色'},
			{type:'brush', title:'背景颜色'},
			{type:'font-family', title:'字体'},
			{type:'font-size', title:'字号'},
			{type:'header', title:'标题'},
			{type:'list-bullet', title:'无序列表', blockType:'unordered-list-item'},
			{type:'list-numbered', title:'有序列表', blockType:'ordered-list-item'},
			{type:'link', title:'添加链接'},
		];

		//添加处理插件
		props.plugins.map((plugin) => {
			toolbarData.push(plugin);
		});

		//console.log(currentStyle);
		const toolbar = toolbarData.map((menuItem,j) =>{
			//工具栏激活状态
			let active = toolbarItemActive(menuItem.type,currentStyle,blockType);

			return <Item
				key={j}
				type={menuItem.type}
				title={menuItem.title}
				blockType={menuItem.blockType}
				link={menuItem.link}
				active={ active }
				{...props} />;
		});
		return (
			<div className={`${props.prefixCls}-menu-container`}>
				{toolbar}
			</div>
		)
	}

});
export default EditorMenu;