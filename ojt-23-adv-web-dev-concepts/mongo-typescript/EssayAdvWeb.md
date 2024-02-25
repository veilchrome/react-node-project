1. Sebutkan dan jelaskan tiga perbedaan Typescript dengan JavaScript!
   TypeScript adalah bahasa pemrograman yang merupakan superset dari, dan transpile ke Javascript. Perbedaan utamanya, seperti yang disebutkan di namanya, adalah type system yang digunakan.

   Javascript menggunakan dynamic typing, yang berarti tipe data diasosiasikan dengan nilai alih-alih variabel, sehingga variabel bisa bebas diisi nilai bertipe apa saja dan dievaluasi saat runtime. Konsekuensi dari sistem tipe data tersebut, Javascript menerapkan mekanisme type coercion, konversi tipe data, yang kompleks pada saat runtime. Mekanisme inilah yang menyebabkan '11' + 2 = '112' di saat '11' - 1 = 10, dan [] == 0 bernilai true pada Javascript.
   Dalam basis kode berskala besar, sistem tersebut berpotensi menimbulkan masalah akibat unpredictabilitynya.

   Di sinilah TypeScript menawarkan solusinya: bahasa Javascript yang diperkaya static type checking pada saat transpilasi. Saya akan ambil contoh dari laman petunjuk resmi TypeScript:

   function greeter(person: string) {
   return "Hello, " + person;
   }

   Bisa kita perhatikan sintaks argumen fungsi tersebut yang menyebutkan kontrak tipe data string untuk variabel person dalam fungsi tersebut. Jika kita lakukan:

   let user = [0, 1, 2];

   document.body.textContent = greeter(user);

   Maka ketika kode tersebut kita kompilasi, akan keluar output seperti ini:

   error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
   TypeScript mengeluarkan error karena kita melakukan assignment data berupa array of numbers ke dalam parameter yang memiliki kontrak bertipe data string.
   dengan adanya static type checking tersebut

2. Sebutkan dan jelaskan tiga kelebihan dari penggunaan Typescript!

> > a. Adanya Fitur OOP OOP atau Object Oriented Programming adalah sebuah metode pemrograman yang berorientasi pada objek. OOP menggabungkan data dan fungsi yang saling berkaitan ke dalam kelompok atau objek yang disebut sebagai class. Jika diibaratkan, sebuah motor terdiri dari berbagai komponen kecil seperti sekrup, baut, per, dan sebagainya. Agar lebih mudah disatukan, komponen kecil tersebut bisa dikelompokkan menjadi sebuah objek seperti roda, kerangka motor, knalpot, dan lainnya.Dengan adanya fitur OOP pada TypeScript, Anda dapat membuat kode yang kompleks menjadi lebih sederhana dan rapi.  
> > b. Kinerja Tim Lebih BaikTypeScript dapat membuat proses kerja tim menjadi lebih baik. Hal ini karena TypeScript memiliki struktur data dan tipe anotasi yang jelas dan didefinisikan secara eksplisit sehingga developer dapat lebih mudah memahami kode yang dibuat oleh rekan tim lainnya. Populer dan Banyak Digunakan
> > c. TypeScript sudah banyak digunakan oleh perusahaan besar untuk membuat website atau aplikasi. Contoh beberapa produk yang menggunakan TypeScript adalah Slack, Visual Studio Code, Asana, dan sebagainya. Banyaknya produk software yang menggunakan TypeScript membuat bahasa pemrograman ini menjadi salah satu yang paling populer setelah Python.

3.  Sebutkan tiga contoh PWA yang anda ketahui dan Jelaskan kenapa aplikasi tersebut termasuk dalam PWA!

    > > 1. Tokopedia
    > >    Responsif dan Mobile-Friendly:

        Tokopedia dirancang dengan responsif untuk berbagai perangkat, termasuk desktop, tablet, dan ponsel pintar. Pengguna dapat mengakses situs dengan mudah dari berbagai jenis perangkat.

    > > Installable:

        Tokopedia memanfaatkan fitur "Add to Home Screen" yang memungkinkan pengguna untuk menginstal ikon Tokopedia di layar utama perangkat mereka. Dengan demikian, pengguna dapat mengakses Tokopedia dengan cepat tanpa harus melalui browser.

    > > 2. Starbuck

        Karena aplikasi Starbuck memiliki hal hal dibawah ini :

    - Efficient Performance in flaky network connection
    - Seamless payment and checkout process
    - Great UI/UX

    > > 3.  X / Twitter
    > >     In 2017, Twitter, a widely used social networking platform, decided to integrate Progressive Web Apps (PWAs) into their system. This decision resulted in notable enhancements such as increased user engagement, faster loading times, offline compatibility, push notifications, and easy installation.
    > >     Benefits of adopting PWAs:
    > >     A 65% increase in pages viewed per session.
    > >     A 20% decrease in the number of users leaving the site immediately.
    > >     Over 30% reduction in loading time.
    > >     Improved accessibility for users with limited internet connectivity.
    > >     Enhanced user experience and engagement.
