import styles from './styles.module.scss';
import image from '../Icons/5.svg';

interface SymbolSvgProps {
  animate?: boolean;
}

const CypressSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
      <img
        aria-hidden={true}
        src={image}
        alt="iceCream"
        className={animate ? styles.icon : ''}
        style={{padding: '10px' }}
      />
    );
};

export { CypressSvg };
