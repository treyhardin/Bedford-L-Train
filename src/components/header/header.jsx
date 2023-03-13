import styles from './header.module.css'

function Header(props) {


  return (
    <header class={styles.header}>
      <div class={styles.logoWrapper}>
        <div class={styles.logo}>L</div>
        <p>The Bedford L</p>
      </div>
    </header>
  )
}

export default Header