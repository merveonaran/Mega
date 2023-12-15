   //https://source.unsplash.com/random/300×300

/*
  var resimler = document.getElementsByTagName("src")
  resimler[0]=path;


*/




var resimler = document.getElementsByTagName("img");


document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    for (let i = 0; i <= 15; i++) {
        // Her resim için farklı bir random sayı kullanılıyor
        const randomValue = Math.random();
        
        fetch(`https://source.unsplash.com/random/300x300?random=${randomValue}`)
            .then(response => response.url)
            .then(imageUrl => {
                
                resimler[i].src = imageUrl;
                resimler[i].alt = `Açıklama ${i}`;

            })
            .catch(error => console.error("Veri alınamadı:", error));
    }
});
