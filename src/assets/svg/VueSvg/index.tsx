import image from '../Icons/2.svg';
import styles from './styles.module.scss';
interface SymbolSvgProps {
  animate?: boolean;
}

const VueSvg: React.FC<SymbolSvgProps> = ({ animate = false }) => {
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

export { VueSvg };
