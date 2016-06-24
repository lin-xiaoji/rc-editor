const Mixin = {
	getInitialState() {
		return {
			menuVisible:false
		}
	},
	toggleMenu() {
		this.setState({
			menuVisible:!this.state.menuVisible
		});
	},
	hideMenu() {
		this.setState({
			menuVisible: false
		});
	},
	componentDidMount() {
		window.addEventListener('mousedown',this.hideMenu)
	},

};
export default Mixin;