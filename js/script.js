
function lineHeightOver(){
    lineHeight1("26px");
    lineHeight2("23px");
}

function lineHeightOut(){
    lineHeight1("22px");
    lineHeight2("19px");
}

function characterSpacingOver(){
    characterSpacing1("-0.3px");
    characterSpacing2("-0.2px");
    characterSpacing3("-0.3px");
    characterSpacing4("-0.2px");
}

function characterSpacingOut(){
    characterSpacing1("0.5px");
    characterSpacing2("0.2px");
    characterSpacing3("0.2px");
    characterSpacing4("0.1px");
}

function lineHeight1(value) {
    document.getElementById('subheading').style.lineHeight = value;
    document.getElementById('subheading').style.transition= "all 0.2s";
    document.getElementById('subheading').style.transitionTimingFunction="ease-in-out"
}   

function characterSpacing1(value){
    document.getElementById('subheading').style.letterSpacing = value;
    document.getElementById('subheading').style.transition = "all 0.2s";
    document.getElementById('subheading').style.transitionTimingFunction="ease-in-out"
}

function lineHeight2(value) {
    document.getElementById('character-spacing-subheading').style.lineHeight = value;
    document.getElementById('character-spacing-subheading').style.transition= "all 0.2s";
    document.getElementById('character-spacing-subheading').style.transitionTimingFunction="ease-in-out"
    document.getElementById('smart-type-subheading').style.lineHeight = value;
    document.getElementById('smart-type-subheading').style.transition= "all 0.2s";
    document.getElementById('smart-type-subheading').style.transitionTimingFunction="ease-in-out"
    document.getElementById('line-height-subheading').style.lineHeight = value;
    document.getElementById('line-height-subheading').style.transition= "all 0.2s";
    document.getElementById('line-height-subheading').style.transitionTimingFunction="ease-in-out"
}   

function characterSpacing2(value){
    document.getElementById('character-spacing-subheading').style.letterSpacing = value;
    document.getElementById('character-spacing-subheading').style.transition = "all 0.2s";
    document.getElementById('character-spacing-subheading').style.transitionTimingFunction="ease-in-out"
    document.getElementById('smart-type-subheading').style.letterSpacing = value;
    document.getElementById('smart-type-subheading').style.transition = "all 0.2s";
    document.getElementById('smart-type-subheading').style.transitionTimingFunction="ease-in-out"
    document.getElementById('line-height-subheading').style.letterSpacing = value;
    document.getElementById('line-height-subheading').style.transition = "all 0.2s";
    document.getElementById('line-height-subheading').style.transitionTimingFunction="ease-in-out"
}

function characterSpacing3(value){
    document.getElementById('character-spacing-heading').style.letterSpacing = value;
    document.getElementById('character-spacing-heading').style.transition = "all 0.2s";
    document.getElementById('character-spacing-heading').style.transitionTimingFunction="ease-in-out"
    document.getElementById('smart-type-heading').style.letterSpacing = value;
    document.getElementById('smart-type-heading').style.transition = "all 0.2s";
    document.getElementById('smart-type-heading').style.transitionTimingFunction="ease-in-out"
    document.getElementById('line-height-heading').style.letterSpacing = value;
    document.getElementById('line-height-heading').style.transition = "all 0.2s";
    document.getElementById('line-height-heading').style.transitionTimingFunction="ease-in-out"
}
function characterSpacing4(value){
    document.getElementById('character-spacing-command').style.letterSpacing = value;
    document.getElementById('character-spacing-command').style.transition = "all 0.2s";
    document.getElementById('character-spacing-command').style.transitionTimingFunction="ease-in-out"
    document.getElementById('smart-type-command').style.letterSpacing = value;
    document.getElementById('smart-type-command').style.transition = "all 0.2s";
    document.getElementById('smart-type-command').style.transitionTimingFunction="ease-in-out"
    document.getElementById('line-height-command').style.letterSpacing = value;
    document.getElementById('line-height-command').style.transition = "all 0.2s";
    document.getElementById('line-height-command').style.transitionTimingFunction="ease-in-out"
}