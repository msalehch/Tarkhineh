import HomeScreen from "@/assets/images/HomeScreen.svg"

function HomePageScreen() {

    return (
        <div className="relative flex flex-col items-center justify-center">
            <img src={HomeScreen} alt="HomeScreen" className="w-full"/>
            <p className="absolute items-center flex justify-center text-green-800 font-bold">
                mmd
            </p>

        </div>

    )
}
export default HomePageScreen;