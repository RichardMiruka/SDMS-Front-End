import React, { useEffect, useState } from 'react';
import { Bracket, Seed, SeedItem, SeedTeam } from 'react-brackets';
import { useLocation } from 'react-router-dom';

const TournamentBracket = () => {
  const [rounds, setRounds] = useState([]);
  const location = useLocation();
  const Teams = location.state.players;

  useEffect(() => {
    const generateRounds = (teams) => {
      // Calculate number of byes and add them to the teams array
      // ...

      // Generate rounds based on teams with byes
      const rounds = [];
      let currentRoundTeams = [...teamsWithByes];

      while (currentRoundTeams.length > 1) {
        // Create matches for the current round
        const matches = [];
        for (let i = 0; i < currentRoundTeams.length; i += 2) {
          const teamA = currentRoundTeams[i];
          const teamB = currentRoundTeams[i + 1];
          const match = {
            id: i / 2 + 1,
            date: new Date().toDateString(),
            teams: [
              { name: teamA.name },
              { name: teamB.name },
            ],
          };
          matches.push(match);
        }

        // Add the matches to the rounds
        const roundTitle = rounds.length + 1;
        rounds.push({ title: `Round ${roundTitle}`, seeds: matches });

        // Update currentRoundTeams for the next iteration
        currentRoundTeams = matches.map((match) => ({ id: match.id }));
      }

      return rounds;
    };

    const generatedRounds = generateRounds(Teams);
    setRounds(generatedRounds);
  }, [Teams]);

  const renderSeedComponent = ({ seed, breakpoint, roundIndex, seedIndex }) => {
    const homeTeam = seed.teams[0];
    const awayTeam = seed.teams[1];
    const hasBye = homeTeam.bye || awayTeam.bye;

    return (
      <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
        {getRoundType(roundIndex, Teams.length, seedIndex)}
        <SeedItem>
          <SeedTeam className='bg-red-500 text-white'>
            <div>
              <div>{gametype(homeTeam.name, roundIndex, Teams.length, 2 * seedIndex + 1)}</div>
              {homeTeam.bye && <div>Bye</div>}
            </div>
            {homeTeam.score && <div className='ml-2 text-black'>{homeTeam.score}</div>}
          </SeedTeam>
          <SeedTeam className='bg-blue-500 text-white'>
            <div>
              <div>{gametype(awayTeam.name, roundIndex, Teams.length, (2 * seedIndex + 1) + 1)}</div>
              {awayTeam.bye && <div>Bye</div>}
            </div>
            {awayTeam.score && <div className='ml-2 text-black'>{awayTeam.score}</div>}
          </SeedTeam>
        </SeedItem>
        {hasBye && <div>{awayTeam.name ? `${awayTeam.name} wins` : '---- wins'}</div>}
      </Seed>
    );
  };

  const getRoundType = (roundIndex, numTeams, seedIndex) => {
    // Determine round type (Finals, SemiFinals, Quarters, or Match)
    // ...
  };

  const gametype = (hTeam, roundIndex, numTeams, seedIndex) => {
    // Determine the type of the game (team name or winner info)
    // ...
  };

  return <Bracket rounds={rounds} renderSeedComponent={renderSeedComponent} />;
};

export default TournamentBracket;
