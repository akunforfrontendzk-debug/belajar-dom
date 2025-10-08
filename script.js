let judul = document.getElementById("judul");
let pesan = document.getElementById("pesan");
let tombol = document.getElementById("tombolUbah");

judul.textContent = "Halo kamu";
pesan.textContent = "minta maaf g!!!";
tombol.addEventListener("click", function() {
    judul.textContent = "Kamu kontol 💪";
    pesan.textContent = "well ✨";
});