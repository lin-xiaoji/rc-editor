import React from 'react';
import Menu from '../Menu';
import Mixin from '../MenuMixin';
module.exports = React.createClass({
    mixins:[Mixin],

    render() {
        const props = this.props;
        let active = false;
        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={this.toggleMenu}>
                <i className={`toolbar-item-icon-link icon ${active ? 'active':''}`}></i>

                <Menu {...props} visible={this.state.menuVisible}>
                    ssss
                </Menu>
            </div>
        )
    }
})