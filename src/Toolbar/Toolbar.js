import React from 'react';
import Group from './Group';
import Item from './Item';
import Bold from '../components/Bold';
import { toolbarItemActive } from './../funcs'
import inline from '../plugins/inline';

const EditorMenu = React.createClass({
	handleCommand(e){
		e.preventDefault();
		e.stopPropagation();
	},
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
			{name:'pencil'},
			{name:'brush'},
			{name:'font-family'},
			{name:'font-size'},
			{name:'header'},
			{name:'list-bullet', blockType:'unordered-list-item'},
			{name:'list-numbered', blockType:'ordered-list-item'},
			{name:'link'},
		];

		toolbarData = inline.concat(toolbarData);


		//语言设置
		var rcEditorLang = require('../lang/'+ props.lang);

		const toolbar0 = toolbarData.map((menuItem,j) =>{
			//工具栏激活状态
			let active = toolbarItemActive(menuItem.name,currentStyle,blockType);

			return <Item
				key={j}
				name={menuItem.name}
				title={rcEditorLang[menuItem.name]}
				click={menuItem.click}
				blockType={menuItem.blockType}
				link={menuItem.link}
				active={ active }
				{...props} />;
		});

		const toolbar = props.items.map((item,i) =>{
			//先从自定义插件里查找，如果没有，就载入系统预置组件
			let Plugin
			if(props.plugins[item]){
				Plugin = props.plugins[item];
			} else {
				Plugin = require('../components/'+ item.replace(/(\w)/,function(v){return v.toUpperCase()}));
			}

			return <Plugin key={i} {...props} />
		});
		return (
			<div className={`${props.prefixCls}-menu-container`} onMouseDown={this.handleCommand}>
				{toolbar}
			</div>
		)
	}

});
export default EditorMenu;