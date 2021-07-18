let time = 1000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.lenght;
    function nextImage(){
        images[currentImageIndex]
            .classList.remove("selected")

        currentImageIndex++

        if(currentImageIndex >= max)
            currentImageIndex = 0

        images[currentImageIndex]
            .classList.add("selected")
    }
    function start(){
        setInterval(() => {},time)
    }
    window.addEventListener("load", start)