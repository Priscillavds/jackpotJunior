import styles from './styles.module.scss';
import image from '../Icons/6.svg';

interface SymbolSvgProps {
  animate?: boolean;
}

const JavascriptSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
      <img
        aria-hidden={true}
        src={image}
        alt="Sorbet"
        className={animate ? styles.icon : ''}
        style={{padding: '10px' }}
      />
    );
};

export { JavascriptSvg };
