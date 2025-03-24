import { useState, useEffect } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [hasPostsError, setHasPostsError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsPostsLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        setPosts(data);
      } catch {
        setHasPostsError(true);
      } finally {
        setIsPostsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return {
    posts,
    isPostsLoading,
    hasPostsError,
  };
};

export default usePosts;
