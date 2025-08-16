// let recentMatchesUrl = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent";
// let schedulesUrl = "https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international";
// let ipl2024SeriesDataUrl = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/7607";

// IPL 2025 SeriesId = 9237;
// ICC Champions Trophy seriesId = 9325;
// Prasanna Acc RapidApiKey = "6de356196emsh9372a9a29f0aa3ep193c86jsnd3ede874f40f";
// Venkat Acc RapidApiKey = 'X-RapidAPI-Key': '61d9bfef16mshda08d3acba62c32p1ffea2jsn14544ec4f699',
// Prasanna.AI RapidApiKey = f00dab47a2msh5a50ea7d07d5f82p1d08ddjsn774959f4806c;

// let iplTeamsDataUrl = "https://cricbuzz-cricket.p.rapidapi.com/teams/v1/59/results";


// let ipl2025SeriesDataUrl = "https://crickbuzz-official-apis.p.rapidapi.com/series/9237";
// let seriesSquardsUrl = "https://crickbuzz-official-apis.p.rapidapi.com/series/9237/squads"
// let cskSquardUrl = "https://crickbuzz-official-apis.p.rapidapi.com/series/9237/squads/56917";
// let seriesStatsUrl = "https://crickbuzz-official-apis.p.rapidapi.com/series/9237/stats?statType=statType";
// let seriesPointTableUrl = 'https://crickbuzz-official-apis.p.rapidapi.com/series/9237/pointtable?seriesID=9237';
// let seriesVenuesUrl = 'https://crickbuzz-official-apis.p.rapidapi.com/series/9237/venues?seriesID=9237';
// let playerDetailsUrl = "https://crickbuzz-official-apis.p.rapidapi.com/browse/player";
// let options = {
//   method: 'GET',
//   headers: {
//     // 'X-RapidAPI-Key': '6de356196emsh9372a9a29f0aa3ep193c86jsnd3ede874f40f',
//     // 'X-RapidAPI-Key': '61d9bfef16mshda08d3acba62c32p1ffea2jsn14544ec4f699',
//     'X-RapidAPI-Key': 'f00dab47a2msh5a50ea7d07d5f82p1d08ddjsn774959f4806c',
//     'X-RapidAPI-Host': 'crickbuzz-official-apis.p.rapidapi.com'
//     // 'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com' // venkat acc rapidapi host
//   }
// };

// fetch(playerDetailsUrl, options)
// .then(response => response.json())
// .then((data) => {
//     let seriesData = JSON.stringify(data);
//     localStorage.setItem("IPL2025_Venue", seriesData);
//     console.log(data);
// })
// .catch(err => console.error(err));


//console.log(matchDetails);
// let matchIdData = {};
// let matchIdArray = [];
// for(let i = 0; i < matchDetails.length; i++){
//     let data = {
//         matchNo: i+1,
//         matchId: matchDetails[i].matchDetailsMap.match[0].matchInfo.matchId
//     };
//     // console.log(data);
//     matchIdArray[i] = data;
//     //localStorage.setItem("matchId", JSON.stringify(matchIdData));
//     // console.log(matchDetails[i].matchDetailsMap.match[0].matchInfo.matchId);
// }
// console.log(matchIdArray);
// console.log(ipl_2025_SeriesInfo);
// let allMatchesIdsData = JSON.parse(localStorage.getItem("IPL2025_AllMatchesIdsData"))
// console.log(allMatchesIdsData);

// let matchDetailsUrl = 'https://crickbuzz-official-apis.p.rapidapi.com/match/';
// let allMatchesDetailsArray = [];
// for(let i = 0; i < allMatchesIdsData.length; i++){
//     let { matchId } = allMatchesIdsData[i];
//     // console.log(matchId);
//     fetch(matchDetailsUrl+matchId, options)
//     .then(response => response.json())
//     .then((data) => {
//         console.log(matchDetailsUrl+matchId);
//         let seriesData = JSON.stringify(data);
//         allMatchesDetailsArray[i] = seriesData;
//         // console.log(seriesData);
//         // localStorage.setItem("IPL2025_AllMatchesDetails", seriesData);
//         // console.log(seriesData);
//     })
//     .catch(err => console.error(err));
//     localStorage.setItem('sample', 'hi');
// }

let matchCardBgContainer = document.getElementById('matchCardBgContainer');
let bgColorBtn = document.getElementById('bgColorBtn');
bgColorBtn.onclick = () => {
  if(document.body.classList.contains('dark-theme')){
    bgColorBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  }
  else{
    bgColorBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
  }
  document.body.classList.toggle('dark-theme');
};

