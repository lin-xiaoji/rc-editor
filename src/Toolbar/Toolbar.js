import React from 'react';
import MenuGroup from './Group';
import MenuItem from './Item';
import { menuItemActive } from './../funcs'

const EditorMenu = (props) => {
	const currentStyle = props.editorState.getCurrentInlineStyle();
	const {editorState} = props;
	const selection = editorState.getSelection();
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();
	const menuData = [
		[
			{type:'bold', title:'加粗'},
			{type:'underline', title:'下划线'},
			{type:'italic', title:'斜体'},
			{type:'strikethrough', title:'删除线'},
			{type:'pencil', title:'文字颜色'},
			{type:'brush', title:'背景颜色'},
			{type:'font-family', title:'字体'},
			{type:'font-size', title:'字号'},
		],
		[
			{type:'header', title:'标题'},
			{type:'list-bullet', title:'无序列表', blockType:'unordered-list-item'},
			{type:'list-numbered', title:'有序列表', blockType:'ordered-list-item'},
			{type:'link', title:'添加链接', link:true},
		]
	];
	//console.log(currentStyle);
	const menu = menuData.map((menuGroup,i) => {
		let items = menuGroup.map((menuItem,j) =>{
			//菜单激活状态
			let active = menuItemActive(menuItem.type,currentStyle,blockType);

			return <MenuItem
				key={j}
				type={menuItem.type}
				title={menuItem.title}
				blockType={menuItem.blockType}
				link={menuItem.link}
				active={ active }
				{...props} />;
		});
		return (
			<MenuGroup key={i} {...props}>
				{items}
			</MenuGroup>
		)
	});
	return (
		<div className={`${props.prefixCls}-menu-container`}>
			{menu}
		</div>
	)
};
export default EditorMenu;