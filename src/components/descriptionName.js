export default function descriptionName (letter) {
    let audioNames = {
        'q': 'Synth 1',
        'w': 'Synth 2',
        'e': 'Synth 3',
        'a': 'Bass 1',
        's': 'Bass 2',
        'd': 'Bass 3',
        'z': 'Kick',
        'x': 'Shaker',
        'c': 'Hi-Hat'
    }
    return audioNames[letter];                  
};