const plugins = [
    {
        name:'bold',
        click:function(editor) {
            editor.toggleInlineStyle('BOLD');
        }
    },
    {
        name:'underline',
        click:function(editor) {
            editor.toggleInlineStyle('UNDERLINE');
        }
    },
    {
        name:'italic',
        click:function(editor) {
            editor.toggleInlineStyle('ITALIC');
        }
    },
    {
        name:'strikethrough',
        click:function(editor) {
            editor.toggleInlineStyle('STRIKETHROUGH');
        }
    },
];

module.exports = plugins;