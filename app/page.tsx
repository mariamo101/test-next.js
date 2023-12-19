import styles from './page.module.css'
import Button from './componets/Button/Button'

export default function Home() {
   return (
      <main className={styles.main}>

         <div className={styles.center}>
            <Button mode='outline' title='რეგისტრაცია' />
         </div>
      </main>
   )
}
