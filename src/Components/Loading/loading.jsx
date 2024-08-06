import React from "react";
import LoadingGif from "../../../public/loading.gif";
import Image from "next/image";
function loading() {
  return (
    <div className="text-white w-full flex items-center justify-center">
      <Image src={LoadingGif} width={300} height={300} alt="" />
    </div>
  );
}

export default loading;
