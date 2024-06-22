import Lsupport from "../../assets/Lsupport.png";
import Rcrown from "../../assets/Rcrown.png";
// import LSupport from "../../assets/LSupport.png";
import yellow_bg from "../../assets/yellow_bg.png";
import black_star from "../../assets/black_star.png";
import DRghtpest from "../../assets/DRghtpest.png";
import "./Destination.css";

const Destination = () => {
  return (
    <>
      <div className=" mt-10 mx-[unset]   text-white Destisnow pb-8 ">
        <div className="container mx-auto text-center p-10 box-border destinationstar block min-w">
          <h1 className="text-4xl font-bold">WE HELP YOU TO REACH</h1>
          <h2 className="text-4xl font-bold  ">
            YOUR
            <a className="text-[#feed02] underline ">DESTINATION</a>
          </h2>
        </div>

        <div className="flex justify-center  mt-10 mb-6 space-x-4  ">
          <div className="DLftyellow  w-[45%]  text-black rounded-b-[31px]  justify-between  ">
            <div className="pl-6 pt-6 pb-6  flex flex-col justify-between">
              <img src={Lsupport} className="w-[10%] mt-5"></img>
              <h1 className="text-2xl font-extrabold ">ALWAYS CALL SUPPORT</h1>
              <h2>
                what the challenges were and how they overcame them, then
                there's blog for that. Consequently, if you just want a quick
                blast of eye candy to inspire
              </h2>
              <p className="font-bold">------ LEARN MORE</p>
            </div>
          </div>

          <div className="DRghtpest w-[45%]  text-black rounded-b-[31px]  justify-between ">
            <div className="pl-6 pt-6 pb-6  flex flex-col justify-between">
              <img src={Rcrown} className="w-[10%] mt-5"></img>
              <h1 className="text-2xl font-extrabold ">PREMIUM ACCESS</h1>
              <h2>
                We'll start with the blog you're reading at the moment.At
                Creative Boom, it's our mission to celebrate, inspire and
                support the creative community. As well as
              </h2>
              <p className="font-bold">-----LEARN MORE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
