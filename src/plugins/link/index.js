import React from 'react';
import { RichUtils , Entity } from 'draft-js';
import Menu  from '../../Menu';
import MenuEnhance  from '../../MenuEnhance';

class Link extends React.Component {
    addLink(){
        let url = this.refs.urlInput.value;
        const editorState = this.props.getEditorState();
        let entityKey = null;
        if(url) {
            entityKey = Entity.create('LINK', 'MUTABLE', {url: url});
        }
        const netEditorState = RichUtils.toggleLink(
            editorState,
            editorState.getSelection(),
            entityKey
        )
        this.props.setEditorState(netEditorState);
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
                <i className={`toolbar-item-icon-link icon `}></i>

                <div className={`${this.props.prefixCls}-menu-link-panel`}>
                    <Menu {...props} visible={this.props.menuVisible}>
                        <div className={`${props.prefixCls}-menu-link-input`}>
                            <input type="text" defaultValue="http://" ref="urlInput" onMouseDown={this.handlefocus.bind(this)} />
                        </div>
                        <div className={`${props.prefixCls}-menu-link-button`}>
                            <button onMouseDown={this.addLink.bind(this)}>确定</button>
                            <button>取消</button>
                            <div className="clear"></div>
                        </div>
                    </Menu>
                </div>
            </div>
        )
    }
};



function linkStrategy(contentBlock, callback) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                Entity.get(entityKey).getType() === 'LINK'
            );
        },
        callback
    );
}
const DecoratorLink = (props) => {
    const {url} = Entity.get(props.entityKey).getData();
    return (
        <a href={url}>
            {props.children}
        </a>
    );
};

export default {
    name: 'link',
    component: MenuEnhance(Link),
    decorators:[
        {
            strategy: linkStrategy,
            component: DecoratorLink,
        }
    ]
};
