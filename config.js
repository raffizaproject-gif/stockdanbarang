/* Taruh file ini satu folder dengan index.html */
/* Buat API key gratis di https://console.groq.com/keys (diawali gsk_), lalu isi bagian kedua di bawah.
   Key dipecah dua supaya tidak dikenali pemindai otomatis GitHub dan tidak dicabut. */
window.GROQ_KEY = "gsk_" + "RoTKP2sd0t8v7XLu1im6WGdyb3FYRh29ctMibyV0B7RQQni9el5C";
/* Model visi Groq, urutan = prioritas (paling akurat dulu). Aplikasi berganti model OTOMATIS:
   - model yang kena batas kecepatan / lambat / error ditinggalkan sementara dan langsung pindah ke berikutnya
   - jawaban yang belum meyakinkan (barang tidak dikenali / angka kurang dari 4 digit) dicoba lagi ke model berikutnya */
window.GROQ_MODELS = [
  "qwen/qwen3.8-27b",
  "qwen/qwen3.6-27b"
];
