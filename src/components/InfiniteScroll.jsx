import { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [postCount, setPostCount] = useState(100);

  useEffect(() => {
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight === scrolledTo;
      if (isReachBottom) setPostCount(postCount + 100);
    };
    window.addEventListener("scroll", onscroll);
  }, [postCount]);

  return (
    <>
      Infinite Scroll
      {Array.from({length: postCount}, (_, i) => i + 1).map((num) => (
        <div key={num}>
          Post {num}
        </div>
      ))}
    </>
  )
}

export default InfiniteScroll;