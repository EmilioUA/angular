interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: SongDetails;
}

interface SongDetails{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New song';

const {
    song:anotherSong, 
    songDuration:duration, 
    details
} = audioPlayer;

console.log(anotherSong, duration);
const {author} = details;
console.log(author);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

const [, , trunks = 'Not found'] = dbz;
console.log(trunks);

//Resumir lineas de codigo, desestructurando un objeto
export {}