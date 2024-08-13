import Styles from './features.module.scss';
import Icon from '../../public/images/icon.svg'
import Image from 'next/image';

const Features = () => {
  return (
    <div className={Styles.container}>
      <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis
        assumenda ipsa dolore ullam incidunt deserunt id.
      </p>

      <div className={Styles.features}>
        <div className={Styles.feature}>
          <Image src={Icon} alt='icon' classsname={Styles.icon}  />
          <h1>Digital Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sint ab velit est. 
          </p>
        </div>

        <div className={Styles.feature}>
          <Image src={Icon} alt='icon' classsname={Styles.icon} />
          <h1>Estratégia Digital</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sint ab velit est. 
          </p>
        </div>

        <div className={Styles.feature}>
          <Image src={Icon} alt='icon' classsname={Styles.icon} />
          <h1>Social Midia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sint ab velit est. 
          </p>
        </div>

        <div className={Styles.feature}>
          <Image src={Icon} alt='icon' classsname={Styles.icon} />
          <h1>Social Midia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sint ab velit est. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
