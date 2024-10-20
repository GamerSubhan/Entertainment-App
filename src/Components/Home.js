import React, { useEffect, useState } from "react";
import "./Home.css";
import bookmarkIcon from '../assets/icon-bookmark-empty.svg';
import playIcon from '../assets/icon-play.svg';

export default function Home(props)
{
    function saveFilm()
    {
        console.log('saved!');
    }

    return(
        <>
            {props.props.isTrending ? ( 
            <>
                <div id="bookmarkCanvas" className="bookmark" onClick={saveFilm} style={{width: '30px', height: '30px', marginLeft: '23vw'}}>
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
            </>           
            ) :
            <>
                <div id="bookmarkCanvas" className="bookmark" style={{width: '20px', height: '20px', marginLeft: '14vw'}}>
                    <img width={10} height={12} src={bookmarkIcon} style={{marginBottom: '-0.2vh'}} />
                </div>
                <h3>{props.props.title}</h3>
                <ul style={{marginTop: '24vh'}}>
                    <li>{props.props.year}</li>
                    <li>{props.props.category}</li>
                    <li>{props.props.rating}</li>
                </ul>
            <div id="playDiv" style={{width: '19.7%', height: '10.8%'}} className="hidden-play-div">
                <div id="playBtn" style={{height: '20%', marginTop: '11vh'}}>
                    <img width={25} height={25} style={{marginLeft: '-2vw', marginTop: '0.6vh'}} src={playIcon} />
                    <p style={{marginTop: '1.1vh', marginLeft: '2.5vw', fontSize: '0.9em'}}>Play</p>
                </div>
            </div>
            </>}
        </>
    );
}