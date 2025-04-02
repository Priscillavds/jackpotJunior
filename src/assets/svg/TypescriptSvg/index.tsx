import styles from './styles.module.scss';
import image from '../Icons/4.svg';

interface SymbolSvgProps {
  animate?: boolean;
}
const TypescriptSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img
    aria-hidden={true}
    src={image}
    alt="Watermeloen"
    className={animate ? styles.icon : ''}
    style={{padding: '10px' }}
  />
  );
};

export { TypescriptSvg };
