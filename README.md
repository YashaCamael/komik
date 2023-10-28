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

### 3. Instal MySQL on Ubuntu 20.04
Pada tahap ini VM akan diinstal mysql. Untuk tutorialnya dapat dilihat di link [ini](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04).
Prequisetes:
- One Ubuntu 20.04 server with a non-root administrative user and a firewall configured with UFW.
Untuk menginstal mysql, pertama update terlebih dahulu package yang ada lalu install mysql
```
sudo apt update
sudo apt install mysql-server
```
Pastikan mysql service sudah berjalan dengan code ini
```
sudo systemctl start mysql.service
```
Setelah itu masuk ke mysql terlebih dahulu
```
sudo mysql
```
lalu masukan kode ini
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
setelah selesai exit dari mysql
```
exit
```
setelah itu instal secure installation
```
sudo mysql_secure_installation
```
Berikut hasil output dari code diatas
```
Output
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No: Y

There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG:
 2
```
Setelah itu akan diminta untuk memasukkan passwor baru untuk roor user, dan tekan Y untuk perintah selanjutnya.
Kemudian kembali masuk ke mysql dengan password yang sudah dibuat
```
mysql -u root -p
```
masukkan password lalu masukan kode ini setelah masuk ke mysql
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;
```
dengan ini kita bisa masuk ke mysql dengan perintah
```
sudo mysql
```
### 4. Instal Nvm dan Node
instal nvm dengan code ini
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
atau
```
sudo apt install npm
```
setelah terinstall nvm maka kita bisa instal versi node Js yang diinginkan
```
nvm install 18.18.2
```
dengan ini node sudah terinstal, bisa di cek dengan
```
node -v
```
lalu masuk ke folder komik, dan lakukan npm install untuk menginstall semua dependency yg ada di dalam github komik.
```
npm install
```
dan nyalakan program dengan
```
npm run start
```
