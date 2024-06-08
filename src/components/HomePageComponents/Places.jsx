import Shoabe1 from "@/assets/images/Shoabe1.svg";
import Shoabe2 from "@/assets/images/Shoabe2.svg";
import Shoabe3 from "@/assets/images/Shoabe3.svg";
import Shoabe4 from "@/assets/images/Shoabe4.svg";

function Places() {
  return (
    <>
      <div className="text-2xl pt-7 font-bold">ترخینه گردی</div>

      <div className="flex gap-8 flex-wrap">
        <div className="flex flex-col items-center w-72 h-82 relative border border-gray-600 rounded-md mt-6 hover:shadow-lg hover:shadow-black hover:animate-pulse">
          <img src={Shoabe1} alt="" className="w-full rounded-t-md" />
          <p className="font-bold text-xl pt-3">شعبه چالوس</p>
          <p className="text-gray-600 text-justify p-6 flex justify-center items-center">
            شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
          </p>
        </div>

        <div className="flex flex-col items-center w-72 h-82 relative border border-gray-600 rounded-md mt-6 hover:shadow-lg hover:shadow-black hover:animate-pulse">
          <img src={Shoabe2} alt="" className="w-full rounded-t-md" />
          <p className="font-bold text-xl pt-3">شعبه اکباتان</p>
          <p className="text-gray-600 text-justify p-6 flex justify-center items-center">
            چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی
          </p>
        </div>

        <div className="flex flex-col items-center w-72 h-82 relative border border-gray-600 rounded-md mt-6 hover:shadow-lg hover:shadow-black hover:animate-pulse">
          <img src={Shoabe3} alt="" className="w-full rounded-t-md" />
          <p className="font-bold text-xl pt-3">شعبه اقدسیه</p>
          <p className="text-gray-600 text-justify p-6 flex justify-center items-center">
            خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
          </p>
        </div>

        <div className="flex flex-col items-center w-72 h-82 relative border border-gray-600 rounded-md mt-6 hover:shadow-lg hover:shadow-black hover:animate-pulse">
          <img src={Shoabe4} alt="" className="w-full rounded-t-md" />
          <p className="font-bold text-xl pt-3">شعبه ونک</p>
          <p className="text-gray-600 text-justify p-6 flex justify-center items-center">
            میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
          </p>
        </div>
      </div>
    </>
  );
}

export default Places;
