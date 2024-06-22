const Footer = () => {
  return (
    <footer className="footer p-10  text-base-content mt-8">
      <nav>
        <h6 className=" font-bold leading-10">COMPANY</h6>
        <a className="link link-hover">ABOUT US</a>
        <a className="link link-hover">SERVICES</a>
        <a className="link link-hover">COMMUNITY</a>
        <a className="link link-hover">COURSES</a>
      </nav>
      <nav>
        <h6 className=" font-bold leading-10">SUPPORT</h6>
        <a className="link link-hover"> HELP CENTER</a>
        <a className="link link-hover">WEBINEARS</a>
        <a className="link link-hover">BECOME A MENTOR</a>
      </nav>
      <nav>
        <h6 className=" font-bold leading-10">HELP</h6>
        <a className="link link-hover">CONTACT US</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">ACCESSIBILITY</a>
      </nav>
      <form className="md:ml-8">
        <h6 className="font-bold text-[40px] ">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label"></label>
          <div className="">
            <input
              type="text"
              placeholder="Enter your email address"
              className="input block  borderborder-b-2 underline "
            />

            <button className="btn btn-primary btn-md  mt-2  font-bold block  max-w-80 md:w-[150px] lg:p-2 w-[90px] max-sm:w- min:btn-sm min:rounded-[40px] rounded-[30px] md:text-[24px join-item  text-white">
              SUBSCRIBE
            </button>

            <hr></hr>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
