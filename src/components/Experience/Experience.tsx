import './Experience.scss';

function Experience(): JSX.Element {
  return (
    <section className="experience">
      <h2>&nbsp;Experience&nbsp;</h2>
      <p className="experience-text">
        As of today I only have projects in my portfolio that I did as part of the Rolling Scopes
        School course, but I think they turned out to be quite individual with their own design and
        I would like to share them with you.
      </p>
      <ul>
        <li>
          <a href="https://gryzun33.github.io/RSS-preschool2023/random-game/" target="_blank">
            Lines 98
          </a>
          <span> - </span>
          <a
            href="https://github.com/gryzun33/RSS-preschool2023/tree/random-game/random-game"
            target="_blank"
          >
            {' '}
            code
          </a>
        </li>
        <li>
          <a href="https://gryzun33-nonograms.netlify.app/" target="_blank">
            Nonograms
          </a>
          <span> - </span>
          <a href="https://github.com/gryzun33/RSS-2023Q4/tree/nonograms/nonograms" target="_blank">
            {' '}
            code
          </a>
        </li>
        <li>
          <a href="https://gryzun33-rss-puzzle.netlify.app/" target="_blank">
            RSS-Puzzle
          </a>
          <span> - </span>
          <a
            href="https://github.com/gryzun33/RSS-2023Q4/tree/rss-puzzle/rss-puzzle"
            target="_blank"
          >
            {' '}
            code
          </a>
        </li>
        <li>
          <a href="https://gryzun33.github.io/RSS-2023Q4/hangman/" target="_blank">
            Hangman
          </a>
          <span> - </span>
          <a href="https://github.com/gryzun33/RSS-2023Q4/tree/hangman/hangman" target="_blank">
            {' '}
            code
          </a>
        </li>
        <li>
          <a href="https://gryzun33.github.io/RSS-preschool2023/audio-player/" target="_blank">
            Audio Player
          </a>
          <span> - </span>
          <a
            href="https://github.com/gryzun33/RSS-preschool2023/tree/audio-player/audio-player"
            target="_blank"
          >
            {' '}
            code
          </a>
        </li>
        <li>
          <a href="https://gryzun33-funchat.netlify.app/login" target="_blank">
            Fun Chat (with Websocket)
          </a>
          <span> - </span>
          <a href="https://github.com/gryzun33/RSS-2023Q4/tree/fun-chat/fun-chat" target="_blank">
            {' '}
            code
          </a>
          <br />
          <span>(note: to see deploy you need to run server)</span>
        </li>
        <li>
          <a href="https://gryzun33.github.io/RSS-preschool2023/image-galery/" target="_blank">
            Image Gallery
          </a>
          <span> - </span>
          <a
            href="https://github.com/gryzun33/RSS-preschool2023/tree/image-galery/image-galery"
            target="_blank"
          >
            {' '}
            code
          </a>
        </li>
        <li>
          <span>EcommerceApp (React, SDK commercetools) - </span>

          <a href="https://github.com/gryzun33/ecommerce-app" target="_blank">
            {' '}
            only code
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Experience;
