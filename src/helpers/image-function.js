import pokemon from '../images/pokedex-landing-page.png';
import budgeter from '../images/ultimate-budgeter-budget-page.png';
import menu from '../images/personal-menu-landing-page.png';
import adspec from '../images/adspec-after.png';
import serp from '../images/serp.png';
import profile from '../images/profile-app.png';
import weather from '../images/weather-app.png';
import hacker from '../images/hackernews.png';
import spotify from '../images/spotify-app.png';
import youtube from '../images/youtube-api.png';


export const imageFunction = type => {
  const obj = {
    "Pokémon API": pokemon,
    "Ultime Budgeter": budgeter,
    "Your Personal Menu": menu,
    "Adhesives Specialists": adspec,
    "React Search Engine Results Page": serp,
    "Profile App": profile, 
    "Weather API": weather,
    "HackerNews API": hacker, 
    "Spotify API": spotify, 
    "Youtube API": youtube, 

  }
  return obj[type] 
}
