export type typeOfMedia = 'Facebook' | 'Twitter';
export interface SocialMediaWidget {

    shareOnSocialmedia(selectedChanel: typeOfMedia): void;
}