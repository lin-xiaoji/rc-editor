import React from 'react';

const EditorMenu = React.createClass({
	handleCommand(e){
		e.preventDefault();
		e.stopPropagation();
	},
	render() {
		const props = this.props;
		const toolbar = props.items.map((item,i) =>{
			//先从自定义插件里查找，如果没有，就载入系统预置组件
			let Plugin;
			if(props.plugins[item]){
				Plugin = props.plugins[item];
			} else {
				Plugin = require('../components/'+ item.replace(/(\w)/,function(v){return v.toUpperCase()}));
			}

			return <Plugin
				key={i}
				{...props}
				/>
		});
		return (
			<div className={`${props.prefixCls}-toolbar-container`} onMouseDown={this.handleCommand}>
				{toolbar}
			</div>
		)
	}

});
export default EditorMenu;