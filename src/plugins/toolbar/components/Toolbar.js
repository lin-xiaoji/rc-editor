import React,{Component} from 'react';


class Toolbar extends Component {

    lang = require('../../../lang/'+this.props.lang);
    constructor(props){
        super(props);
    }

    handleCommand(e){
        e.preventDefault();
        e.stopPropagation();
    }

    getComponet(pluginName) {
        let plugins = this.props.plugins;
        for(let plugin of plugins) {
            if (plugin.name.toLowerCase() == pluginName.toLowerCase()) {
                return plugin.component;
            }
        }
        return false;
    }

    render() {
        const items = this.props.toolbars;
        const toolbar = items.map((item,i) => {
            let Component = this.getComponet(item);
            if(Component) {
                return <Component
                    prefixCls={this.props.prefixCls}
                    title={this.lang[item]}
                    setEditorState={this.props.setEditorState}
                    getEditorState={this.props.getEditorState}
                    currentStyle={this.props.currentStyle}
                    blockType={this.props.blockType}
                    key={i}
                    />;
            }

        });
        return (
            <div className={`${this.props.prefixCls}-toolbar-container`} onMouseDown={this.handleCommand.bind(this)}>
                {toolbar}
            </div>
        )
    }
}

export default Toolbar;