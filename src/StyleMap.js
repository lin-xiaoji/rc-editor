import {colorArr,sizeArr} from './Constants'

let styleMap = {
    'BRUSH': {
        'backgroundColor': 'red'
    },
    'FONT-SONG': {
        'fontFamily': '宋体'
    },
    'FONT-HEI': {
        'fontFamily': '黑体'
    },
    'FONT-KAI': {
        'fontFamily': '楷体'
    },
    'FONT-YAHEI': {
        'fontFamily': '微软雅黑'
    },
    'FONT-Arial': {
        'fontFamily': 'Arial'
    }
};

//文字大小
sizeArr.map((item) => styleMap['SIZE-'+item] = {'fontSize': item+'px'});

//文字颜色
colorArr.map((item) => styleMap['COLOR-'+item] = {'color': '#'+item});
//背景颜色
colorArr.map((item) => {
    styleMap['BGCOLOR-'+item] = {'backgroundColor': '#'+item}
});

module.exports = styleMap;