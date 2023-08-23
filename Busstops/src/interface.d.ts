interface Coords {
    lat: number;
    lon: number;
}

interface Data {
    stopLocationOrCoordLocation: StopLocation[]
  }
  
  interface StopLocation {
    StopLocation: Stop;
  }

  interface Stop {
    dist: number;
    extId: string;
    name: string;
  }

/*  interface Departure {
    name: string;
    direction: string;
    time: string;
  }*/
interface Departure {
  Departure: DepartureInfo[]
}
interface DepartureInfo {
  name: string;
  time: string;
  direction: string;
}
  export type { Data, StopLocation, Coords, Stop, Departure}