import { sizeArr,colorArr } from './Constants'
//菜单栏激活状态
let toolbarItemActive = function (type,currentStyle,blockType) {
	//字体
	let styleActive = false;
	if(type == 'font-family') {
		styleActive =
			currentStyle.has('FONT-SONG') ||
			currentStyle.has('FONT-KAI') ||
			currentStyle.has('FONT-HEI') ||
			currentStyle.has('FONT-YAHEI') ||
			currentStyle.has('FONT-ARIAL')
	}
	//文字大小
	if(type == 'font-size') {
		for(let item of sizeArr) {
			if(currentStyle.has('SIZE-'+item)) {
				styleActive = true;
				break;
			}
		}
	}
	//文字颜色
	if(type == 'pencil') {
		for(let item of colorArr) {
			if(currentStyle.has('COLOR-'+item)) {
				styleActive = true;
				break;
			}
		}
	}
	//背景颜色
	if(type == 'brush') {
		for(let item of colorArr) {
			if(currentStyle.has('BGCOLOR-'+item)) {
				styleActive = true;
				break;
			}
		}
	}
	//block激活状态
	let blockActive = false;
	let blockArr = [];
	if (type == 'header') {
		blockArr = ['header-one','header-two','header-three','header-four'];
	}
	if (type == 'list-bullet') {
		blockArr = ['unordered-list-item'];
	}
	if (type == 'list-numbered') {
		blockArr = ['ordered-list-item'];
	}
	if(inArray(blockType,blockArr)){
		blockActive = true;
	}
console.log(type);
	return styleActive || blockActive || currentStyle.has(type.toUpperCase());
};


/*
判断字符串是否在一个数组中
 */
let inArray = function(stringToSearch, arrayToSearch) {
	for (let s = 0; s < arrayToSearch.length; s++) {
		let thisEntry = arrayToSearch[s].toString();
		if (thisEntry == stringToSearch) {
			return true;
		}
	}
	return false;
};


export { inArray, toolbarItemActive }