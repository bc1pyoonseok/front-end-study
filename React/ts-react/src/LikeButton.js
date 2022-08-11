import React from "react";

function LikeButton() {
  const [Liked, setLiked] = React.useState(false);
  if (Liked) {
    return <button onClick={() => setLiked(false)}>unlike</button>;
  }

  return <button onClick={() => setLiked(true)}>like</button>;
}

export default LikeButton;
