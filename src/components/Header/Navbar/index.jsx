import LogoTarkhineh from "@/assets/images/LogoTarkhineh.svg";
import "./style.css";
import { Link } from "react-router-dom";
import ArrowDown from "@/assets/images/arrow-down.svg";
import Button from "@/components/UI/Button";
import SearchIcon from "@/assets/images/SearchIcon.svg";
import UserIcon from "@/assets/images/UserIcon.svg";
import ShoppingCartIcon from "@/assets/images/ShoppingCartIcon.svg";
import { useState } from "react";

function Navbar() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex py-8 px-24 justify-between items-center">
      {/* Tarkhine logo */}
      <div>
        <img src={LogoTarkhineh} alt="LogoTarkhineh" />
      </div>
      {/* NavBar Tabs */}
      <div>
        <ul className="flex justify-between gap-6">
          <li className="cursor-pointer">صفحه اصلی</li>
          <li className="dropdown cursor-pointer">
            <button className="dropButton">شعبه</button>
            <img src={ArrowDown} alt="ArrowDown" />
            <div className="dropdown-content">
              <Link to={"#"}>شعبه اکباتان</Link>
              <Link to={"#"}>شعبه چالوس</Link>
              <Link to={"#"}>شعبه اقدسیه</Link>
              <Link to={"#"}>شعبه ونک</Link>
            </div>
          </li>
          <li className="dropdown cursor-pointer gap-1">
            <button className="dropButton">منو</button>
            <img src={ArrowDown} alt="ArrowDown" />
            <div className="dropdown-content">
              <Link to={"#"}>غذای اصلی</Link>
              <Link to={"#"}>پیش غذا</Link>
              <Link to={"#"}>دسر</Link>
              <Link to={"#"}>نوشیدنی</Link>
            </div>
          </li>
          <li className="cursor-pointer">اعطای نمایندگی</li>
          <li className="cursor-pointer">درباره ما</li>
          <li className="cursor-pointer">تماس با ما</li>
        </ul>
      </div>

      <div className="flex gap-2">
        <Link to={"#"}>
          <Button variant="NavBarBTN" size="sm" title="Search" onClick={handleButtonClick}>
            {showInput ? (
              <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="متن مورد نظر خود را بنویسید..."
              className=" bg-transparent flex-wrap outline-none w-auto h-auto"
              />
            ) : (
              ""
            )}
            <img
              src={SearchIcon}
              alt="SearchIcon"
            />
        
          </Button>
        </Link>
        <Link to={"#"}>
          <Button variant="NavBarBTN" size="sm" title="User">
            <img src={UserIcon} alt="UserIcon" />
          </Button>
        </Link>
        <Link to={"#"}>
          <Button variant="NavBarBTN" size="sm" title="Shop">
            <img src={ShoppingCartIcon} alt="ShoppingCartIcon" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
