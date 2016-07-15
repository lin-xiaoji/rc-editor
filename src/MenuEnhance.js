import React from 'react';

const Enhance = (ComposedComponent) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuVisible: false };
    }

    toggleMenu() {
        this.setState({
            menuVisible:!this.state.menuVisible
        });
    }
    hideMenu() {
        this.setState({
            menuVisible: false
        });
    }
    componentDidMount() {
        window.addEventListener('mousedown',this.hideMenu.bind(this))
    }
    render() {
        return (
            <div onMouseDown={this.toggleMenu.bind(this)} >
                <ComposedComponent
                    {...this.props}
                    menuVisible={this.state.menuVisible} />
            </div>
        )
    }
};
export default Enhance;