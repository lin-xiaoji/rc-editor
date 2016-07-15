import React from 'react';
import { RichUtils } from 'draft-js';
import Menu  from '../../Menu';
import MenuEnhance  from '../../MenuEnhance';

const itemArr = [10,12,14,16,18,24,32];

class Size extends React.Component {
    handleCommand(e) {
        let inlineStyle = e.currentTarget.getAttribute('data-inlineStyle');
        this.props.setEditorState(RichUtils.toggleInlineStyle(this.props.getEditorState(), inlineStyle));
    }


    render() {
        const props = this.props;
        let list = itemArr.map((item, i) => {
            return (
                <div className={`${props.prefixCls}-menu-item`} key={i} data-inlineStyle={`SIZE-${item}`} onMouseDown={this.handleCommand.bind(this)}>
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
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title}>
                <i className={`toolbar-item-icon-size icon  ${active ? 'active':''}`}></i>

                <Menu {...props} visible={this.props.menuVisible}>
                    {list}
                </Menu>
            </div>
        )
    }
}

let styleMap = {
};
itemArr.map((item) => styleMap['SIZE-'+item] = {'fontSize': item+'px'});

export default {
    name: 'size',
    component: MenuEnhance(Size),
    customStyleMap:styleMap
};
