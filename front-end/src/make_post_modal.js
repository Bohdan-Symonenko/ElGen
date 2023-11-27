

document.addEventListener("DOMContentLoaded", function()
{
    var openModalButton = document.getElementById("add_a_new_post_button");
    var modal = document.getElementById("modal");
    var closeButton = document.getElementById("close-button");
    var sidebox = document.querySelector(".sidebox");
    var overlay = document.getElementById("overlay"); // Получаем элемент overlay
    var image_container = document.getElementById("image-container");


    openModalButton.onclick = function() {
        modal.style.display = "block";
        sidebox.style.display = "none";
        overlay.style.display = "block";
        image_container.style.display = "none";
    }

    closeButton.onclick = function() {
        modal.style.display = "none";
        sidebox.style.display = "block";
        overlay.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }



    var modalImg4 = document.getElementById("modal_img4");
    var modal2 = document.getElementById("modal2");
    var closeButton2 = document.getElementById("close-button2");
    var saveButton = document.getElementById("modal2_save_button");

    modalImg4.onclick = function() {
        modal2.style.display = "block";
    }

    closeButton2.onclick = function() {
        modal2.style.display = "none";
    }
    saveButton.onclick = function() {
        modal2.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal2) {
            modal2.style.display = "none";
        }
    }


    const hashtagDiv = document.getElementById("modal2_hashtag1");

// Проверка наличия элемента и добавление обработчика события
    if (hashtagDiv) {
        hashtagDiv.onclick = function(event) {
            // Получаем текущий цвет фона элемента
            const currentColor = window.getComputedStyle(hashtagDiv).backgroundColor;

            // Проверяем текущий цвет и изменяем его
            if (currentColor === "rgb(72, 72, 78)") {
                hashtagDiv.style.backgroundColor = "#6d9af2"; // Изменяем цвет на желаемый
            } else {
                hashtagDiv.style.backgroundColor = "#48484e"; // Изменяем цвет на другой желаемый
            }
        };
    } else {
        console.error('Element with id "hashtagDiv" not found');
    }





});

document.getElementById("modal_img3").addEventListener("click", function()
{

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", function(event) {
        const selectedFile = event.target.files[0];
        const imageContainer = document.getElementById("image-container");
        const selectedImage = document.getElementById("selected-image");
        imageContainer.style.display = "none";



        if (selectedFile)
        {
            // Устанавливаем выбранное изображение в атрибут src элемента <img>
            selectedImage.src = URL.createObjectURL(selectedFile);


            selectedImage.style.maxHeight = "100%";
            selectedImage.style.maxWidth = "100%";

            imageContainer.style.display = "block";

        } else {
            console.log("Файл не выбран");
        }
    });

    fileInput.click();
});
