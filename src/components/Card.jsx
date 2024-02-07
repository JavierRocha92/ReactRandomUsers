/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Card.css";
// eslint-disable-next-line no-unused-vars
export const Card = ({ name, user, image, age }) => {
    
    const {follow, setFollow} = useState(false)
    
    const handleClick = () => {
        setFollow(!follow)
    }

    const textButton = (follow) ? 'Following' : 'Follow'
  return (
    // <!-- aside card profile matt groening-->
    <div className="card card--aside mt-4 col-12 m-2 position-realative">
      {/* <!-- card heder --> */}
      <header className="card__header"></header>
      {/* <!-- card avatar --> */}
      <img
        src={image}
        className="card-img-top position-absolute rounded-circle"
        alt="..."
      />
      {/* <!-- card desciption --> */}
      <main className="card-body mt-5 d-flex flex-column">
        <h3 className="card-title w-100 text-center">{name}</h3>
        <p className="card-text w-100 text-center m-0">{`@${user}`}</p>
        <div className="card__social  d-flex justify-content-center">
          <i className="fa-brands m-3 fs-2 fa-youtube card__icon--aside card__icon--red"></i>
          <i className="fa-brands m-3 fs-2 fa-facebook card__icon--aside card__icon--skyblue"></i>
          <i className="fa-brands m-3 fs-2 fa-instagram card__icon--aside card__icon--magenta"></i>
          <i className="fa-brands m-3 fs-2 fa-linkedin card__icon--aside card__icon--blue"></i>
        </div>
        <div className="cars__buttons d-flex justify-content-center">
          <p href="#" className="btn bg-primary text-light m-2" onClick={handleClick}>
            {textButton}
          </p>
          <p href="#" className="btn bg-primary text-light m-2">
            Message
          </p>
        </div>
      </main>
      {/* <!-- card footer --> */}
      <footer className="card__footer d-flex justify-content-around">
        <p className="card_footer__text">
          <i className="fa-regular fa-comment"></i>&nbsp;&nbsp;16K
        </p>
        <p className="card_footer__text">
          <i className="fa-regular fa-heart"></i>&nbsp;&nbsp;22.3K
        </p>
        <p className="card_footer__text">
          <i className="fa-solid fa-square-share-nodes"></i>&nbsp;&nbsp;6.8K
        </p>
      </footer>
    </div>
  );
};
