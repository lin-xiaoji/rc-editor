import React from 'react';
import { Editor, EditorState, RichUtils, Entity, CompositeDecorator } from 'draft-js';
import Toolbar from './Toolbar/Toolbar';
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
            dropListVisible: false
        };
        this.onChange = (editorState) => this.setState({editorState});
        this.props.plugins.hello.e();
    }
    static get defaultProps() {
        return {
            prefixCls: 'rc-editor'
        }
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

    toggleInlineStyle(inlineStyle) {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }

    toggleBlockType(blockType) {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
    }

    toggleLink(url) {
        const editorState = this.state.editorState;
        const entityKey = Entity.create('LINK', 'MUTABLE', {url: url});
        this.onChange(RichUtils.toggleLink(
            editorState,
            editorState.getSelection(),
            entityKey
        ));
    }


    rootClick() {
        this.setState({
            dropListVisible: false
        })
    }

    componentDidMount() {
        this.refs.editor.focus();
    }

    render() {
        return (
            <div className={`${this.props.prefixCls}-root`} onMouseDown={this.rootClick.bind(this)}>
                <Toolbar
                    toggleInlineStyle={this.toggleInlineStyle.bind(this)}
                    toggleBlockType={this.toggleBlockType.bind(this)}
                    toggleLink={this.toggleLink.bind(this)}
                    editorState={this.state.editorState}
                    dropListVisible={this.state.dropListVisible}
                    {...this.props}
                    />
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