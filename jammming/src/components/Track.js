
function Track(props) {
    const { track } = props;

    return (
        <li>
            <div>{track.title}</div>
            <div>{track.artist} | {track.album}</div>
        </li>
    )
};

export default Track;