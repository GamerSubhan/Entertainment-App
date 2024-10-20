import "./Movies.css";
import bookmarkIcon from '../assets/icon-bookmark-empty.svg';
import playIcon from '../assets/icon-play.svg';

export default function Movies(props)
{
    function saveMovie(event)
    {
        console.log(event.target.parentNode);
        props.addMovie(event.target.parentNode);
    }

    return(
        <div>
            <div id="bookmarkCanvas" className="bookmark" onClick={saveMovie} style={{width: '30px', height: '30px'}}>
                <img width={15} height={17} src={bookmarkIcon} />
            </div>
            <h2>{props.props.title}</h2>
            <ul>
                <li>{props.props.year}</li>
                <li>{props.props.category}</li>
                <li>{props.props.rating}</li>
            </ul>
            <div id="playDiv" className="hidden-play-div">
                <div id="playBtn" className="plays">
                    <img src={playIcon} />
                    <p>Play</p>
                </div>
            </div>
        </div>
    );
}