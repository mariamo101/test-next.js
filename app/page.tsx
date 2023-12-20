'use client'

import styles from './page.module.css';
import Button from './componets/Button/Button';
import Counter from './componets/Counter/Counter';
import TextInput from './componets/TextInput/TextInput';
import CheckBox from './componets/CheckBox/CheckBox';
import Todo from './componets/Todo/Todo';

export default function Home() {
   return (
      <main className={styles.main}>
         <div className={styles.center}>
            <Todo />
         </div>
      </main>
   );
}

/**
 *  <Button mode='outline' title='რეგისტრაცია' />
 */