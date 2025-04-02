import styles from './AngularSvg/styles.module.scss';
import image from './Icons/8.svg';

interface SymbolSvgProps {
  animate?: boolean;
}

const ReactSvg: React.FC<SymbolSvgProps> = ({ animate = false }) => {
  return (
    <img
    aria-hidden={true}
    src={image}
    alt="Watermeloen"
    className={animate ? styles.fade : ''}
    style={{padding: '10px' }}
  />
  );
};

export { ReactSvg };
