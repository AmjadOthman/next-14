"use client";
import MainPost from "@/Components/Post/MainPost";
import axios from "axios";
import Loading from "@/Components/Loading/loading";
import { useEffect, useState } from "react";

const Home = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setResponse(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            response.map((post) => (
              <MainPost key={post.id} post={post} userId={post.userId} />
            ))
          )}
        </div>
      }
    </>
  );
};

export default Home;
