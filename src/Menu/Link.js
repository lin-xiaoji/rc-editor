import React from 'react';
import DropList from './../Toolbar/DropList';


const Link = React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.target.focus();
    },
    addLink(){
        this.props.toggleLink(this.refs.urlInput.value);
    },
    render() {
        return (
            <div className={`${this.props.prefixCls}-menu-link-panel`} onMouseDown={this.handleClick}>
                <DropList {...this.props}>
                    <div className={`${this.props.prefixCls}-menu-link-input`}><input type="text" defaultValue="http://" ref="urlInput" /></div>
                    <div className={`${this.props.prefixCls}-menu-link-button`}>
                        <button onMouseDown={this.addLink}>确定</button>
                        <button onMouseDown={this.addLink}>取消</button>
                        <div className="clear"></div>
                    </div>

                </DropList>
            </div>
        )
    }
});


export default Link;