import React from 'react';

import { Main } from 'views';

const stats = [
  {
    stat: 'str',
    value: 12,
  },
  {
    stat: 'dex',
    value: 9,
  },
  {
    stat: 'int',
    value: 9,
  },
  {
    stat: 'wis',
    value: 10,
  },
  {
    stat: 'cha',
    value: 13,
  },
  {
    stat: 'con',
    value: 17,
  }
];


const modifiers = [
  {
    stat: 'Armor Class',
    value: 17
  },
  {
    stat: 'To Hit',
    value: 4,
  },
  {
    stat: 'Initiative',
    value: 4,
  },
  {
    stat: 'Movement',
    value: '30',
  },
]

function App() {
  const statsWithBonus = stats.map(stat => {
    if (stat.value <= 10) return {
      ...stat,
      bonus: '0',
    };
    return {
      ...stat,
      bonus: (stat.value % 10)
    };
  });

  return (<>
    <Main
      stats={ statsWithBonus }
      modifiers={ modifiers }
    />
  </>
  );
}

export default App;
