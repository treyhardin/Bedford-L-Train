import styles from './footer.module.css'

function Footer(props) {


  return (
    <footer class={styles.footer}>
      <p>A side project by <a href="https://www.treyhardin.com/" target='_blank'>Trey Hardin</a></p>
    </footer>
  )
}

export default Footer