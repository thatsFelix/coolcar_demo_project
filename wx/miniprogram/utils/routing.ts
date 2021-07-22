export namespace routing {
    export interface DrivingOpts {
        trip_id: string
    }

    export function driving(o: DrivingOpts) {
        return `/pages/driving/driving?trip_id=${o.trip_id}`
    }
}