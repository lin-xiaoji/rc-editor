import React from 'react';
import Menu from '../Menu';
import Mixin from '../MenuMixin';
module.exports = React.createClass({
    mixins:[Mixin],

    handleCommand(e) {
        let blockType = e.currentTarget.getAttribute('data-blockType');
        this.props.toggleBlockType(blockType);
    },

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
                    onMouseDown={this.handleCommand}
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
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={this.toggleMenu}>
                <i className={`toolbar-item-icon-header icon ${active ? 'active':''}`}></i>

                <Menu {...props} visible={this.state.menuVisible}>
                    {list}
                </Menu>
            </div>
        )
    }
});