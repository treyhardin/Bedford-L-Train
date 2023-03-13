import styles from './departureItem.module.css'

function DepartureItem(props) {

  // console.log(props.time)

  const getTimeUntil = (time) => {

      const minutes = -time / (1000*60)
      const minutesRounded = Math.round(minutes)

      if (minutesRounded < 1) {
        return {minutes: '<1', label: 'min'}
      }
      
      if (minutesRounded == 1) {
        // return `${minutesRounded} min`
        return {minutes: minutesRounded, label: 'min'}
      }

      if (minutesRounded > 1) {
        // return `${minutesRounded} mins`
        return {minutes: minutesRounded, label: 'mins'}
      } 
  }

  return (
    <div class={styles.departureItem}>
      <p class={styles.departureMinutes}>{getTimeUntil(props.time).minutes}</p>
      <p class={styles.departureMinutesLabel}>{getTimeUntil(props.time).label}</p>
    </div>
  )
}

export default DepartureItem