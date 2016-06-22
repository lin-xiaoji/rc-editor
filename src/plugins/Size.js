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
        let itemArr = [10,12,14,16,18,24,32];
        let list = itemArr.map((item, i) => {
            return (
                <div className={`${props.prefixCls}-menu-item`} key={i} data-inlineStyle={`SIZE-${item}`} onMouseDown={this.handleCommand}>
                    <a style={{fontSize: `${item}px`}} title={`${item}px`}>{`${item}px`}</a>
                </div>
            );
        });

        //激活状态
        let active = false;
        for(let item of itemArr) {
            if(props.currentStyle.has(`SIZE-${item}`)) {
                active = true;
                break;
            }
        }
        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={this.toggleMenu}>
                <i className={`toolbar-item-icon-size icon ${active ? 'active':''}`}></i>

                <Menu {...props} visible={this.state.menuVisible}>
                    {list}
                </Menu>
            </div>
        )
    }
});