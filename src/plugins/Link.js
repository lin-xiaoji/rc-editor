import React from 'react';
import Menu from '../Menu';
import Mixin from '../MenuMixin';
module.exports = React.createClass({
    mixins:[Mixin],
    addLink(){
        this.props.toggleLink(this.refs.urlInput.value);
        this.props.focus();
    },
    handlefocus(e) {
        e.preventDefault();
        e.stopPropagation();
        this.refs.urlInput.focus();
    },

    render() {
        const props = this.props;
        let active = false;
        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={this.toggleMenu}>
                <i className={`toolbar-item-icon-link icon ${active ? 'active':''}`}></i>

                <div className={`${this.props.prefixCls}-menu-link-panel`}>
                    <Menu {...props} visible={this.state.menuVisible}>
                        <div className={`${props.prefixCls}-menu-link-input`}>
                            <input type="text" defaultValue="http://" ref="urlInput" onMouseDown={this.handlefocus} />
                        </div>
                        <div className={`${props.prefixCls}-menu-link-button`}>
                            <button onMouseDown={this.addLink}>确定</button>
                            <button onMouseDown={this.hideMenu}>取消</button>
                            <div className="clear"></div>
                        </div>
                    </Menu>
                </div>
            </div>
        )
    }
})