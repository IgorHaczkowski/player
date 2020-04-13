import { musicPlayer } from './musicPlayer'

export class Spotify extends musicPlayer {
    constructor(name: string, artist: string, time: number) {
        super('Spotify', name, time, artist)
    }
}