import HomePageScreen from "@/components/Header/HomePageScreen";
import HomePageComponents from "@/components/HomePageComponents";

function HomePage() {
  return (
    <div className="flex items-center flex-col w-full">
      <HomePageScreen />
      <HomePageComponents/>
      <div className="font-bold">HomePage</div>
    </div>
  );
}
export default HomePage;
