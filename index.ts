import { Spotify } from './spotify'
import { Tidal } from './tidal'
import { YouTube } from './youtube'
import { Vimeo } from './vimeo'
function a() {
    console.log('-------------------------------------------------')
}

const song1 = new Spotify('Kryjówka', 'Astrid Lindgren', 170);
const song2 = new Tidal('Enter Sandman', 'Metallica', 300);
const video1 = new Vimeo('Jak ukraść księżyc', 1200);
const video2 = new YouTube('Six songs about love', 600)

song1.startPlaying();
song1.stopPlaying();
song1.startPlaying()
song1.setTime(100);
song1.startPlaying();
song1.startPlaying();
song1.shareOnSocialmedia('Facebook')
song1.shareOnSocialmedia('Twitter')
a();
song2.startPlaying();
song2.stopPlaying();
song2.startPlaying()
song2.setTime(250);
song2.startPlaying();
song2.startPlaying();
song2.shareOnSocialmedia('Facebook')
song2.shareOnSocialmedia('Twitter')
a();
video1.startPlaying();
video1.stopPlaying();
video1.startPlaying()
video1.setTime(1000);
video1.startPlaying();
video1.startPlaying();
video1.shareOnSocialmedia('Facebook')
video1.shareOnSocialmedia('Twitter')
a();
video2.startPlaying();
video2.stopPlaying();
video2.startPlaying()
video2.setTime(450);
video2.startPlaying();
video2.startPlaying();
video2.shareOnSocialmedia('Facebook')
video2.shareOnSocialmedia('Twitter')
a();
