var Image = {
    init: function (title, thumbnailUrl, largeUrl) {
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.largeUrl = largeUrl;
    }
};

var Slider = {
    init: function (images, selector, prevBtn, nextBtn) {
        this.holder = document.querySelector(selector);
        this.images = images;
        this.setOfImages = this.createImages();
        this.prevBtn = prevBtn.currentBtn;
        this.nextBtn = nextBtn.currentBtn;
    },
    createImages: function () {
        var setOfImgs = [];
        var bigImageContainer = this.holder;

        for (var i = 0, len = this.images.length; i < len; i++) {
            var newImage = document.createElement("img");
            newImage.alt = this.images[i].title + "";
            newImage.src = this.images[i].thumbnailUrl + "";
            newImage.srcLarge = this.images[i].largeUrl + "";
            newImage.onclick = function (ev) {
                var imageToEnlarge = (ev.target).cloneNode();
                imageToEnlarge.src = ev.target.srcLarge;

                if (bigImageContainer.firstChild) {
                    bigImageContainer.removeChild(bigImageContainer.firstChild);
                }
                bigImageContainer.appendChild(imageToEnlarge);
            }

            setOfImgs[i] = newImage;
        }
        return setOfImgs;
    },
    imgInit: function (selector) {
        var container = document.querySelector(selector);
        var currentSeOfImages = this.setOfImages;
        var prev = this.prevBtn;
        var next = this.nextBtn;
        this.prevBtn = this.attatchShowPrevious(container, prev, currentSeOfImages);
        this.nextBtn = this.attatchShowNext(container, next, currentSeOfImages);

        for (var i = 0, len = this.setOfImages.length; i < len; i++) {
            if (i >= 3) {
                this.setOfImages[i].style.display = "none";
            }
            container.appendChild(this.setOfImages[i]);
        }

        var firstImage = (this.setOfImages[0]).cloneNode();
        firstImage.src = this.images[0].largeUrl;
        this.holder.appendChild(firstImage);
    },
    attatchShowPrevious: function (container, btn, currentSetOfImages) {
        var btn = btn;
        var container = container;
        var currentSetOfImages = currentSetOfImages;
        btn.onclick = function () {
            var counterMiddleImg = 0;
            var middleImg;
            var middleImgPosition;
            for (var i = 0, len = currentSetOfImages.length; i < len; i++) {
                if(currentSetOfImages[i].style.display !== "none"){
                    counterMiddleImg++;
                    if (counterMiddleImg === 2) {
                        middleImg = currentSetOfImages[i];
                        middleImgPosition = i;
                    }
                }
            }
            if (middleImgPosition > 1) {
                currentSetOfImages[middleImgPosition - 2].style.display = "";
                currentSetOfImages[middleImgPosition + 1].style.display = "none";
            }
        };
        return btn;
    },
    attatchShowNext: function (container, btn, currentSetOfImages) {
        var btn = btn;
        var container = container;
        var currentSetOfImages = currentSetOfImages;
        btn.onclick = function () {
            var counterMiddleImg = 0;
            var middleImg;
            var middleImgPosition;
            for (var i = 0, len = currentSetOfImages.length; i < len; i++) {
                if (currentSetOfImages[i].style.display !== "none") {
                    counterMiddleImg++;
                    if (counterMiddleImg === 2) {
                        middleImg = currentSetOfImages[i];
                        middleImgPosition = i;
                    }
                }
            }
            if (middleImgPosition < currentSetOfImages.length - 2) {
                currentSetOfImages[middleImgPosition - 1].style.display = "none";
                currentSetOfImages[middleImgPosition + 2].style.display = "";
            }
        };
        return btn;
    }
};

var Button = {
    init: function (selector, direction) {
        this.btnHTMLElement = document.querySelector(selector);
        this.direction = direction;
        this.currentBtn = this.attatchToDom();
    },
    attatchToDom: function () {
        var btn = document.createElement("a");
        btn.href = "#";
        btn.style.padding = 5 + "px";
        if (this.direction === "prev") {
            btn.innerHTML = "Prev";
        }
        else {
            btn.innerHTML = "Next";
        }

        this.btnHTMLElement.appendChild(btn);
        return btn;
    }
};