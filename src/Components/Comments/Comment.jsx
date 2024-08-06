import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function Comment({ postID }) {
  const [isCmnt, setIsCmnt] = useState(false);
  const [cmnts, setCmnts] = useState([]);
  const [isShowCmnt, setIsShowCmnt] = useState(false);

  const handleCmnt = () => {
    if (isShowCmnt) {
      setIsShowCmnt(false);
      setIsCmnt(true);
    }
    setIsCmnt(!isCmnt);
  };

  const handleShowCmnt = () => {
    if (isCmnt) {
      setIsCmnt(false);
      setIsShowCmnt(true);
    }
    setIsShowCmnt(!isShowCmnt);
  };

  const upload = () => {};

  const getComments = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
      );
      setCmnts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="container w-full mb-2 border-b border-sky-700 flex-col  items-center justify-between ">
      <div className="flex items-center justify-between">
        <span
          className="text-sm md:text-md cursor-pointer hover:border-b hover:border-sky-700 "
          onClick={handleShowCmnt}
        >
          ({cmnts.length}) comments
        </span>

        <button
          className="rounded p-1 m-2 bg-sky-700 text-white "
          onClick={handleCmnt}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      {isCmnt && (
        <div className="flex items-center justify-between w-full mt-2 ">
          <input
            type="textarea"
            id="comment"
            placeholder="Comment..."
            className="p-2 w-full rounded border border-sky-600 "
          />
          <button
            className="rounded p-2 ml-2 bg-sky-700 text-white text-sm md:text-md"
            onClick={upload}
          >
            Upload
          </button>
        </div>
      )}
      {isShowCmnt && (
        <ul className="list-disc pl-5 w-full mt-2 ">
          {cmnts.map((comment) => (
            <li className="m-2" key={comment.id}>
              <Link
                href={``}
                className="text-sm font-bold hover:text-sky-800 duration-200 "
              >
                {comment.email}
              </Link>
              : {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Comment;
