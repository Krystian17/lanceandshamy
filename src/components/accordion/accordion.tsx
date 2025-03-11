import DropdownIcon from '../../Icons/dropdown.js';
import { ReactNode, useRef, useState } from 'react';
import styles from './styles/accordion.module.css';

type propType = {
  title: ReactNode;
  description: ReactNode;
};

const Accordion = ({ title, description }: propType) => {
  const contentHeight = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);

  const OpenHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.card} onClick={OpenHandler}>
      <div className={`${styles.title} ${isOpen ? styles.active : ''}`}>
        {title}
        <DropdownIcon fill={'black'} height={'1.25rem'} width={'1.25rem'} />
      </div>
      <div ref={contentHeight} style={isOpen ? { height: contentHeight.current?.scrollHeight } : { height: '0px' }} className={`${styles.details}`}>
        {description}
      </div>
    </div>
  );
};

export default Accordion;