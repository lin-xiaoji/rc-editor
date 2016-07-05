import React from 'react';
import { Entity } from 'draft-js';
import Menu from '../Menu';
import Mixin from '../MenuMixin';

const Image = (props) => {
    const entity = Entity.get(props.block.getEntityAt(0));
    const {src} = entity.getData();
    return <img src={src} />;
};

module.exports = React.createClass({
    mixins:[Mixin],

    handleCommand() {
        this.props.insertAtomicBlock(Image,'image','media.png');
    },

    render() {
        const props = this.props;
        let active = false;
        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={this.handleCommand}>
                <i className={`toolbar-item-icon-image icon ${active ? 'active':''}`}></i>

                <Menu {...props} visible={this.state.menuVisible}>
                    ssss
                </Menu>
            </div>
        )
    }
});
