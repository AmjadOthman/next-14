"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageURL from "../../../public/background.jpg";
import Comment from "../Comments/Comment";
import axios from "axios";
import ImageAvatar from "../../../public/noavatar.png";
import Link from "next/link";

function MainPost({ post, userId }) {
  const [user, setUser] = useState({});

  const getUser = async (id) => {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser(userId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center m-2 ">
      <div className="container w-2/3 flex-col justify-center items-center sm-w-1/3 md-w-1/3 lg:w-1/2 rounded border m-2 p-2 bg-white shadow-lg text-sky-600">
        <Link
          href={`/profile/${userId}`}
          className="flex items-center justify-start mb-2"
        >
          <Image
            src={ImageAvatar}
            alt=""
            width={40}
            height={40}
            className="rounded-3xl m-1 border border-sky-700"
          />
          <span className="ml-1 text-sm font-bold">{user.name}</span>
        </Link>
        <div className="border rounded">
          <Image
            src={ImageURL}
            alt=""
            className="w-full rounded"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-col items-center justify-start border-b border-sky-700 mt-2 mb-2">
          <h3 className="font-bold text-sm md:text-md lg:text-lg">
            {post.title}
          </h3>
          <p className="text-md text-sky-950 text-sm ">{post.body}</p>
        </div>
        <div className="flex-col items-center justify-center duration-200">
          <Comment postID={1} key={1} userId={1} />
        </div>
      </div>
    </div>
  );
}

export default MainPost;
