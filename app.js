let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

img1.onclick = changeImage
img2.onclick = changeImage
img3.onclick = changeImage

const arr = ['cat.jpg', 'k.jpg', 'm.jpg'];

function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let count = random(1,3)

function changeImage() {
    console.log(count)
        if (count == this.value) {
            console.log('111')
            this.setAttribute('src', arr[2]);
            window.setTimeout(() => {
                location.reload()},3000)
        } 
        else { 
            this.setAttribute('src', arr[1])
            window.setTimeout(() => {
                this.setAttribute('src', arr[0])},1000)
        } 
}

