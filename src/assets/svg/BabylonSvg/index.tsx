import image from '../Icons/1.svg';
import styles from './styles.module.scss';

interface SymbolSvgProps {
  animate?: boolean;
}

const BabylonSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img
      aria-hidden={true}
      src={image}
      alt="Coconut"
      className={animate ? styles.icon : ''}
      style={{padding: '10px' }}
    />
  );
};

export { BabylonSvg };
