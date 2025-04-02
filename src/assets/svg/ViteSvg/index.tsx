import image from '../Icons/3.svg';
import styles from './styles.module.scss';

interface SymbolSvgProps {
  animate?: boolean;
}

const ViteSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img
    aria-hidden={true}
    src={image}
    alt="Watermeloen"
    className={animate ? styles.icon__bolt : ''}
    style={{padding: '10px' }}
  />
  );
};

export { ViteSvg };
