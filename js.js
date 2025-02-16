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
    case "home":window.location.href = './html.html';
        break;
}
}
/*document.getElementById("boxImage").addEventListener("click", function() {
    let img = this;
    console.log("圖片被點擊！");
    img.classList.add("shake");
    setTimeout(() => { 
        img.classList.remove("shake"); 
    }, 5000);

});*/
document.addEventListener("DOMContentLoaded", function() {
    // 確保圖片元素已經加載完畢
    const boxImage = document.getElementById("boxImage");

    // 如果圖片存在，則綁定點擊事件
    if (boxImage) {
        boxImage.addEventListener("click", function() {
            
            this.classList.add("shake");

            // 動畫結束後，移除 .shake 類別，這樣下次可以再次觸發動畫
            setTimeout(() => {
                this.classList.remove("shake");
            }, 5000); // 動畫時間 500 毫秒
        });
    } else {
        console.log("圖片元素未找到！");
    }
});
