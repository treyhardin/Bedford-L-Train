import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import { createSignal } from "solid-js";

// const [trainTimes, setTrainTimes] = createSignal()

export default async function fetchTrainTimes () {

  const stop_id = 'L08'
  const stop_id_north = 'L08N'
  const stop_id_south = 'L08S'

  const updateFrequency = 3 // Seconds

  const realtime_url = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l";

  const stopData = {
    name: 'Bedford Av',
    stopIdNorth: 'L08N',
    stopIdSouth: 'L08S',
    stopId: 'L08'
  }

  const getRelativeTime = (time) => {
    const currentTime = Date.now()
    const diff = currentTime - (time * 1000)
    return diff
  }

  let stopTimes = {
    northboundTimes: [],
    southBoundTimes: []
  };

  try {
    const response = await fetch(realtime_url, {
      method: "GET",
      headers: {
        "x-api-key": import.meta.env.VITE_MTA_API_KEY,
      },
    });
    
    if (!response.ok) {
      // const error = new Error(`${res.url}: ${res.status} ${res.statusText}`);
      console.log('Couldnt fetch data');
    }
    const buffer = await response.arrayBuffer();
    const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
      new Uint8Array(buffer)
    );

    let northboundTimes = []
    let southBoundTimes = []

    feed.entity.forEach((entity) => {

      // console.log(entity)
      
      if (entity.tripUpdate) {
        
        entity.tripUpdate.stopTimeUpdate.forEach((entry) => {

          if (entry.stopId == stopData.stopIdNorth) {
            let relativeTime = getRelativeTime(entry.arrival.time)
            northboundTimes.push(relativeTime)
          }

          if (entry.stopId == stopData.stopIdSouth) {
            let relativeTime = getRelativeTime(entry.arrival.time)
            southBoundTimes.push(relativeTime)
          }
        })
      }
    });

    if(northboundTimes.length > 0) {
      stopTimes.northboundTimes = northboundTimes
    }

    if(southBoundTimes.length > 0) {
      stopTimes.southBoundTimes = southBoundTimes
    }

  }

  catch (error) {
    console.log(error);
  }

  return stopTimes
  // setTrainTimes(stopTimes)

}