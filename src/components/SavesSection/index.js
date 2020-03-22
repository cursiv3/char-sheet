import React from 'react'

const SavesSection = saves => (
    <div>
        { saves.map(save => (<div>
            <div>
                { save.proficient && <li>{ ' ' }</li> }
                <p>{ save.stat }</p>
                <p>+{ save.value }</p>
            </div>
        </div>)
        ) }
    </div>
);

export default SavesSection;
