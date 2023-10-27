# Backend komikYasha

Repositori ini adalah dokumentasi untuk backend server restful API komikYasha. Berikut list stack yang digunakan :
- NodeJS 18.18.2
- NPM 9.8.1
- Express 4.18.2
- Mysql2 3.6.2
- Nodemon 3.0.1
- dotenv 16.3.1

## Cara Deploy ke GCP Compute Engine

Pertama adalah membuat VM dengan batas free tier. Untuk tutorial dapat dilihat pada link berikut [ini](https://cloud.google.com/free/docs/gcp-free-tier/#compute).
Lalu jangan lupa konfigurasi VM yang telah di buat. Gunakan VM melalui koneksi SSH yang ada disamping nama VM.
### 1. Cek apakah git sudah terpasang dengan
```
git --version
```
Jika belum terpasang maka install git terlebih dahulu.
```
sudo apt-get install git
```

### 2. Clone remote repository ke VM.
Salin terlebih dahulu link https dari repositori github ini. Lalu masukan code ini ke dalam VM.
```
git clone https://github.com/YashaCamael/komik.git
```
Untuk memastikan apakah sudah berjalan, gunakan perintah:
```
ls
```
Untuk melihat apakah folder **komik** sudah dibuat. Setelah terlihat nama folder **komik**, masuk kedalam folder dengan code ini
```
cd komik
```
Kemudian kita bisa menggunakan perintah _ls_ Lagi untuk melihat isi folder **komik**.

