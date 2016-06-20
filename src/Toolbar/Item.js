import React from 'react';
import {inArray} from './../funcs';
import Color from '../Menu/Color';
import BgColor from '../Menu/BgColor';
import Font from '../Menu/Font';
import Head from '../Menu/Head';
import Link from '../Menu/Link';

const MenuItem = React.createClass({
    getInitialState() {
        return {
            dropListVisible: false
        }
    },
    subArr :['pencil','brush','font-family','font-size','header','link'],
    componentWillReceiveProps(nextProps) {
        let props = this.props;
        if(inArray(props.type,this.subArr)) {
            this.setState({
                dropListVisible: nextProps.dropListVisible
            });
        }
    },
    handleCommand(e){
        e.preventDefault();
        e.stopPropagation();
        let props = this.props;

        //显示下拉列表
        if(inArray(props.type,this.subArr)) {
            this.toggleDropList();
            return false;
        }


        if (props.blockType) { //有序和无序列表
            props.toggleBlockType(props.blockType);
        } else { //加粗，下划线等基本样式
            props.toggleInlineStyle(props.type.toUpperCase());
        }
    },

    toggleDropList() {
        this.setState({
            dropListVisible: !this.state.visible
        });
    },


    render() {
        var subMenu = '';
        if (this.props.type == 'pencil') {
            subMenu = <Color
                {...this.props}
                visible={this.state.dropListVisible}
                />;
        }
        if (this.props.type == 'brush') {
            subMenu = <BgColor
                {...this.props}
                visible={this.state.dropListVisible}
                />;
        }
        if (this.props.type == 'font-family') {
            subMenu = <Font.Family
                {...this.props}
                visible={this.state.dropListVisible}
                />;
        }
        if (this.props.type == 'font-size') {
            subMenu = <Font.Size
                {...this.props}
                visible={this.state.dropListVisible}
                />;
        }
        if (this.props.type == 'header') {
            subMenu = <Head
                {...this.props}
                visible={this.state.dropListVisible}
                />;
        }

        if (this.props.type == 'link') {
            subMenu = <Link
                {...this.props}
                visible={this.state.dropListVisible}
                />;
        }

        return (
            <div className={`${this.props.prefixCls}-menu-item`}>
				<span {...this.props} onMouseDown={this.handleCommand}>
					<i className={`menu-item-icon-${this.props.type} icon ${this.props.active ? 'active':''}`}></i>
				</span>
                {subMenu}
            </div>
        )
    }
});
export default MenuItem;