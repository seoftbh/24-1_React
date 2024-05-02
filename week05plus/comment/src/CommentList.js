import React from "react";
import Comment from "./Comment";
const comments = [
  {
    name: "홍길동",
    comment: "안녕하세요~",
  },
  {
    name: "김길동",
    comment: "잘 보고 갑니다^^",
  },
  {
    name: "박길동",
    comment: "화이팅!",
  },
];

function CommentList(props) {
  return (
    <div>
      {/* <Comment name="홍길동" comment="안녕하세요~" />
      <Comment name="김길동" comment="잘 보고 갑니다^^" />
      <Comment name="박길동" comment="화이팅!" /> */}
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}
export default CommentList;
