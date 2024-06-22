import Navbar from "../Navbar/Navbar";
import knlde1 from "../../assets/knlde1.png";
import knlde2 from "../../assets/knlde2.png";
import knlde3 from "../../assets/knlde3.png";

const Knowledge = () => {
  return (
    <div className="bg-[#FEED00] pb-10">
      <Navbar></Navbar>
      <div className="mx-auto max-w-[90%]">
        <h1 className=" leading-[109px] text-[98px] text-center font-extrabold  ">
          GET AWAY TO
          <h2>
            YOUR <span className=" underline ">KNOWLEDGE</span>
          </h2>
          <h2>UNIVERSE</h2>
        </h1>
      </div>

      <div className="w-[90%] mx-auto mt-8 ">
        <div className="flex  justify-between items-center space-x-3 w-[55%]  border-t-2 border-spacing-2  border-black pt-6 ">
          <img src={knlde1} className=" w-[55px] h-[55px] " />
          <h1 className="font-extrabold">
            <p>UNLIMITED</p>
            <p>CLASSES</p>
          </h1>
          <p>
            SOME OF THESE ARE SPECIALISTS, TIGHTLY FOCUSED ON TOPICS LIKE
            TYPOGRAPHY
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-8 ">
        <div className="flex  justify-between items-center space-x-3 w-[55%]  border-t-2 border-spacing-2  border-black pt-6 ">
          <img src={knlde2} className=" w-[55px] h-[55px] " />
          <h1 className="font-extrabold">
            <p>ABOUT</p>
            <p>COURSES</p>
          </h1>
          <p>
            HUGE VARIETY OF DESIGN DISCIPLINES AND CHERRY-PICKING THE BEST WORK
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-8 ">
        <div className="flex  justify-between items-center space-x-3 w-[55%]  border-t-2 border-spacing-2  border-black pt-6 ">
          <img src={knlde3} className=" w-[55px] h-[55px] " />
          <h1 className="font-extrabold">
            <p>COURSES</p>
            <p>SUPPORT</p>
          </h1>
          <p>
            HELP YOU REBOOT YOUR CREATIVE MOJO AND GIVE YOU FRESH IDEAS INSPIRE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
