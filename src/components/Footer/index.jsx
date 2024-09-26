import BackFootPic from "@/assets/images/BackFootPic.svg";

function Footer() {
  return (
    <>
      <div className="flex mt-10 ">
        <img src={BackFootPic} alt="BackFootPic" className="w-full" />

        <span className="absolute flex flex-row">
          <p className="flex basis-1/4 text-white">dshfhdffgdh</p>
          <p className="flex basis-1/4 text-white">dshfhdffgdh</p>
          <p className="flex basis-1/2 text-white">dshfhdffgdh</p>
        </span>
      </div>
      <span className=" flex flex-row">
        <p className="flex basis-1/4">dshfhdffgdh</p>
        <p className="flex basis-1/4">dshfhdffgdh</p>
        <p className="flex basis-1/2">dshfhdffgdh</p>
      </span>
    </>
  );
}
export default Footer;
