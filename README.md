<div id="top"></div>
<br />

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://tickez.netlify.app)

Super2Do App adalah aplikasi untuk membuat daftar segala sesuatu yang harus kita lakukan, kita bisa memberikan tanda pada tugas yang sudah selesai dengan mudah.

### Built With

Website Front End ini dibangun dengan Teknologi Berikut

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=id)
- [CSS](https://developer.mozilla.org/id/docs/Web/CSS)
- [React](https://reactjs.org/)
- [Laravel](https://laravel.com/docs/8.x/migrations/)

### Installation

1. Clone Atau Download Repo ini
   ```sh
   git clone https://github.com/HariisV/Gamatechno-Backend.git
   ```
2. Buka file
  ```
  src/utils/axios.js
  ```
3.Ganti baseURL Menjadi Link backend kamu
```
const axiosApiInterface = axios.create({
  baseURL: "http://127.0.0.1:8000/", => Ganti Ke Url Kamu jangan lupa ditutup dengan /(slash)
});
```
4. Buka cmd, jalankan :
  ```
  npm install
  npm run dev
  ```
5. Setelah Itu browser akan otomatis membuka website kamu !

<!-- ROADMAP -->
### How To Deploy 

- [Netlify](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
- [Vercel](https://vercel.com/guides/deploying-react-with-vercel-cra)
- [VPS](https://medium.com/swlh/react-app-deployment-to-vps-cloud-server-2de4387f59f4)

### Demo Project
- [Video](https://www.awesomescreenshot.com/video/6587930?key=d0110832973e8349112bed2a18360e6b)


## Roadmap

- [x] Create Task
- [x] Delete Task
- [x] Update Task
- [x] Filter By Status (All,Completed,active)
- [x] Update All active To Completed
- [x] Delete All Completed Task 

## License

Distributed under the MIT License.

<!-- CONTACT -->
<p align="right">(<a href="#top">back to top</a>)</p>

[product-screenshot]: https://i.postimg.cc/L6NT55hG/Screenshot-3.png
