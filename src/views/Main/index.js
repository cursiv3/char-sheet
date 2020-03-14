import React from 'react';
import { CharacterCard } from 'components';

const Main = () => (
    <div>
        <CharacterCard
            name={'Qip Hardtree'}
            archetype={'Barbarian'}
            level={4}
            gender={'Male'}
            race={'Human'}
        />
    </div>
);


export default Main;