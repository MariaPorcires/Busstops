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


export type { Coords, Data, StopLocation, Stop }