let iplTeamsLogos = {
  RCB: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257084/rcb_logo-removebg-preview_ileadz.png",
  CSK: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755256970/csk-removebg-preview_ryslxo.png",
  DC: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257005/dc_logo-removebg-preview_poburb.png",
  GT: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257016/gt_logo-removebg-preview_on1lrc.png",
  KKR: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257025/kkr_logo-removebg-preview_bsedof.png",
  LSG: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257041/lsg_logo-removebg-preview_os9qim.png",
  MI: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257054/mi_logo-removebg-preview_mzk0r5.png",
  PBKS: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257069/pbks_logo-removebg-preview_paywqz.png",
  RR: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257101/rr_logo_zqrdkg.jpg",
  SRH: "https://res.cloudinary.com/dwxqqx0oe/image/upload/v1755257168/srh_logo-removebg-preview_rpdpbx.png"
};


let containerEl = document.createElement('div');
containerEl.classList.add('container','pt-5');
matchCardBgContainer.appendChild(containerEl);

let rowEl = document.createElement('div');
rowEl.classList.add('row');
containerEl.appendChild(rowEl);

let createAndAppendIplMathcSectionCards = (matchDataObject) =>{
  
  let {date, matchDesc, matchFormat, status,  teamOne, teamTwo, venueInfo} = matchDataObject;
  let {city, ground} = venueInfo;
  let colEl = document.createElement('div');
  colEl.classList.add("col-12", "col-md-6", "mt-1", "p-3");
  colEl.id = matchDesc;
  rowEl.appendChild(colEl);

  //match date
  let matchDateEl = document.createElement('p');
  matchDateEl.textContent = date;
  matchDateEl.id = "matchDate";
  matchDateEl.classList.add("match-date", "mb-2"); //, 'text-white'
  colEl.appendChild(matchDateEl);
  // console.log(matchDate);

  let matchCardContainerEl = document.createElement('div');
  matchCardContainerEl.id = "matchCardContainer";
  matchCardContainerEl.classList.add('match-card', 'w-100', 'shadow-lg'); //, 'bg-dark', 'text-white'
  colEl.appendChild(matchCardContainerEl);

  let matchNumberEl = document.createElement('p');
  matchNumberEl.textContent = matchDesc +" "+ matchFormat + ", " + ground + ", " + city + ", India";
  matchNumberEl.classList.add('match-number','mt-0', 'mb-0');
  matchCardContainerEl.appendChild(matchNumberEl);

  let divOneEl = document.createElement('div');
  divOneEl.classList.add('d-flex', 'flex-row', 'justify-content-between', 'mb-0');
  matchCardContainerEl.appendChild(divOneEl);

  // team one
  let teamOneContainerEl = document.createElement('div');
  teamOneContainerEl.classList.add('d-flex', 'flex-row', 'p-2');
  divOneEl.appendChild(teamOneContainerEl);

  let teamOneImgEl = document.createElement('img');
  teamOneImgEl.src = iplTeamsLogos[teamOne.teamSName];
  teamOneImgEl.alt = "team_logo";
  teamOneImgEl.classList.add('team-logo');
  teamOneContainerEl.appendChild(teamOneImgEl);

  let teamInfoOneEl = document.createElement('div');
  teamInfoOneEl.classList.add('team-info', 'mt-1', 'ml-4');
  teamOneContainerEl.appendChild(teamInfoOneEl);

  let teamOneNameEl = document.createElement('p');
  teamOneNameEl.textContent = teamOne.teamSName;
  teamOneNameEl.classList.add('team-short-name', 'mb-0'); //, 'text-white'
  teamInfoOneEl.appendChild(teamOneNameEl);

  
  let teamOneScoreEl = document.createElement('p');
  teamOneScoreEl.textContent = teamOne.runs + "/" + teamOne.wickets;
  teamOneScoreEl.classList.add('team-score');
  teamInfoOneEl.appendChild(teamOneScoreEl);

  let teamOneOversEl = document.createElement('span');
  teamOneOversEl.textContent = teamOne.overs;
  teamOneOversEl.classList.add('team-overs');
  teamOneScoreEl.appendChild(teamOneOversEl);
  
  // team two 
  let teamTwoContainerEl = document.createElement('div');
  teamTwoContainerEl.classList.add('d-flex', 'flex-row', 'p-2');
  divOneEl.appendChild(teamTwoContainerEl);

  let teamInfoTwoEl = document.createElement('div');
  teamInfoOneEl.classList.add('team-info-2', 'mt-1','mr-0');
  teamTwoContainerEl.appendChild(teamInfoTwoEl);

  let teamTwoNameEl = document.createElement('p');
  teamTwoNameEl.textContent = teamTwo.teamSName;
  teamTwoNameEl.classList.add('team-short-name', 'mb-0'); //, 'text-white'
  teamInfoTwoEl.appendChild(teamTwoNameEl);

  let teamTwoScoreEl = document.createElement('p');
  teamTwoScoreEl.textContent = teamTwo.runs + "/" + teamTwo.wickets;
  teamTwoScoreEl.classList.add('team-score');
  teamInfoTwoEl.appendChild(teamTwoScoreEl);

  let teamTwoOversEl = document.createElement('span');
  teamTwoOversEl.textContent = teamTwo.overs;
  teamTwoOversEl.classList.add('team-overs');
  teamTwoScoreEl.appendChild(teamTwoOversEl);

  let teamTwoImgEl = document.createElement('img');
  teamTwoImgEl.src = iplTeamsLogos[teamTwo.teamSName];
  teamTwoImgEl.alt = "team_logo";
  teamTwoImgEl.classList.add('team-logo','team-logo-2');
  teamTwoContainerEl.appendChild(teamTwoImgEl);

  // match result 
  let matchResultEl = document.createElement('div');
  matchResultEl.classList.add('match-result', 'mt-0', 'd-flex', 'flex-column', 'text-center', 'justify-content-center');
  matchCardContainerEl.appendChild(matchResultEl);

  let winTeamStatusEl = document.createElement('p');
  winTeamStatusEl.id = "winTeamName";
  winTeamStatusEl.classList.add('win-team-name', 'mb-1');
  winTeamStatusEl.textContent = status;
  matchResultEl.appendChild(winTeamStatusEl);

};


