interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran', 
        year: 2015
    }
}

/* const song = 'New Song'; */

// Renombrar variable desestructurada
const { song:anotherSong, 
    songDuration:duration,
    // details: {author}
} = audioPlayer;

const { details } = audioPlayer;
const { author } = details;

console.log('Song: ', audioPlayer.song);
console.log('Song: ', anotherSong);
console.log('Author: ', audioPlayer.details.author);
console.log('Author: ', author);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Duration: ', duration);


const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];


console.error('Personaje 3:', trunks);



export {};