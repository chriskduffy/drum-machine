import synth1 from  '../Audio/synth1.mp3'
import synth2 from  '../Audio/synth2.mp3'
import synth3 from  '../Audio/synth3.mp3'
import bass1 from  '../Audio/bass1.mp3'
import bass2 from  '../Audio/bass2.mp3'
import bass3 from  '../Audio/bass3.mp3'
import kick from  '../Audio/kick.mp3'
import shake from  '../Audio/shake.mp3'
import hat from  '../Audio/hat.mp3'

function playAudio (letter) {
    if (letter instanceof Object) { //being passed an event
        letter = letter.target.id;
    }
    let audioFile;
    switch(letter) {
        case 'q':
            audioFile = synth1;
            break;
        case 'w':
            audioFile = synth2;
            break;
        case 'e':
            audioFile = synth3;
            break;
        case 'a':
            audioFile = bass1;
            break;
        case 's':
            audioFile = bass2;
            break;
        case 'd':
            audioFile = bass3;
            break;
        case 'z':
            audioFile = kick;
            break;
        case 'x':
            audioFile = shake;
            break;
        case 'c':
            audioFile = hat;
            break;
        default:
            console.log('Error getting keycode');
    }
    let audio = new Audio(audioFile);
    audio.play()
}

export default playAudio;