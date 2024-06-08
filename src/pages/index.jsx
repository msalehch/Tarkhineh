import HomePageScreen from "@/components/Header/HomePageScreen";
import HomePageComponents from "@/components/HomePageComponents";

function HomePage() {
  return (
    <div className="flex items-center flex-col w-full">
      <HomePageScreen />
      <HomePageComponents/>
    </div>
  );
}
export default HomePage;
