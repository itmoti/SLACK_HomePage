import slick from "../../assets/Slick.png";
import slick_logo from "../../assets/slick_logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar font-bold ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Courses</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>Contact Us </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <div className=" flex ">
              <img src={slick_logo}></img>

              <img src={slick}></img>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Courses</a>
            </li>
            <li>
              <a>COMMUNITY</a>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#3642EF] text-white rounded-[40px]">
            GET STARTED
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
