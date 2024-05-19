interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//Desestructuración en muchos sitios vaya

const { song: anotherSong, songDuration, details } = audioPlayer;
const { author, year } = details;

console.log("Song: ", anotherSong)
console.log("Duration: ", songDuration)
console.log("Author: ", author, "Year: ", year)

const [, , trunks = 'Not found']: string[] = ["Goku", "Vegeta", "Trunks"];

console.log("3: ", trunks)


export{}