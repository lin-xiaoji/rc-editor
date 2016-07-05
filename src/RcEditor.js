import React from 'react';
import { Editor, EditorState,ContentState, RichUtils, Entity, CompositeDecorator, AtomicBlockUtils } from 'draft-js';
import Toolbar from './Toolbar';
import styleMap from './StyleMap';
import '../assets/index.less'
import {stateFromHTML} from 'draft-js-import-html';


const Link = (props) => {
    const {url} = Entity.get(props.entityKey).getData();
    return (
        <a href={url}>
            {props.children}
        </a>
    );
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


class RcEditor extends React.Component {
    static defaultProps = {
        prefixCls: 'rc-editor',
        lang: 'zh-CN',
        items:['source','bold','italic','underline','color','strikethrough','bgColor','font','size','head','UnorderedList','OrderedList','link','unlink','image']
    }

    constructor(props) {
        super(props);
        const decorator = new CompositeDecorator([
            {
                strategy: linkStrategy,
                component: Link,
            },
        ]);
        let editorState = EditorState.createEmpty(decorator);
        if(props.defaultValue) {//默认值
            editorState = EditorState.createWithContent(props.defaultValue,decorator);
        }
        this.state = {
            editorState: editorState,
            customComponent: null,
            editorVisible:true
        };
    }

    onChange(editorState) {
        this.setState({editorState});
    }
    //快捷键
    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }




    //增加内联样式
    toggleInlineStyle(inlineStyle) {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }

    //增加块级样式
    toggleBlockType(blockType) {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
    }

    //添加链接
    toggleLink(url) {
        const editorState = this.state.editorState;
        let entityKey = null;
        if(url) {
            entityKey = Entity.create('LINK', 'MUTABLE', {url: url});
        }
        this.onChange(RichUtils.toggleLink(
            editorState,
            editorState.getSelection(),
            entityKey
        ));
    }
    //显示隐藏编辑器
    toggleEditor() {
        this.setState({
            editorVisible:!this.state.editorVisible
        })
    }

    //插入自定义组件
    insertAtomicBlock(customComponent,type,src){
        let entityKey = Entity.create(type, 'IMMUTABLE', {src});
        let editorState = AtomicBlockUtils.insertAtomicBlock(
            this.state.editorState,
            entityKey,
            ' '
        );
        this.setState({editorState,customComponent});
    }

    //模块渲染器，主要用来渲染自定义组件
    blockRendererFn(block) {
        if (block.getType() === 'atomic') {
            return {
                component: this.state.customComponent,
                editable: true,
            };
        }
        return null;
    }

    //编辑器获得焦点
    focus() {
        this.refs.editor.focus();
    }

    componentDidMount() {
        this.focus();
    }

    render() {
        //获取当前样式和模块样式，用于标识工具栏激活状态
        const editorState = this.state.editorState;
        const currentStyle = editorState.getCurrentInlineStyle();
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();

        return (
            <div className={`${this.props.prefixCls}-root`}>
                <Toolbar
                    insertAtomicBlock={this.insertAtomicBlock.bind(this)}
                    toggleInlineStyle={this.toggleInlineStyle.bind(this)}
                    toggleBlockType={this.toggleBlockType.bind(this)}
                    toggleLink={this.toggleLink.bind(this)}
                    toggleEditor={this.toggleEditor.bind(this)}
                    focus={this.focus.bind(this)}
                    editorState={this.state.editorState}
                    currentStyle={currentStyle}
                    blockType={blockType}
                    {...this.props}
                    />
                <div className="clear" />
                <div className={`${this.props.prefixCls}-editor`} style={this.state.editorVisible ? {}:{display: 'none'}}>
                    <Editor
                        customStyleMap={styleMap}
                        editorState={this.state.editorState}
                        blockRendererFn={this.blockRendererFn.bind(this)}
                        handleKeyCommand={this.handleKeyCommand.bind(this)}
                        onChange={this.onChange.bind(this)}
                        ref="editor"
                        />
                </div>

            </div>
        );
    }
}



RcEditor.createValueFromString = function (markup: string){
    return stateFromHTML(markup);
}

export default RcEditor;