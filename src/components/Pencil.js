import React from 'react';
import {colorArr} from '../Constants'
import DropItem from './../Toolbar/DropItem';
import Menu from '../Menu.js';
module.exports = React.createClass({

    getInitialState() {
        return {
            menuVisible:false
        }
    },

    toggleMenu() {
        this.setState({
            menuVisible:!this.state.menuVisible
        });
    },

    handleCommand(e) {
        this.props.toggleInlineStyle(e.currentTarget.getAttribute('data-inlineStyle'));
    },



    render() {
        const props = this.props;
        //循环出每一个颜色的div
        let colorList = colorArr.map((item, i) => {
            return (
                <div className={`${props.prefixCls}-menu-item`} key={i} data-inlineStyle={`COLOR-${item}`} onMouseDown={this.handleCommand}>
                    <a style={{background: `#${item}`}} title={`#${item}`}></a>
                </div>
            );
        });
        //激活状态
        let active = false;
        for(let item of colorArr) {
            if(props.currentStyle.has('COLOR-'+item)) {
                active = true;
                break;
            }
        }
        return (
            <div className={`${props.prefixCls}-toolbar-item`} onMouseDown={this.toggleMenu}>
                <i className={`toolbar-item-icon-pencil icon ${active ? 'active':''}`}></i>

                <div className={`${props.prefixCls}-menu-color-panel`}>
                    <Menu {...props} visible={this.state.menuVisible}>
                        {colorList}
                        <div className="clear"></div>
                    </Menu>
                </div>
            </div>
        )
    }
});