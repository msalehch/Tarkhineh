import pishFood from "@/assets/images/pishFood.svg";
import Food from "@/assets/images/Food.svg";
import Drink from "@/assets/images/Drink.svg";
import Deser from "@/assets/images/Deser.svg";
import Button from "../UI/Button";
import About from "./About";
import Places from "./Places";

function HomePageComponents() {
  return (
    <>
      <div className="text-2xl pt-7 font-bold">منوی رستوران</div>
      <div className="flex gap-8 flex-wrap pt-10">
        <div className="flex flex-col justify-center items-center w-72 h-96 relative">
          <div className="w-72 h-40 rounded-xl bg-green-700  flex justify-center ">
            <img
              src={Food}
              alt=""
              className="items-start justify-start w-4/5 transform: -translate-y-28 absolute"
            />
            <Button
              className={` absolute items-end justify-end transform: translate-y-32`}
              variant="NavBarBTN"
              size="xl"
            >
              غذای اصلی
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-72 h-96 relative">
          <div className="w-72 h-40 rounded-xl bg-green-700  flex justify-center ">
            <img
              src={pishFood}
              alt=""
              className="items-start justify-start w-4/5 transform: -translate-y-28 absolute"
            />
            <Button
              className={` absolute items-end justify-end transform: translate-y-32`}
              variant="NavBarBTN"
              size="xl"
            >
              پیش غذا
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-72 h-96 relative">
          <div className="w-72 h-40 rounded-xl bg-green-700  flex justify-center ">
            <img
              src={Deser}
              alt=""
              className="items-start justify-start w-4/5 transform: -translate-y-28 absolute"
            />
            <Button
              className={` absolute items-end justify-end transform: translate-y-32`}
              variant="NavBarBTN"
              size="xl"
            >
              دسر
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-72 h-96 relative">
          <div className="w-72 h-40 rounded-xl bg-green-700  flex justify-center ">
            <img
              src={Drink}
              alt=""
              className="items-start justify-start w-4/5 transform: -translate-y-40 absolute"
            />
            <Button
              className={` absolute items-end justify-end transform: translate-y-32`}
              variant="NavBarBTN"
              size="xl"
            >
              نوشیدنی
            </Button>
          </div>
        </div>
      </div>
    <About/>
    <Places/>
    </>
  );
}

export default HomePageComponents;
