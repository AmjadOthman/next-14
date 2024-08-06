"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AvatarImage from "../../../../public/noavatar.png";
import Post from "@/Components/Post/post.jsx";
import Loading from "@/Components/Loading/loading";
import axios from "axios";

function ProfilePage({ params }) {
  const id = params.slug;
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoading, setIsUserLoading] = useState(true);

  {
    const getUser = async (id) => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const getPostsByUserId = async (id) => {
      try {
        const response = await axios.get(
          ` https://jsonplaceholder.typicode.com/posts/?userId=${id}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      getUser(id);
      getPostsByUserId(id);
    });
  }

  return (
    <div className="w-full flex-col items-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container flex-col items-center justify-center m-2 p-2 w-1/2 rounded  border-sky-600 bg-white shadow-lg">
            <div className="flex-col justify-center items-center w-full">
              <center>
                <Image
                  alt="Image"
                  src={AvatarImage}
                  width={200}
                  height={200}
                  className=" border-2 border-sky-600 rounded-full "
                />
              </center>

              <ul className="text-sky-600  p-2 my-2  text-center">
                <li className="font-bold text-sm md:text-lg">{user.name}</li>
                <li className="mt-2 text-sm md:text-lg">{user.username}</li>
                <li className="mt-2 text-sm md:text-lg">{user.email}</li>
                <li className="mt-2 text-sm md:text-lg">{user.address.city}</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-3 p-2 m-2 gap-2">
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
