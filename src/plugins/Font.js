import React from 'react';
import Menu from '../Menu';
import Mixin from '../Mixin';
module.exports = React.createClass({
    mixins:[Mixin],

    handleCommand(e) {
        let inlineStyle = e.currentTarget.getAttribute('data-inlineStyle');
        this.props.toggleInlineStyle(inlineStyle);
    },


    render() {
        const props = this.props;
        let itemArr = [
            {style:'FONT-SONG',label:'宋体'},
            {style:'FONT-HEI',label:'黑体'},
            {style:'FONT-KAI',label:'楷体'},
            {style:'FONT-YAHEI',label:'微软雅黑'},
            {style:'FONT-ARIAL',label:'Arial'},
        ];
        let list = itemArr.map((item, i) => {
            return (
                <div className={`${props.prefixCls}-menu-item`} key={i} data-inlineStyle={item.style} onMouseDown={this.handleCommand}>
                    <a style={{fontFamily: item.label}} title={item.label}>{item.label}</a>
                </div>
            );
        });

        //激活状态
        let active = false;
        for(let item of itemArr) {
            if(props.currentStyle.has(item.style)) {
                active = true;
                break;
            }
        }
        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={this.toggleMenu}>
                <i className={`toolbar-item-icon-font icon ${active ? 'active':''}`}></i>

                <Menu {...props} visible={this.state.menuVisible}>
                    {list}
                </Menu>
            </div>
        )
    }
});