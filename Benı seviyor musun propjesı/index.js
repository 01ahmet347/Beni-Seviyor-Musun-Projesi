document.getElementById('noButton').addEventListener('mouseover', function() {
    // HayÄ±r butonu Ã¼zerine gelindiÄŸinde rastgele konumlandÄ±rma
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = "absolute";
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    // Evet butonuna tÄ±klandÄ±ÄŸÄ±nda ana iÃ§erik gizlenir
    document.getElementById('container').style.display = 'none';

    // Yuupii yazÄ±sÄ± ve yeni gÃ¶rsel gÃ¶sterilir
    const result = document.getElementById('result');
    result.classList.remove('hidden');
    result.querySelector('#newImage').src = 'indir.gif';

    // Kalpleri ekleyelim
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

function createHeart() {
    // Kalp elementi oluÅŸtur
    const heart = document.createElement("i");
    heart.className = "fas fa-heart";
    heart.style.position = "absolute";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    
    // Kalp elementini ekleyelim
    document.getElementById('result').appendChild(heart);

    // Kalp sayÄ±sÄ±nÄ± kontrol edelim ve gerekiyorsa kalpleri temizleyelim
    const heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 200) {
        heartArr[0].remove();
    }
}

// Kalp oluÅŸturma fonksiyonunu belirli bir aralÄ±kta Ã§aÄŸÄ±ralÄ±m
setInterval(createHeart, 100);