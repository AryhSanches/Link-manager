function toggleMode(onclick) {
    const html = document.documentElement
    html.classList.toggle("light")
  
    //pegar tag img
    const img = document.querySelector("#profile img")
  
    //substituir a imagem
    if (html.classList.contains("light")) {
      // lightmode
      img.setAttribute("src", "./assets/avatar-light.png")
      img.setAttribute("alt", "Imagem flores planta dia")
    } else {
      // darkmode
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute("alt", "Imagem lago pier nuvens noite montanhas")
    }
  }
   