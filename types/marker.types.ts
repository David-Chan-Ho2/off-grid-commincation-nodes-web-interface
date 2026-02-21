export interface IMarker {
    id: number
    label: string
    position: [number, number]
    neighbors: [number, number][]
}