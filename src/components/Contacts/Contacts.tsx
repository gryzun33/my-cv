import './Contacts.scss';
import iconLocation from '../../assets/icons/icon-location.png';
import iconPhone from '../../assets/icons/icon-phone.png';
import iconTelegram from '../../assets/icons/icon-telegram.png';
import iconMail from '../../assets/icons/icon-mail.png';
import iconGithub from '../../assets/icons/icon-github.png';
import iconDiscord from '../../assets/icons/icon-discord.png';
import iconLinkedin from '../../assets/icons/icon-linkedin.png';

function Contacts(): JSX.Element {
  return (
    <section className="contacts">
      <h2>Contacts</h2>
      <ul>
        <li>
          <a
            href="https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.8847295,27.428563,11z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972!16zL20vMGRseGo?authuser=0&entry=ttu"
            target="_blank"
          >
            <img src={iconLocation} alt="location" width="20" height="20" />
            <span>Minsk, Belarus</span>
          </a>
        </li>
        <li>
          <a href="tel:+375297893274" target="_blank">
            <img src={iconPhone} alt="phone" width="20" height="20" />
            <span>+375(29)789&#8209;32&#8209;74</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/YAkusheva2002" target="_blank">
            <img src={iconTelegram} alt="telegram" width="20" height="20" />
            <span>YAkusheva2002</span>
          </a>
        </li>
        <li>
          <a href="yakushevao777@gmail.com" target="_blank">
            <img src={iconMail} alt="mail" width="20" height="20" />
            <span>yakushevao777@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/gryzun33" target="_blank">
            <img src={iconGithub} alt="github" width="20" height="20" />
            <span>gryzun33</span>
          </a>
        </li>
        <li>
          <a href="https://discordapp.com/users/751731565582876774/" target="_blank">
            <img src={iconDiscord} alt="discord" width="20" height="20" />
            <span>yakushevaolga</span>
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/olga-yakusheva-45a00b284" target="_blank">
            <img src={iconLinkedin} alt="linkedin" width="20" height="20" />
            <span>Olga Yakusheva</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
