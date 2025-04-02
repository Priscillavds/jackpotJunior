import { LIGHTS_NUMBER } from '@/game-configs';
import styles from './styles.module.scss';

interface LightsProps {
  blink: boolean;
}

const Lights: React.FC<LightsProps> = ({ blink }) => {
  return (
    <div className={styles['lights']}>
   
    </div>
  );
};

export { Lights };
