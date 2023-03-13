import { For } from 'solid-js'
import DepartureItem from '../departureItem/departureItem'
import styles from './departureGroup.module.css'

function DepartureGroup(props) {
  return (
    <div class={styles.departureGroup}>
      <h2>{props.label}</h2>
      <div class={styles.departuresWrapper}>
        <For each={props.times}>{(time, i) => 
          <DepartureItem time={time} key={i}/>
        }
        </For>
      </div>
    </div>
  )
}

export default DepartureGroup