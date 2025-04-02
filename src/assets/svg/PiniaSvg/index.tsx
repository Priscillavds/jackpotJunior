import styles from './styles.module.scss';
import image from '../Icons/11.svg';

interface SymbolSvgProps {
  animate?: boolean;
}

const PiniaSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img
    aria-hidden={true}
    src={image}
    alt="Watermeloen"
    className={animate ? styles['shake-all'] : ''}
    style={{padding: '10px' }}
  />
  );
};

export { PiniaSvg };
