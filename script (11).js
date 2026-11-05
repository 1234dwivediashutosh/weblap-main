const qrText = document.getElementById("qr-text");
const imgBox = document.getElementById("img-box");
const qrImage = document.getElementById("qr-img");

function generateQR() {
    // Check if input is empty
    if (qrText.value.trim() === "") {
        qrText.classList.add("error");
        
        // 1 second baad error class hata do taki dobara shake ho sake
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
        return;
    }

    // Free QR API call
    // encodeURIComponent isliye lagaya hai taki agar URL me space ya special char ho toh wo handle ho jaye
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(qrText.value);
    
    // Image container ko show kar do
    imgBox.classList.add("show");
}

// Enter button support
qrText.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generateQR();
    }
});