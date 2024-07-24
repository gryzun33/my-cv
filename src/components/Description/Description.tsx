import './Description.scss';
import photo from '../../assets/images/photo_2023-06-27.jpeg';

function Description(): JSX.Element {
  return (
    <div className="descr-wrapper">
      <div className="top-element">
        <div className="top-line"></div>
      </div>
      <div className="descr-content">
        <div className="descr-photo">
          <img src={photo} alt="my-photo" />
        </div>
        <div className="descr-text">
          <h1 className="title">
            <span>Olga </span>
            <span>Yakusheva</span>
          </h1>
          <h2 className="subtitle">Junior Frontend developer</h2>
          <div className="about">
            {/* <h2>About myself</h2> */}
            <p>
              I've been studying vanilla JavaScript for quite some time, currently immersed in
              learning React, Next.js and all the supporting libraries. My strengths are
              responsibility, communication skills, attention to detail. In my previous life I
              worked as a electrical design engineer for power supply and lighting, but after
              maternity leave I decided to try my hand at programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
