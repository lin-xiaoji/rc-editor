import React from 'react';
import { RichUtils } from 'draft-js';
import Menu  from '../../Menu';
import MenuEnhance  from '../../MenuEnhance';


class Font extends React.Component {
    handleCommand(e) {
        let inlineStyle = e.currentTarget.getAttribute('data-inlineStyle');
        this.props.setEditorState(RichUtils.toggleInlineStyle(this.props.getEditorState(), inlineStyle));
    }


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
                <div className={`${props.prefixCls}-menu-item`} key={i} data-inlineStyle={item.style} onMouseDown={this.handleCommand.bind(this)}>
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
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title}>
                <i className={`toolbar-item-icon-font icon  ${active ? 'active':''}`}></i>

                <Menu {...props} visible={this.props.menuVisible}>
                    {list}
                </Menu>
            </div>
        )
    }
}

let styleMap = {
    'FONT-SONG': {
        'fontFamily': '宋体'
    },
    'FONT-HEI': {
        'fontFamily': '黑体'
    },
    'FONT-KAI': {
        'fontFamily': '楷体'
    },
    'FONT-YAHEI': {
        'fontFamily': '微软雅黑'
    },
    'FONT-Arial': {
        'fontFamily': 'Arial'
    }
};

export default {
    name: 'font',
    component: MenuEnhance(Font),
    customStyleMap:styleMap
};
