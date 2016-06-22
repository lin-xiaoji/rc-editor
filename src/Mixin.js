const Mixin = {
	//点击其它位置隐藏菜单
	componentWillReceiveProps(nextProps) {
		this.setState({
			menuVisible: nextProps.menuVisible
		});
	},
	toggleMenu() {
		this.setState({
			menuVisible:!this.state.menuVisible
		});
	},
	getInitialState() {
		return {
			menuVisible:false
		}
	},
};
export default Mixin;