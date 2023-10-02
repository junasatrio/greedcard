function addData() {
        // Mengambil nilai input dari form
        var projectName = document.getElementById("project-name").value;
        var startDate = document.getElementById("start").value;
        var endDate = document.getElementById("end").value;
        var description = document.getElementById("description").value;
        var selectedTechnology = document.querySelector('input[name="tech"]:checked').value;
        var fileInput = document.getElementById("gambar");
        var selectedFile = fileInput.files[0];

        var card = document.createElement("div");
            card.classList.add("card");
            
            // Membuat konten card
        var cardContent = document.createElement("div");
            cardContent.classList.add("card-content");
            
            // Menambahkan data ke dalam konten card
            cardContent.innerHTML = `
                <h2>${projectName}</h2>
                <img src="" alt="Project Image" id="project-image">
                <p>Start Date: ${startDate}</p>
                <p>End Date: ${endDate}</p>
                <p>Description: ${description}</p>
                <p>Technology: ${selectedTechnology}</p>
            `;
            
            // membuat konten card ke dalam card
            card.appendChild(cardContent);
            
            // membuat card ke dalam tampilan card 
        var cardContainer = document.querySelector(".card-container");
            cardContainer.appendChild(card);

            var projectImage = card.querySelector("#project-image");

    if (selectedFile) {
    //   membuat objek file yang di upload
        var imageURL = URL.createObjectURL(selectedFile);

        // mengatur elemen gambar
        projectImage.src = imageURL;
    }
}
