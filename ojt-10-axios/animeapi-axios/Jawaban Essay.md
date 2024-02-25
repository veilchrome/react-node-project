## SOAL ESSAY

### 1. Sebutkan dan Jelaskan HTTP Request yang anda Ketahui!

#### Jawab :

> > > GET app.get() Method GET biasanya digunakan hanya mengambil data.
> > > POST app.post() Method POST digunakan untuk mengirimkan entitas ke server yang ditentukan, sering menyebabkan perubahan pada keadaan atau efek samping pada server.
> > > PUT app.put() Method PUT menggantikan data yang ada dengan data yang dikirimkan.
> > > DELETE app.delete() Method DELETE untuk menghapus data yang ada.

### 2. Apa perbedaan dari Axios dan Fetch!

#### Jawab :

> > >     Sintaksis Dasar:

        Axios menggunakan properti data untuk mengirim data, sedangkan Fetch menggunakan properti body.
        URL dalam Axios disetel di objek opsi, sedangkan dalam Fetch URL diteruskan sebagai argumen.

    Backward Compatibility:
        Axios mendukung browser yang lebih luas, termasuk IE11, sementara Fetch hanya didukung oleh browser modern seperti Chrome 42+, Firefox 39+, Edge 14+, dan Safari 10.1+.
        Untuk mendukung browser yang tidak mendukung Fetch, Anda perlu menggunakan polyfill seperti whatwg-fetch.

    Timeout dalam Respon:
        Axios menyediakan opsi timeout yang mudah untuk menyetel waktu tunggu sebelum permintaan dibatalkan, sedangkan dalam Fetch, Anda perlu menggunakan AbortController dan mengatur timeout secara manual.

    Transformasi Otomatis Data JSON:
        Axios secara otomatis merangkai data sebagai JSON, sementara dalam Fetch, Anda harus melakukannya secara manual dengan memanggil metode .json() pada objek respons.

    Interceptor HTTP:
        Axios memungkinkan mencegat permintaan HTTP dengan mudah melalui interceptor, sementara Fetch tidak memiliki fitur ini secara bawaan.

    Indikator Kemajuan (Progress Indicator):
        Fetch menyediakan instance ReadableStream untuk mengakses kemajuan unduhan, sedangkan Axios menyediakan modul khusus, seperti Axios Progress Bar, untuk implementasi indikator kemajuan.

    Permintaan Bersamaan (Simultaneous Requests):
        Axios menyediakan metode axios.all() untuk membuat permintaan bersamaan dengan mudah, sementara dalam Fetch, Anda perlu menggunakan Promise.all() dan menangani respons dengan cara yang sedikit lebih rumit.

    Kesimpulan:
        Axios menyediakan API yang mudah digunakan dalam satu paket, sementara Fetch memanfaatkan API bawaan dari browser.
        Penggunaan Axios atau Fetch tergantung pada preferensi Anda dan kebutuhan proyek, namun, Fetch dapat menggantikan kebutuhan akan pustaka eksternal dalam beberapa kasus.

- Referensi : *https://yusufedogawa8.medium.com/fetch-api-atau-axios-cb5b73d3b683*
