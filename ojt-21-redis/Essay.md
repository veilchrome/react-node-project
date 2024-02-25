1.  Jelaskan pengertian Redis!
    > > Redis adalah Pada dasarnya, Redis merupakan sebuah teknologi penyimpanan struktur data di dalam sebuah memori yang sifatnya open source.
2.  Jelaskan keuntungan menggunakan Redis

    > > Keuntungan menggunakan Redis:

        Kinerja Tinggi: Redis menyimpan data di dalam memori, sehingga akses data lebih cepat daripada basis data disk tradisional.
        Dukungan Struktur Data: Redis mendukung berbagai jenis struktur data, termasuk string, hash, list, set, dan sorted set, yang memungkinkan fleksibilitas dalam pemrograman.
        Skalabilitas Horizontal: Redis dapat di-skala secara horizontal dengan mudah dengan menggunakan mekanisme seperti replikasi dan klaster.
        Fitur Cache Built-in: Redis memiliki fitur caching built-in yang memungkinkan penggunaannya sebagai cache, membantu mengurangi beban pada basis data utama.
        Durabilitas Opsional: Redis dapat dikonfigurasi untuk menyimpan data ke disk secara berkala, memberikan durabilitas opsional terhadap kehilangan data.

3.  Jelaskan category data yang tepat untuk menggunakan Redis!

    > >     Data Cache: Redis sangat baik digunakan sebagai cache untuk menyimpan data yang sering diakses agar mempercepat akses data.

        Penghitungan: Redis dapat digunakan untuk menghitung statistik dan menghasilkan agregat data karena dukungannya terhadap operasi atomik pada data.
        Sesi Pengguna: Redis dapat digunakan untuk menyimpan informasi sesi pengguna karena kecepatan aksesnya dan kemampuannya dalam mengelola data dengan waktu kadaluarsa (expiration).
        Pesan Pub/Sub: Redis menyediakan fitur pub/sub yang memungkinkan komunikasi antara berbagai bagian dari sistem secara asinkron.

4.  Jelaskan flow penggunaan Redis sebagai cache!
    > > aat permintaan datang ke server, server memeriksa apakah data yang diminta sudah ada di cache Redis.
    > > Jika data tersebut ada di cache Redis, server mengembalikan data dari cache tanpa harus mengakses sumber data utama (seperti basis data).
    > > Jika data tidak ada di cache Redis, server mengambil data dari sumber data utama, kemudian menyimpannya di cache Redis untuk penggunaan selanjutnya.
    > > Data yang disimpan di cache Redis biasanya memiliki waktu kadaluarsa (expiration time) agar cache dapat diperbarui secara berkala dan memastikan data yang disajikan tetap relevan.
