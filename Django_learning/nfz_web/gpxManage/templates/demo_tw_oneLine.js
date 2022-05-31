var div_pigeonsRank = document.createElement("pigeonsRank");
//set style
// div_pigeonsRank.style.position = 'relative';
div_pigeonsRank.style.backgroundColor = 'white';
// div_pigeonsRank.style.opacity = "0.5";
div_pigeonsRank.style.position = 'absolute';
div_pigeonsRank.style.bottom = '60%';
div_pigeonsRank.style.right = 10 + 'px';
div_pigeonsRank.style.height = '6%';
div_pigeonsRank.style['border-radius'] = 2 / 4 + 'em';
div_pigeonsRank.style['width'] = '15%';
div_pigeonsRank.style.color = 'black';
div_pigeonsRank.style['text-align'] = 'center';
// div_pigeonsRank.style.right = document.body.width+'px';
div_pigeonsRank.innerHTML = '<span style="font-size:200%">' + 'pigeons rank' + '</span> ';
document.body.appendChild(div_pigeonsRank);