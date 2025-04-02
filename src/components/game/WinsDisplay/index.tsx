import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { State } from '@/store/types';
import { Lights } from '@/components';
import { useCounter } from '@/hooks';
import styles from './styles.module.scss';

const WinsDisplay: React.FC = () => {
  const credits = useSelector((state: State) => state.slotMachine.credits);
  //const freeSpins = useSelector((state: State) => state.slotMachine.freeSpins);
  const winPayLines = useSelector((state: State) => state.slotMachine.winPayLines);
  const [t] = useTranslation();

  const displayedCredits = useCounter(credits);
  //const displayedFreeSpins = useCounter(freeSpins);

  return (
    <header className={styles['wins-display']}>
      <div
        title={t('slot.creditsDescription', { credits })}
        aria-label={t('slot.creditsDescription', { credits })}
      >
        <p className={styles['wins-display__tag']}>{t('slot.credits')}</p>
        <div className={styles['wins-display__display-wrapper']}>
          <span className={styles['wins-display__coin']}></span>
          <p className={styles['wins-display__display']}>{displayedCredits}</p>
        </div>
      </div>
      <div>
        <Lights blink={!!winPayLines?.length} />
      </div>

    </header>
  );
};

export { WinsDisplay };
