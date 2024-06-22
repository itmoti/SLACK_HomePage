import CourseList from "./CourseList";

const Courses = () => {
    return (

        <div>

            <div className=" mb-[70px] max-sm:mb-1">
                <h1 className="text-[15px] md:text-[55px]  font-black text-center w-[200px] md:w-[700px] mx-auto my-3">SIMPLE AND POWERFUL
                    <h1 className="text-blue-900 underline">IT COURSES</h1>
                </h1>
            </div>

            <div>
                <CourseList className=""></CourseList>
            </div>
            <div className="  ">
                <button className=" max-w-80 md:w-[320px] lg:p-2 w-[90px] max-sm:w- min:btn-sm min:rounded-[40px] rounded-[30px] md:text-[24px] text-[9px] mx-auto block btn bg-[#3642EF] text-white ">Browse All</button>
            </div>

        </div>
    )
}

export default Courses;