1. Jelaskan fungsi command create-react-app!
   Jawab :
   Jadi Fungsi CRA atau Create React App adalah untuk membuat Project menggunakan Framework Javascript yakni React.

2. Jelaskan fungsi JSX di dalam React!
   Jawab :
   Fungsi JSX menghasilkan elemen dari REACT.
3. Jelaskan perbedaan Props dan State!
   Jawab :
   Perbedaannya Props diteruskan ke Komponen sedangkan State dikelola dalam komponen (mirip dengan variabel yang dideklarasikan dalam suatu function)
   Ref : https://id.legacy.reactjs.org/docs/faq-state.html

4. Jelaskan jenis dan urutan lifecycle method dalam React!
   Jawab :
   1. Mounting (Pembuatan)
      constructor() metode ini dibuat pada saat objek komponen dibuat.
      render() mengembalikan elemen react yang akan dirender
5. Updating
   render(): Kembali dipanggil untuk merender komponen setelah perubahan state atau properti.
   3.Unmounting
   componentWillUnmount(): Dipanggil sebelum komponen dihapus dari DOM. Digunakan untuk membersihkan sumber daya atau melaksanakan tugas terakhir sebelum komponen dihancurkan.
