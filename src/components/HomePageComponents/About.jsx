import AboutPic from "@/assets/images/About.svg";
import Button from "../UI/Button";
import HomeWifi from "@/assets/images/HomeWifi.svg";
import Diagram from "@/assets/images/Diagram.svg";
import User from "@/assets/images/User.svg";
import MenuBoard from "@/assets/images/MenuBoard.svg";
import ArrowLeft from "@/assets/images/ArrowLeft.svg"

function About() {
  return (
    <div className="relative flex w-full flex-wrap ">
      <img src={AboutPic} alt="" className="w-full" />
      <div className="absolute flex justify-center items-center">
        <div className="p-16 basis-2/4">
            <div>

          <p className="font-bold text-white pb-9 text-3xl">
            رستوران‌های زنجیره‌ای ترخینه
          </p>
          <p className="text-white text-xl text-justify">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
            </div>
            <div className="flex justify-end pt-8 items-end">
          <Button variant="White">اطلاعات بیشتر <img src={ArrowLeft} alt="" /></Button>
            </div>
        </div>
        <div className=" p-16 basis-2/4 grid grid-cols-2 grid-rows-2 gap-y-16">
          <div>
            <img src={User} alt="" />
            <p className="text-white ">پرسنلی مجرب و حرفه‌ای</p>
          </div>
          <div>
            <img src={Diagram} alt="" />
            <p className="text-white ">کیفیت بالای غذاها</p>
          </div>
          <div>
            <img src={HomeWifi} alt="" />
            <p className="text-white ">محیطی دلنشین و آرام</p>
          </div>
          <div>
            <img src={MenuBoard} alt="" />
            <p className="text-white ">منوی متنوع</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
