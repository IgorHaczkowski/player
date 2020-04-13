import { playerInterface } from './playerInterface'
import { player } from './player'
import { typeOfMedia } from './SocialMediaWidget'

export class musicPlayer extends player implements playerInterface {
    constructor(player: string, name: string, time: number, artist: string) {
        super(player, name, time, artist)
    }
    public startPlaying(): void {
        if (this.currentTime < this.LenghtInSec) {
            console.log(`${this.playerType}: The song ${this.trackName} by ${this.artist} is playing at ${this.setTimeToMinutes()}.`);
            this.currentTime++;
        }
        else {
            console.log(`${this.playerType}: The song ${this.trackName} by ${this.artist} is over.`);
        }
    };
    public stopPlaying(): void {
        console.log(`${this.playerType}: The song ${this.trackName} by ${this.artist} has been stopped at ${this.setTimeToMinutes()}`);
    }

    public setTime(time: number): void {
        if (time > this.LenghtInSec || time < 0) {
            console.log(`Wrong value! Please, set time value between 0 and song lenght value! `)
        }
        else {
            this.currentTime = time;
            console.log(`${this.playerType}: The song ${this.trackName} by ${this.artist} is set at ${this.setTimeToMinutes()}`)
        }
    }
    public shareOnSocialmedia(selectedChanel: typeOfMedia): void {
        console.log(`${this.playerType}: The song ${this.trackName} by ${this.artist} has been shared on ${selectedChanel}`)
    }
}