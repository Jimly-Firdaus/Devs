var mathFieldSpan = document.getElementById('math-field');
var MQ = MathQuill.getInterface(2);
var mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true,
    handlers: {
        edit: function() {
        mathField.focus();
        document.getElementById('result').innerHTML = mathField.latex();
        },
        // backspace: function() {
        //     var currentVal = mathField.latex().slice(0, -1);
        //     mathField.latex() = currentVal;
        // }
    }
});
const input = (str) => {
    mathField.cmd(str);
    mathField.focus();
}

const inputSquare = () => {
    mathField.cmd('^');
    mathField.cmd('2');
    mathField.focus();
}

const backspace = () => {
    var backspace = $.Event('keydown');
    backspace.bubbles = false;
    backspace.cancelable = false;
    backspace.charCode = 8;
    backspace.keyCode = 8;
    backspace.which = 8;

    $('#math-field').find('textarea').trigger(backspace);
    $('#math-field').find('textarea').focus();
}

const toggleKeyboard = () => {
    let keyboard = document.getElementById('keyboard-wrapper');
    if (keyboard.style.display === "none") {
        // keyboard.classList.remove('in-active');
        keyboard.style.display = "flex";
    } else {
        // keyboard.classList.add('in-active');
        keyboard.style.display = "none";
    }
}