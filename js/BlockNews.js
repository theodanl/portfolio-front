var news = [
    {
      image: "./img/slider1.svg",
    },
    {
      image: "./img/slider2.svg",
    },
    {
      image: "./img/slider3.svg",
    }
  ];
  
  var currentNewsIndex = 0;
  
  function updateNews() {
    var newsBlock = document.querySelector(".slider__matches");
    var newsImage = newsBlock.querySelector(".order_img");
    var currentNews = news[currentNewsIndex];
    newsImage.src = currentNews.image;
    newsBlock.classList.add("visible");
  }
  
  function rotateNews() {
    currentNewsIndex++;
    if (currentNewsIndex >= news.length) {
      currentNewsIndex = 0;
    }
  
    gsap.fromTo(
      ".slider__matches",
      { opacity: 0},
      { opacity: 1, duration: 0. }
    );
  
    updateNews();
  }
  // блок с перезагрузки
  updateNews();
  // время между картинками массива
  setInterval(rotateNews, 10000);