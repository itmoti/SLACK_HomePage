import lboy from "../../assets/lboy.png";
import rboy from "../../assets/rboy.png";
import red_rac from "../../assets/red_rac.png";
import yellow_bg from "../../assets/yellow_bg.png";
import snow from "../../assets/snow.png";
import blue_rac from "../../assets/blue_rac.png";
import "./ProfessionTeachers.css";

const ProfessionalTeachers = () => {
  return (
    <>
      <div className=" mt-10 mx-[unset]   profTeach pb-8 ">
        <div className="container mx-auto text-center p-10 box-border proteachskills block min-w">
          <h1 className="text-4xl font-bold">BUILD SKILLS FROM</h1>
          <h2 className="text-4xl font-bold ">
            <a className="text-blue-600 underline">PROFESSIONAL </a>
            TEACHER
          </h2>
        </div>

        <div className="flex justify-center  mt-10 mb-6 space-x-4  ">
          <div className="bgleft w-[45%]  text-white rounded-b-[31px] flex justify-between ">
            <div className="pl-6 pt-6 pb-6  flex flex-col justify-between">
              <h1 className="text-2xl font-extrabold ">
                DIFFERENCE BETWEEN CSS AND CSS3
              </h1>
              <h2>
                JACKOB ALEX
                <h3>--WEB DEVELOPER</h3>
              </h2>
            </div>
            <img src={lboy} className="w-[55%] mt-5"></img>
          </div>

          <div className="bgright w-[45%]  text-white rounded-b-[31px] flex justify-between ">
            <div className="pl-6 pt-6 pb-6  flex flex-col justify-between">
              <h1 className="text-2xl font-extrabold ">
                DEFINE DESIGNING AND INSPIRATION IN ONE PLACE WITH US
              </h1>
              <h2>
                MILLY BUTCHER
                <h3>--UI/UX DESIGNER</h3>
              </h2>
            </div>
            <img src={rboy} className="w-[55%] mt-5"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalTeachers;
