import HomeScreen from "@/assets/images/HomeScreen.svg";
import Button from "@/components/UI/Button";

function HomePageScreen() {
  return (
    <div className="relative flex flex-col items-center justify-end">
      <img src={HomeScreen} alt="HomeScreen" className="w-full" />
      <p className="absolute items-center flex flex-col justify-end text-green-800 font-bold pb-9">
        <span className="text-4xl text-white">
        تجربه غذای سالم و گیاهی به سبک ترخینه
        </span>
        <Button variant="NavBarBTN" className="mt-40" size="xl"> سفارش آنلاین غذا </Button>
      </p>
    </div>
  );
}
export default HomePageScreen;
