import "./App.css";

import Header from "./components/Header";
import PostItem from "./components/PostItem";
import useFetch from "./hooks/useFetch";
// import usePosts from "./hooks/usePosts";
// import useUsers from "./hooks/useUsers";

function App() {
  // const { posts, isPostsLoading, hasPostsError } = usePosts();
  // const { users, isUsersLoading, hasUsersError } = useUsers();

  const {
    data: users = [],
    isLoading: isUsersLoading,
    hasError: hasUsersError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const {
    data: posts = [],
    isLoading: isPostsLoading,
    hasError: hasPostsError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (isPostsLoading || isUsersLoading) {
    return (
      <div className="blogContainer">
        <Header />
        <div>블로그 글을 로딩중입니다...</div>
        <br />
        <div>잠시만 기다려주세요!</div>
      </div>
    );
  }

  if (hasPostsError || hasUsersError) {
    return (
      <div className="blogContainer">
        <Header />
        <div>블로그 글을 불러오는 중에 에러가 발생했습니다.</div>
        <br />
        <div>새로고침을 눌러 다시 시도해주세요!</div>
      </div>
    );
  }

  return (
    <div className="blogContainer">
      <Header />
      {posts.map((post) => {
        const userId = post.userId;

        const user = users.find((user) => user.id === userId);

        return (
          <PostItem
            key={post.id}
            title={post.title}
            body={post.body}
            username={user?.username}
            email={user?.email}
          />
        );
      })}
    </div>
  );
}

export default App;
