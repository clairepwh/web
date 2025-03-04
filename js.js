let Crestaurants = [];
let Jrestaurants = [];
let Krestaurants = [];
let Wrestaurants = [];
function kind(number) {
    let a = number;

    switch(a){
        case "Chinese":
        case "中式":window.location.href = './Chinese style.html';
            break;
        case "Japanese":
        case "日式":window.location.href = './Japanese style.html';
            break;
        case "Korean":
        case "韓式":window.location.href = './Korean style.html';
            break;
        case "Western":
        case "西式":window.location.href = './Western style.html';
            break;
        case "home":window.location.href = './html.html';
            break;
    }
}

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

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.js-scroll-list')) {
        let Scrollbar = window.Scrollbar;
        Scrollbar.use(window.OverscrollPlugin);

        let customScroll = Scrollbar.init(document.querySelector('.js-scroll-list'), {
            damping: 0.07, // Smoother slow scrolling
            plugins: { overscroll: true }
        });

        let listItems = document.querySelectorAll('.js-scroll-list-item');

        if (listItems.length > 0) {
            listItems[0].classList.add('item-focus');
            if (listItems[1]) listItems[1].classList.add('item-next');

            customScroll.addListener(({ offset }) => {
                let top = offset.y;
                let viewportHeight = window.innerHeight;
                let threshold = viewportHeight * 0.5; // Adjusts when items appear/disappear

                listItems.forEach((item, index) => {
                    let itemRect = item.getBoundingClientRect();
                    let itemTop = itemRect.top;
                    let itemBottom = itemRect.bottom;

                    if (itemBottom > threshold / 1.5 && itemTop < viewportHeight - threshold / 1.5) {
                        item.classList.add('item-focus');
                    } else {
                        item.classList.remove('item-focus');
                    }

                    // Ensure previous & next item stays visible longer with a smooth transition
                    if (index > 0 && index < listItems.length - 1) {
                        listItems[index - 1].classList.add('item-next');
                        listItems[index + 1].classList.add('item-next');
                    }

                    // Delay the disappearance of previous items slightly
                    if (itemTop < threshold / 3) {
                        item.classList.add('item-hide');
                    } else {
                        item.classList.remove('item-hide');
                    }
                });
            });
        }
    }
});
