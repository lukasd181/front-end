import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const Post = ({post}) => {
    console.log("posts!!!!", post.imageURL)
  return (
    <div>
      <div className="container">
        <div className="user-nav">
          <div className="avatar">
            <span className="avatar-container">
              <img
                src="https://avatars.dicebear.com/api/avataaars/bringthepineapple.svg"
                alt="profilepic"
              />
            </span>
            <div className="user-info">
              <span className="user-name">{post.username}</span>
              <span className="user-location">{post.location}</span>
            </div>
          </div>

          <FontAwesomeIcon icon="edit" />
        </div>

        <div className="picture">
          <img
            src={post.imageUrl}
            width="100%"
          />
        </div>

        <div className="post-function">
          <div className="post-left-functions">
            <FontAwesomeIcon icon="heart" />
            <FontAwesomeIcon icon="comment" />
            <FontAwesomeIcon icon="paper-plane" />
          </div>
          <div className="post-right-functions">
            <FontAwesomeIcon icon="bookmark" />
          </div>
        </div>

        <div className="post-info">
          <div className="likes-info">
            Liked by <span>sherm8n</span> and <span>12 others</span>
          </div>
          <div className="content-info">
            <span className="user-name-info">bringthepineapple</span>
            <div className="content-info" style={{ paddingLeft: "5px:" }}>
              {" "}
              {post.caption}
            </div>
          </div>
          <div className="time-info">16 HOURS AGO</div>
        </div>

        <div className="comment-section">
          <div>Add a comment...</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
