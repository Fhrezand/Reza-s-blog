export default function Navbar() {
  return (
    <div className="  navbar bg-white bg-opacity-75 shadow-lg rounded-xl fixed  w-full z-20 top-0 start-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl  text-zinc-900 font-poppins">
          Reza
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-zinc-900 text-lg font-poppins ">
          <li className="hover:transition-all hover:border hover:border-spacing-4 hover:rounded">
            <a href="/">Home</a>
          </li>

          <li className="hover:transition-all hover:border hover:border-spacing-4 hover:rounded">
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <div className="avatar">
              <div className="w-[32px] rounded-full">
                <img src="https://mahasiswa.itp.ac.id/assets/foto/profil/2022/55201/2022610057.jpeg" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
