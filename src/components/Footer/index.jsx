import BackFootPic from "@/assets/images/BackFootPic.svg";

function Footer() {

    return(
        <>
        <div className="flex mt-10 relative">
            <img src={BackFootPic} alt="BackFootPic" className="w-full"/>
             
             <div className="absolute flex justify-center items-center  ">
            <div className="w-full h-full flex justify-center items-center basis- text-white">dshfhdffgdh</div>
            <div className="w-full h-full flex justify-center items-center basis-1/4 text-white">dshfhdffgdh</div>
            <div className="w-full h-full flex justify-center items-center basis-1/2 text-white">dshfhdffgdh</div>
             </div>
        </div>
        </>
    )
}
export default Footer;