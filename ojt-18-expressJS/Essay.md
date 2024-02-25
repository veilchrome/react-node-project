1. Jelaskan pengertian dan kegunaan ExpressJS!
   > > Jadi pengertian dan Kegunaan ExpressJS adalah untuk pengertian express itu sendiri expressjs ialah library NodeJS, dan digunakan untuk membangun sebuah aplikasi di NodeJS Dengan menggunakan kerangka web seperti Express.js, pengembang dapat menghemat waktu dan fokus pada tugas penting lainnya.
2. Jelaskan struktur yang umum digunakan di project expressJS!
   > > Berikut Struktur Umum yang digunakan di Project ExpressJS secara struktural yang sering digunakan di Project ExpressJS.
   > > node_project/
   > > ├── src/
   > > │ ├── controllers/
   > > │ ├── middleware/
   > > │ ├── models/
   > > │ ├── routes/
   > > │ ├── services/
   > > │ ├── utils/
   > > │ └── app.js
   > > ├── public/
   > > │ ├── images/
   > > │ ├── stylesheets/
   > > │ └── scripts/
   > > ├── views/
   > > │ ├── partials/
   > > │ └── layouts/
   > > ├── test/
   > > │ ├── unit/
   > > │ ├── integration/
   > > │ └── e2e/
   > > ├── config/
   > > │ ├── development/
   > > │ ├── production/
   > > │ └── index.js
   > > ├── logs/
   > > ├── .gitignore
   > > ├── .env
   > > ├── .env.local
   > > ├── package.json
   > > └── README.md

Explanation of the folder structure:

    src: Contains the main application source code.
    controllers: Contains the application's controller logic.
    middleware: Contains middleware functions.
    models: Contains the application's data models.
    routes: Contains the application's routes.
    services: Contains the application's business logic and third-party services.
    utils: Contains utility functions and helper scripts.
    app.js: The main entry point for the application.
    public: Contains static files, such as images, stylesheets, and client-side JavaScript files.
    images: Contains image files.
    stylesheets: Contains CSS files.
    scripts: Contains client-side JavaScript files.
    views: Contains the application's view templates.
    partials: Contains reusable view components.
    layouts: Contains layout templates.
    test: Contains test files and folders for unit, integration, and end-to-end tests.
    unit: Contains unit test files.
    integration: Contains integration test files.
    e2e: Contains end-to-end test files.
    config: Contains configuration files for different environments (development, production, etc.).
    development: Contains development environment-specific configuration files.
    production: Contains production environment-specific configuration files.
    index.js: Exports the appropriate configuration based on the current environment.
    logs: Contains log files.
    .gitignore: Specifies the files and folders that should be ignored by Git.
    .env: Contains environment-specific variables (should not be committed to the repository).
    .env.local:  Contains environment-specific variables for development enviornment
    package.json: Contains project metadata, dependencies, and scripts.
    README.md: Provides an overview of the project, instructions for installation, and usage information.

Note that the structure above is just a suggestion and can be adapted to the specific requirements of your project.
// Source : https://www.developerupdates.com/blog/folder-structure-for-nodejs-and-expressjs-project

3. Jelaskan pengertian dan kegunaan Middleware di ExpressJS!
   > > Jawab Jadi Kegunaan Middleware di ExpressJS adalah adalah sebuah fungsi yang didefinisikan sebelumnya yang mempunyai 3 parameter untuk fungsinya yang berguna untuk melanjutkan ke aksi berikutnya setelah server menerima request dan sebelum controller mengirim response.
   > > parameter (res) (req) dan next() fungsi ini adalah fungsi yang sangat penting dipanggil/digunakan di suatu middleware, jika fungsi next() tidak dipanggil maka middleware tidak akan melanjutkan ke controller atau aksi berikutnya. referensi : https://blog.webdevsimplified.com/2019-12/express-middleware-in-depth/
4. Jelaskan pengertian dan contoh dan HTTP Client!
   > > > HTTP adalah komponen website yang mengatur pertukaran data yang terjadi di dalam internet. Protokol inilah yang membuat web client (browser) dan web server (aplikasi web) dapat terhubung. Protokol HTTP mengatur proses transmisi dan bagaimana format data dikirimkan.
   > > > Contoh HTTP CLIENT :
   > > > Metode HTTP API
   > > > GET HttpClient.GetAsync
   > > > GET HttpClient.GetByteArrayAsync
   > > > GET HttpClient.GetStreamAsync
   > > > GET HttpClient.GetStringAsync
   > > > POST HttpClient.PostAsync
   > > > PUT HttpClient.PutAsync
   > > > PATCH HttpClient.PatchAsync
   > > > DELETE HttpClient.DeleteAsync
   > > > †USER SPECIFIED HttpClient.SendAsync

Permintaan GET tidak boleh mengirim isi dan digunakan (seperti yang ditunjukkan oleh nama metode) untuk mengambil (atau mendapatkan) data dari sumber daya.
Permintaan POST mengirim data ke server untuk diproses. Header Content-Type permintaan menandakan jenis MIME apa yang dikirim oleh isi.
Metode PUT permintaan menggantikan sumber daya yang ada atau membuat sumber daya baru menggunakan payload isi permintaan.
