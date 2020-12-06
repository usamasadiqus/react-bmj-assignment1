import React from "react";
import ReactDOM from "react-dom";
import MainImage from "./images/mainImage.jpg";
import UserImage from "./images/userImage.jpg";
import MainImage2 from "./images/mainImage2.jpg";
import UserImage2 from "./images/userImage2.jpg";
import MainImage3 from "./images/mainImage3.jpg";
import UserImage3 from "./images/userImage3.jpg";
import "./index.css";

const Heading = () => {
  return (
    <div className="heading">
      <h1>Facebook Post</h1>
    </div>
  );
};

const FacebookPost = (props) => {
  const { userImage, userName, date, time, title, mainText, mainImage } = props;
  return (
    <div className="container">
      <div className="one">
        <div className="user_image">
          <img src={userImage} alt="User Image" />
        </div>
        <div className="postDetails">
          <span className="one">
            {userName} <span>shared a link.</span>
          </span>
          <span className="two">
            {date} at {time}
          </span>
        </div>
      </div>
      <div className="two">
        <h2>{title}</h2>
        <p>{mainText}</p>
        <a href="#">See more</a>
      </div>
      <div className="three">
        <img src={mainImage} alt="Image" />
      </div>
      <div className="four">
        <span>
          <i className="fa fa-thumbs-up"></i> <i className="fa fa-envelope"></i>{" "}
          <i className="fa fa-mail-forward (alias)"></i>
        </span>
        <span>173 comments 5 shares</span>
      </div>
      <div className="five">
        <button>
          <span>
            <i className="fa fa-thumbs-up"></i>
          </span>{" "}
          Like
        </button>
        <button>
          <span>
            <i className="fa fa-envelope"></i>
          </span>{" "}
          Comment
        </button>
        <button>
          <span>
            <i className="fa fa-mail-forward (alias)"></i>
          </span>{" "}
          Share
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <>
    <Heading />
    <FacebookPost
      userImage={UserImage}
      userName="Usama Sadiq"
      date="5-12-2020"
      time="1:21"
      title="This is post title"
      mainText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit maxime cupiditate deserunt veniam vitae quaerat aliquam delectus tenetur eos!"
      mainImage={MainImage}
    />
    <FacebookPost
      userImage={UserImage2}
      userName="Car Design"
      date="5-12-2020"
      time="1:21"
      title="This is post title"
      mainText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit maxime cupiditate deserunt veniam vitae quaerat aliquam delectus tenetur eos!"
      mainImage={MainImage2}
    />
    <FacebookPost
      userImage={UserImage3}
      userName="Gun Design"
      date="5-12-2020"
      time="1:21"
      title="This is post title"
      mainText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit maxime cupiditate deserunt veniam vitae quaerat aliquam delectus tenetur eos!"
      mainImage={MainImage3}
    />
  </>,
  document.getElementById("root")
);
