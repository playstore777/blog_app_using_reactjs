import React from "react";

const PostCard = ({ post }) => {
    console.log("PostCard : ", post);
    return (
        <div>
            {post.title}
            {post.excerpt}
        </div>
    );
};

export default PostCard;
