import Styles from './footer.module.scss';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../../public/images/instagram.svg';
import Facebook from '../../public/images/facebook-f.svg';
import Linkedin from '../../public/images/linkedin.svg';
import Youtube from '../../public/images/youtube.svg';

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
        <Image src={Logo} alt='Logo' />
        <h1 className={Styles.title}>0800 800 800</h1>
        <p>comercial@agencia.com br</p>
      </div>
      <div className={Styles.column}>
        <h1>Menu</h1>
        <p>Quem somos</p>
        <p>Cases</p>
      </div>
      <div className={Styles.column}>
        <h1>Conteúdo</h1>
        <p>E-books</p>
        <p>Fórmulas prontas</p>
      </div>
          <div className={`${Styles.column} ${Styles.alignRight}`}>
        <h1>Social</h1>
        <Link href='/'>
          <Image src={Instagram} alt='instagram_icon' />
        </Link>
        <Link href='/'>
          <Image src={Facebook} alt='facebook_icon' />
        </Link>
        <Link href='/'>
          <Image src={Linkedin} alt='linkedin_icon' />
        </Link>
        <Link href='/'>
          <Image src={Youtube} alt='youtube_icon' />
        </Link>
      </div>
      <div className={Styles.allRightReserved}>
        @2022 AGENCIA - Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
