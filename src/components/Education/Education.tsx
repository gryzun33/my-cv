import './Education.scss';

function Education(): JSX.Element {
  return (
    <section id="education" className="education">
      <h2>&nbsp;Education&nbsp;</h2>
      <ul>
        <li>
          Belarusian Nationed Technical University,
          <br />
          Engineering Faculty, 2005-2010, diploma with honour
        </li>
        <li>
          In programming:
          <ul>
            <li>
              <span>
                RS School JavaScript/Front-end course 2020 Q3 (
                <a href="https://app.rs.school/certificate/r56htpdu" target="_blank">
                  certificate
                </a>
                )
              </span>
            </li>
            <li>
              <span>
                RS School JavaScript/Front-end course Stage 0 2023 (
                <a href="https://app.rs.school/certificate/68buru3p" target="_blank">
                  certificate
                </a>
                )
              </span>
            </li>
            <li>
              <span>
                RS School JavaScript/Front-end course 2023 Q4 (
                <a href="https://app.rs.school/certificate/f1573obn" target="_blank">
                  certificate
                </a>
                )
              </span>
            </li>
            <li>
              <span>Udemy online-courses</span>
            </li>
            <li>
              <span>
                self-education ({' '}
                <a href="https://learn.javascript.ru/" target="_blank">
                  learn.javascript.ru
                </a>
                ,{' '}
                <a href="https://github.com/azat-io/you-dont-know-js-ru" target="_blank">
                  You don't know JS
                </a>
                ) and others
              </span>
              <span></span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Education;
