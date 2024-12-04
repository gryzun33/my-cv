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
          <h2 className="subtitle">Frontend developer</h2>
          <div className="about">
            {/* <h2>About myself</h2> */}
            <p>
              Hello. My name is Olga. I've been studying JavaScript for quite a long time, currently
              I'm immersed in studying Next.js and all supporting libraries. I also recently
              finished Node.js course and now I have basic knowledge of NestJS, as well as
              experience with PostgreSQL database and Docker. During my studies I managed to
              participate in team projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
