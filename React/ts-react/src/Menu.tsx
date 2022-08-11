import React from 'react';

const Menu: React.FC = () => {
  const [Game, setGame] = React.useState(false)
  if (!Game) {
    return (
      <button onClick={() => setGame(true)}>game start!</button>
    );
  }
  else {
    return (
      <button onClick={() => setGame(false)}>game end!</button>
    );
  }
}

export default Menu;