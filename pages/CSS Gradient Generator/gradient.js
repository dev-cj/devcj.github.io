function colorGradient() {

    var randomColor_1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    var randomColor_2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    var cssCode = "linear-gradient(" + "to " + "left, " + randomColor_1 + ", " + randomColor_2 + ")";

    document.querySelector('.color-section').style.background = cssCode;
    document.querySelector('.css-code').innerText = cssCode;
}
document.onload = colorGradient();


function copyToClipboard() {
    var textarea = document.createElement('textarea');
    textarea.id = 'text';
    textarea.style.height = 0;
    document.body.appendChild(textarea);
    textarea.value = document.querySelector('.css-code').innerText;
    
    var selector = document.querySelector('#text');
    selector.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