let createTeamDesc = (teamName, teamSName, runs = 0, wickets = 0, overs = 0) => {
  return {
    teamName,
    teamSName,
    runs,
    wickets,
    overs
  };
}

let matchCardDetails = (key, matchDesc, matchFormat,status, state,venueInfo, teamOne, teamTwo) =>{
  return{
    date:key,
    matchDesc,
    matchFormat,
    status,
    state,
    venueInfo,
    teamOne,
    teamTwo
  };
};

let matchInfoFunction = (key, team1, team2, matchInfo, matchScore = {}) =>{
  let {matchDesc, matchFormat, status, state, venueInfo} = matchInfo;
  
  let team1ScoreState = matchScore.hasOwnProperty('team1Score');
  let team2ScoreState = matchScore.hasOwnProperty('team2Score');
  
  let teamOne = createTeamDesc(team1.teamName, team1.teamSName, 0, 0, 0);
  let teamTwo = createTeamDesc(team2.teamName, team2.teamSName, 0, 0, 0);
  if(team1ScoreState && team2ScoreState){
    let {team1Score, team2Score} = matchScore;
    teamOne = createTeamDesc(team1.teamName, team1.teamSName, team1Score.inngs1.runs, team1Score.inngs1.wickets, team1Score.inngs1.overs);
    teamTwo = createTeamDesc(team2.teamName, team2.teamSName, team2Score.inngs1.runs, team2Score.inngs1.wickets, team2Score.inngs1.overs);
  }
  else if(team1ScoreState){
    let {team1Score} = matchScore;
    teamOne = createTeamDesc(team1.teamName, team1.teamSName, team1Score.inngs1.runs, team1Score.inngs1.wickets, team1Score.inngs1.overs );
  }
  else if(team2ScoreState){
    let {team2Score} = matchScore;
    teamTwo = createTeamDesc(team2.teamName, team2.teamSName, team2Score.inngs1.runs, team2Score.inngs1.wickets, team2Score.inngs1.overs);
  }
 
  let matchDataObject = matchCardDetails(key, matchDesc, matchFormat,status, state,venueInfo, teamOne, teamTwo);
  // console.log(matchDataObject);
  
  createAndAppendIplMathcSectionCards(matchDataObject);
};

let allMatchesCardData = () => {
  let ipl_2025_SeriesInfo = JSON.parse(localStorage.getItem("IPL2025_SeriesInfo"));
  let matchDetails = ipl_2025_SeriesInfo.matchDetails;
  //matchDetails.length
  for(let i = 0; i < matchDetails.length; i++){
    let {key, match} = matchDetails[i].matchDetailsMap;
    for(let j = 0; j < match.length; j++){
      let {matchInfo, matchScore} = match[j];
      //check the property is present pr not in the match object
      if(match[j].hasOwnProperty('matchScore')){ // true
        matchInfoFunction(key, matchInfo.team1, matchInfo.team2, match[j].matchInfo, match[j].matchScore);
      }
      else{ // false
        matchInfoFunction(key, matchInfo.team1, matchInfo.team2, match[j].matchInfo);
      }
    }
  }
};

allMatchesCardData();









