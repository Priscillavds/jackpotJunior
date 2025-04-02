import styles from './styles.module.scss';
import image from '../Icons/8.svg';

interface SymbolSvgProps {
  animate?: boolean;
}

const PixijsSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img
    aria-hidden={true}
    src={image}
    alt="Watermeloen"
    className={animate ? styles.bounce : ''}
    style={{padding: '10px' }}
  />
  );
};

export { PixijsSvg };
