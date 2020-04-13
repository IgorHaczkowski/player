import { typeOfMedia } from './SocialMediaWidget'
export interface playerInterface {
    startPlaying(): void;
    stopPlaying(): void;
    setTime(time: number): void;
    shareOnSocialmedia(selectedChanel: typeOfMedia): void;
}