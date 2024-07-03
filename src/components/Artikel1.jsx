import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Artikel1() {
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
                  Node JS - Native Module
                </h1>
              </header>
              <p class=" text-justify text-pretty py-10 lead">
                Native Module di Node JS tersedia di{" "}
                <a
                  href="https://nodejs.org/api/documentation.html"
                  className="link"
                >
                  https://nodejs.org/api/documentation.html.
                </a>
                Node.js berjalan pada Mesin JavaScript V8, yang merupakan
                program C tersendiri. Kita dapat menulis kode yang berinteraksi
                langsung dengan program C ini dalam bahasanya sendiri, yang
                sangat bagus karena kita dapat menghindari banyak serialisasi
                dan overhead komunikasi yang mahal. Kali ini kita membahas File
                System saja.
                <br />{" "}
                <b>
                  {" "}
                  A. Write File Buatkan 1 Folder Baru yang berisikan file
                  index.js
                </b>
                <div className="mockup-code">
                  <pre data-prefix="">
                    <code>const fs=require("fs")</code>
                    <code>{t}</code>
                  </pre>
                </div>
                <br />
                1. Klik kanan folder posisi file index.js ini. Lalu pilih
                Terminal <br />
                2. Ketikkan node index.js
                <div className="mockup-code">
                  <pre data-prefix="">
                    <pre data-prefix="$">
                      <code>node index.js</code>
                    </pre>
                  </pre>
                </div>
                <br />
                <br />
                Program diatas, ditujukan untuk membuat file message.txt yang
                berisikan text Hello from NodeJS.
                <br />
                <br />
                <b>B. Read File </b>
                <br /> 1. Kita modifikasi script index.js sebelumnya.
                <div className="mockup-code">
                  <pre data-prefix="">
                    <code>{u}</code>
                  </pre>
                </div>{" "}
                <br />
                2. Ketikkan node index.js
                <div className="mockup-code">
                  <pre data-prefix="">
                    <pre data-prefix="$">
                      <code>node index.js</code>
                    </pre>
                  </pre>
                </div>
                <br />
                <br />
                Maka akan ditampilkan beberapa karakter yang tidak kita pahami.
                Untuk mengatasi ini, kita gunakan “charset-utf-8
              </p>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
