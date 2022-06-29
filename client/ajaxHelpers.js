// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2206-FTB-ET-WEB-FT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
         try {
          const response = await fetch(`${APIURL}/players`);
          const result = await response.json();
          if (result.error) throw result.error;
          return result.data.players;
        } catch (err) {
          console.error('Uh oh, trouble fetching players!', err);
        }
      };


export const fetchSinglePlayer = async (playerId) => {
try  {
  console.log (`${APIURL}/players/${playerId}`)
  const singlePlayer = await fetch(`${APIURL}/players/${playerId}`);
  const result = await singlePlayer.json();
  if(result.error) throw result.error;
  return result.data.player
} 
catch (err) {
  console.error('Uh oh, trouble fetching players!', err);
}
};

export const addNewPlayer = async (playerID) => {
  try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Rufus',
          breed: 'Irish Setter',
        }),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

export const removePlayer = async (playerId) => {

};
