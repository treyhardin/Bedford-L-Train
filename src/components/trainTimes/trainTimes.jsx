import { createSignal } from 'solid-js'
import DepartureGroup from '../departureGroup/departureGroup'
import fetchTrainTimes from '../fetchTrainTimes/fetchTrainTimes'
import styles from './trainTimes.module.css'

const [trainTimes, setTrainTimes] = createSignal()

function TrainTimes(props) {

  const updateInterval = 3 // Seconds

  const updateTimes = () => {
    fetchTrainTimes().then(data => setTrainTimes(data))
  }

  updateTimes()
  setInterval(updateTimes, 1000 * updateInterval)

  return (
    <div class={styles.trainTimes}>
      <Show when={trainTimes()}>
          <DepartureGroup label={'Brooklyn'} times={trainTimes().northboundTimes.slice(0,4)} />
          <DepartureGroup label={'Manhattan'} times={trainTimes().southBoundTimes.slice(0,4)} />
        </Show>
    </div>
  )
}

export default TrainTimes