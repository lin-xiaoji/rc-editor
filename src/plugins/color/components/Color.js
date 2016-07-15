import React from 'react';
import { RichUtils } from 'draft-js';
import Menu  from '../../../Menu';

const colorArr = [
    'E53333','E56600','FF9900','64451D','DFC5A4','FFE500',
    '009900','006600','99BB00','B8D100','60D978','00D5FF',
    '337FE5','003399','4C33E5','9933E5','CC33E5','EE33EE',
    'FFFFFF','CCCCCC','999999','666666','333333','000000'
];

class Color extends React.Component {

    static defaultProps = {
        type:'COLOR'
    };
    handleCommand(e) {
        let inlineStyle = e.currentTarget.getAttribute('data-inlineStyle');
        this.props.setEditorState(RichUtils.toggleInlineStyle(this.props.getEditorState(), inlineStyle));
    }
    render() {
        const props = this.props;

        let list = colorArr.map((item, i) => {
            return (
                <div className={`${props.prefixCls}-menu-item`}
                     key={i}
                     data-inlineStyle={`${this.props.type}-${item}`}
                     onMouseDown={this.handleCommand.bind(this)}>
                    <a style={{background: `#${item}`}} title={`#${item}`}></a>
                </div>
            );
        });

        //激活状态
        let active = false;
        for(let item of colorArr) {
            if(props.currentStyle.has(`${this.props.type}-${item}`)) {
                active = true;
                break;
            }
        }

        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title}>
                <i className={`toolbar-item-icon-${this.props.type.toLowerCase()} icon ${active ? 'active':''}`}></i>

                <div className={`${props.prefixCls}-menu-color-panel`}>
                    <Menu {...props}  visible={props.menuVisible}>
                        {list}
                        <div className="clear"></div>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default Color
export {colorArr}
