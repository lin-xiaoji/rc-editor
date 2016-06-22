import React from 'react';
import { Editor, EditorState, RichUtils, Entity, CompositeDecorator } from 'draft-js';
import Toolbar from './Toolbar';
import styleMap from './StyleMap';
import '../assets/index.less'


const Link = (props) => {
    const {url} = Entity.get(props.entityKey).getData();
    return (
        <a href={url}>
            {props.children}
        </a>
    );
};


class RcEditor extends React.Component {
    static get defaultProps() {
        return {
            prefixCls: 'rc-editor',
            lang: 'zh-CN',
            items:['bold','italic','underline','color','strikethrough','bgColor','font','size','head','UnorderedList','OrderedList']
        }
    }

    constructor(props) {
        super(props);
        const decorator = new CompositeDecorator([
            {
                strategy: this._findLinkEntities,
                component: Link,
            },
        ]);

        this.state = {
            editorState: EditorState.createEmpty(decorator),
            menuVisible: false
        };
        this.onChange = (editorState) => this.setState({editorState});

    }


    _findLinkEntities(contentBlock, callback) {
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
        const entityKey = Entity.create('LINK', 'MUTABLE', {url: url});
        this.onChange(RichUtils.toggleLink(
            editorState,
            editorState.getSelection(),
            entityKey
        ));
    }


    //隐藏下拉菜单
    rootClick() {
        this.setState({
            menuVisible: false
        })
    }

    componentDidMount() {
        //this.refs.editor.focus();
        //this.props.plugins.hello.click(this);
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
            <div className={`${this.props.prefixCls}-root`} onMouseDown={this.rootClick.bind(this)}>
                <Toolbar
                    toggleInlineStyle={this.toggleInlineStyle.bind(this)}
                    toggleBlockType={this.toggleBlockType.bind(this)}
                    toggleLink={this.toggleLink.bind(this)}
                    currentStyle={currentStyle}
                    blockType={blockType}
                    menuVisible={this.state.menuVisible}
                    {...this.props}
                    />
                <div className="clear" />
                <Editor
                    customStyleMap={styleMap}
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    ref="editor"
                    />
            </div>
        );
    }
}



export default RcEditor;