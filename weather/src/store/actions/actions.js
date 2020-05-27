export const SELECT_LOCATION = 'SELECT_LOCATION';
export const INVALIDATE_LOCATION = 'INVALIDATE_LOCATION';

export function selectLocation(location){
    return{
        type: SELECT_LOCATION,
        location
    }
}

export function invalidateLocation(location){
    return{
        type: INVALIDATE_LOCATION,
        location
    }
}