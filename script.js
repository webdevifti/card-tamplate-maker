const title = document.getElementById('title');
const titleFontFamily = document.getElementById('titleFontFamily');
const titleFontSize = document.getElementById('titleFontSize');
const content = document.getElementById('content');
const contentFontFamily = document.getElementById('contentFontFamily');
const contentFontSize = document.getElementById('contentFontSize');
const cardBG = document.getElementById('cardBG');
const mainCard = document.getElementById('mainCard');
const cardTitle = document.getElementById('cardTitle');
const cardContent = document.getElementById('cardContent');


function getTitle(value){
    cardTitle.innerHTML = value;
}
function getTitleColor(value){
    cardTitle.style.color = value;
}
function getTittleFontFamily(value){
    cardTitle.style.fontFamily = value;
}
function getTitleFontSize(value){
    cardTitle.style.fontSize = value + 'px';
}
function getContent(value){
    cardContent.innerHTML = value;
}
function getContentTextColor(value){
    cardContent.style.color = value;
}
function getContentFontFamily(value){
    cardContent.style.fontFamily = value;
}
function getContentFontSize(value){
    cardContent.style.fontSize = value + 'px';
}
function getCardBG(value){
    mainCard.style.backgroundColor = value;
}