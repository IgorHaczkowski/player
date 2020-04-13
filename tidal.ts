import { musicPlayer } from './musicPlayer'

export class Tidal extends musicPlayer {
    constructor(name: string, artist: string, time: number) {
        super('Tidal', name, time, artist)
    }
}