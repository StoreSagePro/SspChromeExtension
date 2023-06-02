window.addEventListener("load", function() {
    // Sayfanın boyutunu alın
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
  
    // Sayfayı 5'e bölerken kullanılacak genişlik ve yükseklik hesaplamaları
    var columnWidth = pageWidth / 5;
    var columnHeight = pageHeight;
  
    // Sayfayı kapatmak için yeni bir <div> öğesi oluşturun
    var overlayDiv = document.createElement("div");
    overlayDiv.id = "overlay-div";
  
    // <div> öğesine gerekli CSS stillemelerini uygulayın
    overlayDiv.style.position = "fixed";
    overlayDiv.style.top = "0";
    overlayDiv.style.right = "0";
    overlayDiv.style.width = columnWidth + "px";
    overlayDiv.style.height = columnHeight + "px";
    overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  
    // Sayfaya <div> öğesini ekleyin
    document.body.appendChild(overlayDiv);
  });
  