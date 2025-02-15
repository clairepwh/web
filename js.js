function kind(number)
{
let a = number;

switch(a){
    case "Chinese":window.location.href = './Chinese style.html';
        break;
    case "Japanese":window.location.href = './Japanese style.html';
        break;
    case "Korean":window.location.href = './Korean style.html';
        break;
    case "Western":window.location.href = './Western.html';
        break;
}
}