# 1. Apa itu React Hooks? Bedanya dengan Component Class.

### Jawab :

React Hooks adalah fitur yang diperkenalkan dalam React 16.8 untuk memungkinkan penggunaan state dan fitur React lainnya dalam functional components/Arrow. Dengan menggunakan Hooks, kita dapat mengelola state dan useEffect dalam functional components tanpa perlu membuat class component.
https://id.legacy.reactjs.org/

> > > ##### Referensi : https://id.legacy.reactjs.org/docs/hooks-overview.html

> > ## 1.1 Bedanya dengan class component?

> > ### Jawab :

> > Jadi Perbedaan utama antara React Hooks dan class component terletak pada cara pengelolaan state . Class component menggunakan metode `setState` untuk mengubah state, sementara Hooks seperti `useState` dan `useEffect` digunakan dalam functional components.
> > https://reactrouter.com/

## 2. Keuntungan menggunakan React Hooks

### Jawab :

- **Memudahkan pengelolaan State dan UseEffect**: Hooks membuatnya lebih mudah untuk mengelola state dalam functional components.
- **Menghindari penggunaan class**: Kita dapat menghindari penggunaan class component dan lebih fokus pada fungsionalitas dalam functional components.

## 3. Alternatif routing selain React Router

### Jawab :

Iya, ada alternatif routing selain React Router. Salah satunya adalah `reach/router`, yang juga merupakan pilihan yang populer.
Reach Router adalah library routing untuk React yang dirancang untuk memberikan pengalaman routing yang sederhana dan dapat diakses. Library ini dikembangkan oleh Tim Kelompok React, yang juga merupakan kontributor utama dalam pengembangan React itu sendiri.

## 4. Keuntungan menggunakan React Router

### Jawab :

- **Pengelolaan navigasi**: Memudahkan pengelolaan navigasi dalam aplikasi React.
- **Pemisahan tugas**: Memisahkan logika routing dari komponen utama untuk menjaga keterbacaan dan pemeliharaan.

## 5. Perbedaan BrowserRouter dan HashRouter

### Jawab :

- **BrowserRouter**: Menggunakan history API untuk menangani navigasi. Cocok untuk aplikasi yang di-host di server yang mendukung history API.
- **HashRouter**: Menggunakan hash dalam URL untuk menangani navigasi. Cocok untuk aplikasi statis atau yang di-host di server yang tidak mendukung history API.

## No 6 Penggunaan ReactHook (useEffect dan useState) ada di direktori Components/Hooks/reactHooks1.js
