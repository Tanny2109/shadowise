function shadowise(props) {
    let images = document.querySelectorAll('.shadowise');

    if (props.shadowType === 'hard') {
        props.shadowType = '0px';
    } else {
        props.shadowType = '15px';
    }

    images.forEach(i => {
        i.style.boxShadow = `10px 10px ${props.shadowType} 1px rgba(0,0,0, 0.12)`;

        if (props.padding) {
            i.style.padding = '1em';
        }
    })
}

module.exports.shadowise = shadowise;