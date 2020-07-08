import React from "react";

class Comment extends React.Component {
	render() {
        const {comment}=this.props;
		return (
			<div className="post-comment-item">
				<div className="post-comment-header">
					<span className="post-comment-author">{comment.user.name}</span>
					<span className="post-comment-time">A minute Ago</span>
					<span className="post-comment-likes">{comment.likes.length} likes</span>
				</div>
                    <div className="post-comment-content">{comment.content}</div>
			</div>
		);
	}
}

export default Comment;