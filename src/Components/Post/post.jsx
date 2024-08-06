import Image from "next/image";
import React from "react";
import ImageURL from "../../../public/background.jpg";

function Post({ post }) {
  return (
    <div className=" rounded overflow-hidden shadow-lg border mt-4 bg-white container">
      <div className="p-1 rounded">
        <Image
          className="w-full border border-sky-600 rounded"
          src={ImageURL}
          alt=""
        />
      </div>
      <div className="px-6 py-4 bg-white h-full ">
        <div className="font-bold text-sky-800 mb-2 border-b border-sky-600 text-sm p-1">
          {post.title}
        </div>
        <div className="flex text-sky-700 text-base p-1">{post.body}</div>
      </div>
    </div>
  );
}

export default Post;
