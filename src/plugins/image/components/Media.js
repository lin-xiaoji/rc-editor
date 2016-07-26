import React from 'react';
import Menu  from '../../../Menu';
import { RichUtils , Entity, AtomicBlockUtils } from 'draft-js';

class Media extends React.Component {
    //插入自定义组件
    insertAtomicBlock(){
        console.log(this.refs.urlInput.value);
        let entityKey = Entity.create(this.props.type, 'IMMUTABLE', {src:this.refs.urlInput.value});
        let editorState = AtomicBlockUtils.insertAtomicBlock(
            this.props.getEditorState(),
            entityKey,
            ' '
        );
        this.props.setEditorState(editorState);
    }

    handlefocus(e) {
        e.preventDefault();
        e.stopPropagation();
        this.refs.urlInput.focus();
    }
    render() {
        const props = this.props;

        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title}>
                <i className={`toolbar-item-icon-image icon `}></i>

                <div className={`${this.props.prefixCls}-menu-link-panel`}>
                    <Menu {...props} visible={this.props.menuVisible}>
                        <div className={`${props.prefixCls}-menu-link-input`}>
                            <input type="text" defaultValue="" ref="urlInput" onMouseDown={this.handlefocus.bind(this)} />
                        </div>
                        <div className={`${props.prefixCls}-menu-link-button`}>
                            <button onMouseDown={this.insertAtomicBlock.bind(this)}>确定</button>
                            <button>取消</button>
                            <div className="clear"></div>
                        </div>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default Media
