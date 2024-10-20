import searchIcon from '../assets/icon-search.svg';
import React from 'react';
import './Filter.css';

export default function Filter()
{

    const searchHandler = () => {
        const searchList = document.getElementById('searchList');
        const Lists = document.querySelectorAll('.list');
        const movieName = document.querySelectorAll('.movie');
        const searchInput = document.getElementById('searchInput');
        const result = document.getElementById('resultTit');
        const trendTitle = document.getElementById('trendTitle');
        const recommendTitle = document.getElementById('recommendTitle');

        let movieNum = 0;

        movieName.forEach(movie => {
            if(movie.id.toLowerCase().includes(searchInput.value.toLowerCase())) {
                movie.style.display = 'block';
                movieNum++;
            }
            else
            {
                movie.style.display = 'none';
            }
        })
        
        if(searchInput.value.trim() !== '')
        {
            searchList.style.display = 'flex';
            Lists.forEach(list => {
                list.style.display = 'none';
            });
            if(trendTitle !== null)
            {
                trendTitle.style.display = 'none';
                recommendTitle.style.display = 'none';
            }
            result.innerHTML = `Found ${movieNum} results for ${searchInput.value}`;
        }
        else
        {
            searchList.style.display = 'none';
            Lists.forEach(list => {
                list.style.display = 'flex';
            });
            if(trendTitle !== null)
            {
                trendTitle.style.display = 'block';
                recommendTitle.style.display = 'block';
            }
            result.innerHTML = '';
        }

    }

    return(
        <>
            <img id='searchIcon' width={29} src={searchIcon} />
            <input id='searchInput' type='text' placeholder='Search for movies or TV series' onInput={searchHandler} />
            <h1 id='resultTit'></h1>
        </>
    );
}