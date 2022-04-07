# Simple ToDo App
Aplikasi ToDo sederhana yang dikembangkan menggunakan Framework Adonis JS.


## Cara Instalasi
- Berikut merupakan cara instalasi aplikasi ToDo. Setelah clone, jalankan perintah berikut.
```bash
npm install
```
- Copy file .env.example dan kemudian rename file hasil copy menjadi .env

- Sesuaikan koneksi database pada file .env

- Generate App Key menggunakan perintah berikut
```bash
adonis key:generate
```

- Kemudian, apabila belum meng-install MySQL, jalankan perintah berikut.
```bash
npm install mysql --save
```

- Selajutnya jalankan migration dengan perintah berikut.
```bash
adonis migration:run
```

- Jika sudah selesai, jalankan perintah berikut.
```bash
adonis serve --dev
```
- Setelah berhasil dijalankan, buka alamat [http://localhost:3333](http://localhost:3333) pada browser.



## Lisensi
[MIT](https://choosealicense.com/licenses/mit/)