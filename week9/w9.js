function showBrowserInfo(){
    document.getElementById('display1').innerHTML = window.navigator.userAgent;
}
function showPageURL(){
    document.getElementById('display2').innerHTML = window.location.href;
}
var x = 0;
function goHistory(x){
    window.history.go(x);
}