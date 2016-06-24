import React from 'react';
import Menu from '../Menu';
import Mixin from '../MenuMixin';
module.exports = React.createClass({
    mixins:[Mixin],


    getDefaultProps() {
        return {
            type: 'COLOR'
        }
    },

    handleCommand(e) {
        let inlineStyle = e.currentTarget.getAttribute('data-inlineStyle');
        this.props.toggleInlineStyle(inlineStyle);
    },



    render() {
        const props = this.props;
        const itemArr = [
            'E53333','E56600','FF9900','64451D','DFC5A4','FFE500',
            '009900','006600','99BB00','B8D100','60D978','00D5FF',
            '337FE5','003399','4C33E5','9933E5','CC33E5','EE33EE',
            'FFFFFF','CCCCCC','999999','666666','333333','000000'
        ];
        let list = itemArr.map((item, i) => {
            return (
                <div className={`${props.prefixCls}-menu-item`} key={i} data-inlineStyle={`${this.props.type}-${item}`} onMouseDown={this.handleCommand}>
                    <a style={{background: `#${item}`}} title={`#${item}`}></a>
                </div>
            );
        });

        //激活状态
        let active = false;
        for(let item of itemArr) {
            if(props.currentStyle.has(`${this.props.type}-${item}`)) {
                active = true;
                break;
            }
        }
        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={this.toggleMenu}>
                <i className={`toolbar-item-icon-${this.props.type.toLowerCase()} icon ${active ? 'active':''}`}></i>

                <div className={`${props.prefixCls}-menu-color-panel`}>
                    <Menu {...props} visible={this.state.menuVisible}>
                        {list}
                        <div className="clear"></div>
                    </Menu>
                </div>
            </div>
        )
    }
});