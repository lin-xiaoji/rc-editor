import React from 'react';
import { RichUtils } from 'draft-js';
import Menu  from '../../Menu';
import MenuEnhance  from '../../MenuEnhance';


class Head extends React.Component {
    handleCommand(e) {
        let blockType = e.currentTarget.getAttribute('data-blockType');
        this.props.setEditorState(RichUtils.toggleBlockType(this.props.getEditorState(), blockType));
    }


    render() {
        const props = this.props;
        let itemArr = [
            {blockType:'header-one',label:"<h1>标题1</h1>"},
            {blockType:'header-two',label:"<h2>标题2</h2>"},
            {blockType:'header-three',label:"<h3>标题3</h3>"},
            {blockType:'header-four',label:"<h4>标题4</h4>"},
        ];
        let list = itemArr.map((item, i) => {
            return (
                <div
                    className={`${props.prefixCls}-menu-item`}
                    key={i}
                    data-blockType={item.blockType}
                    onMouseDown={this.handleCommand.bind(this)}
                    dangerouslySetInnerHTML={{__html: item.label}}
                    />
            );
        });

        //激活状态
        let active = false;
        for(let item of itemArr) {
            if(props.blockType == item.blockType) {
                active = true;
                break;
            }
        }

        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title}>
                <i className={`toolbar-item-icon-header icon ${active ? 'active':''}`}></i>
                <Menu {...props} visible={this.props.menuVisible}>
                    {list}
                </Menu>
            </div>
        )
    }
}

export default {
    name: 'head',
    component: MenuEnhance(Head)
};
