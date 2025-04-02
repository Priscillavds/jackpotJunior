import styles from './styles.module.scss';
import image from '../Icons/4.svg';

interface SymbolSvgProps {
  animate?: boolean;
}

const AngularSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img
    aria-hidden={true}
    src={image}
    alt="Zon"
    className={animate ? styles.icon : ''}
    style={{padding: '10px' }}
  />
  );
};

export { AngularSvg };
