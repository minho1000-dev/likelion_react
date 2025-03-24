const PostItem = ({ title, body, username, email }) => {
  return (
    <article className="postItem">
      <h2>{title}</h2>
      <p>{body}</p>
      {!!username && (
        <div className="user">
          <div className="avatar">{username[0]}</div>
          <div className="name">{username}</div>
          <div className="email">{email}</div>
        </div>
      )}
    </article>
  );
};

export default PostItem;
