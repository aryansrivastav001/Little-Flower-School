import Image from "next/image";
import Slider from "./components/slider/page";


export default function Home() {
  return (
  <>
  <Slider/>

  <div className="w-full p-3 text-center bg-amber-50">
    <h1 style={{color:"brown",fontWeight:"800",fontSize:"30px"}}>Admission Closed 2025</h1>
  </div>

  {/* banner section */}
  <div className="w-full">
    <img src="/images/teachers.jpg"className="w-full h-auto"/>
  </div>

  {/*School management*/}
  <div className="w-full text-center p-5 bg-amber-50">
    <h1 style={{fontWeight:"800",fontSize:"40px",color:"brown"}}>School management</h1>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 bg-amber-50">
    <div><img src="/images/bishop.jpg"className=" border-2 border-gray-500 shadow shadow-green-500 mx-auto block mt-3"/>
     <h3 className="text-green-600 mt-3 mx-auto block "style={{marginLeft:"60px",fontWeight:"700",textDecoration:"underline"}}>𝓐𝓻𝔂𝓪𝓷 𝓼𝓻𝓲𝓿𝓪𝓼𝓽𝓪𝓿</h3>
    </div>

     <div><img src="/images/bishop.jpg"className=" border-2 border-gray-500 shadow shadow-green-500 mx-auto block mt-3"/>
     <h3 className="text-green-600 mt-3 mx-auto block"style={{marginLeft:"60px", fontWeight:"700",textDecoration:"underline"}}>𝓐𝓻𝔂𝓪𝓷 𝓼𝓻𝓲𝓿𝓪𝓼𝓽𝓪𝓿</h3>
    </div>

    <div><img src="/images/bishop.jpg"className=" border-2 border-gray-500 shadow shadow-green-500 mx-auto block mt-3"/>
     <h3 className="text-green-600 mt-3 mx-auto block"style={{marginLeft:"60px", fontWeight:"700",textDecoration:"underline"}}>𝓐𝓻𝔂𝓪𝓷 𝓼𝓻𝓲𝓿𝓪𝓼𝓽𝓪𝓿</h3>
    </div>

    <div><img src="/images/bishop.jpg"className=" border-2 border-gray-500 shadow shadow-green-500 mx-auto block mt-3"/>
     <h3 className="text-green-600 mt-3 mx-auto block"style={{ marginLeft:"60px",fontWeight:"700",textDecoration:"underline"}}>𝓐𝓻𝔂𝓪𝓷 𝓼𝓻𝓲𝓿𝓪𝓼𝓽𝓪𝓿</h3>
    </div>
  </div>

  {/*principal message*/}
  <div className="w-full p-5 bg-amber-50 text-center justify-center">
     <h1 style={{color:"brown",fontWeight:"800",fontSize:"40px"}}>Principal Message...</h1>

     <img src="/images/principal.jpeg"className="m-5 mx-auto block"/>

     <p className="text-black">A school principal is the head leader and administrator responsible for a school's overall operation, including setting academic goals, </p>
     <p className="text-black">managing staff, overseeing daily activities, ensuring student safety, and acting as the public representative for the institution. They create</p>
      <p className="text-black">a positive learning environment, mentor teachers, manage budgets, and implement district/state policies, requiring strong leadership, communication, and problem-solving skills. </p>
  </div>
 </>
  );
}
