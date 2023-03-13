import styles from './App.module.css';
import DepartureGroup from './components/departureGroup/departureGroup';
import { createSignal, Show } from 'solid-js';
import fetchTrainTimes from './components/fetchTrainTimes/fetchTrainTimes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import TrainTimes from './components/trainTimes/trainTimes';

function App() {

  return (
    <div class={styles.App}>
      <Header />
      <TrainTimes />
      <Footer />
    </div>
  );
}

export default App;
