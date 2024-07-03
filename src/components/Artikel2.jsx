import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Artikel2() {
  const t =
    'fs.writeFile("message.txt","Hello from NodeJS",(err)=>{ if(err) throw err; {console.log("The file has been saved");}});';

  const u =
    'fs.writeFile("message.txt","Hello from NodeJS",(err)=>{ if(err) throw err; {console.log("The file has been saved");}});';

  return (
    <>
      <div className="">
        <Navbar />
        <main class=" pt-20 pb-16  lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header class="mb-4 lg:mb-6 not-format">
                <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      class="mr-4 w-16 h-16 rounded-full"
                      src="https://mahasiswa.itp.ac.id/assets/foto/profil/2022/55201/2022610057.jpeg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        class="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        Reza
                      </a>
                      <p class="text-base text-gray-500 dark:text-gray-400">
                        Undergraduate student, Padang Institute of Technology
                      </p>
                      <p class="text-base text-gray-500 dark:text-gray-400">
                        <time
                          pubdate
                          datetime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          01, Juli 2024
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 class="text-left mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  QR CODE GENERATOR
                </h1>
              </header>
              <p class=" text-justify text-pretty py-10 lead">
                Pada modul ini kita membuat QRCode dengan memanfaatkan package
                node manager. Node Package Manager (npm) merupakan manajer paket
                dan register perangkat lunak, tetapi juga merupakan tempat di
                mana pengembang dapat menemukan, membangun, dan mengelola paket
                kode. Saat ini, npm berisi lebih dari 800.000 paket untuk
                berbagai aplikasi, mulai dari front-end dan robotika hingga
                aplikasi seluler.
                <br />{" "}
                <div className="mockup-code my-4">
                  <pre data-prefix="$">
                    <code>npm install --save inquirer</code>
                  </pre>
                </div>
                <br />
                Cara menambahkan package ini dengan syarat kita telah
                menginstall NodeJS. Mengenai proses installasi NodeJS ini telah
                dibahas pada modul sebelumnya. Proses installasi ini menggunakan
                script npm install –save inquirer melalui terminal. <br />{" "}
                Buatkan file index.js dan copykan script yang ada pada Gb 1
                (silahkan dibuka sendiri melalui browser anda). Jika telah di
                paste-kan scriptnya, tambahkan script baris 6,7, dan 12 seperti
                pada Gb 4 pada program anda.
                <br />
                <img className="my-4" src="/gb1.png" alt="" />
                Kemudian jalankan index.js dengan cara mengetikkan node index.js
                pada terminal, jika berhasil akan tampil seperti Gb 5. Tujuannya
                untuk mengetikkan URL yang akan di create QR Code nya.
                <br />
                <div className="mockup-code my-4">
                  <pre data-prefix="$">
                    <code>node index.js</code>
                  </pre>
                </div>
                <img className="my-4" src="/gb2.png" alt="" />
                Selanjutnya kita akan menggunakan package qr-image. Sama halnya
                dengan menginstall package inquirer.
                <div className="mockup-code my-4">
                  <pre data-prefix="$">
                    <code>npm install qr-image</code>
                  </pre>
                </div>
                Guna dari package ini untuk membuat QR Code <br />
                Tambahkan script 17 – 19, dan perhatikan perubahan di script
                baris 16. <img className="my-4" src="/gb3.png" alt="" />
              </p>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
