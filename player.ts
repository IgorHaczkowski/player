export class player {
    protected playerType: string;
    protected trackName: string;
    protected artist?: string;
    protected LenghtInSec: number;
    protected currentTime: number = 0;

    constructor(playerType: string, trackName: string, LenghtInSec: number, artist?: string, ) {
        this.playerType = playerType;
        this.trackName = trackName;
        this.LenghtInSec = LenghtInSec;
        this.artist = artist;
    }

    protected setTimeToMinutes(): string {
        if (this.currentTime % 60 < 10) {
            return Math.floor(this.currentTime / 60) + ':0' + this.currentTime % 60;

        }
        else {
            return Math.floor(this.currentTime / 60) + ':' + this.currentTime % 60;

        }
    }
}