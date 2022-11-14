import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import Missions from '../data/missions';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((item) => {
          const itemName = item.name;
          const itemImg = item.image;
          console.log(item);
          return (
            <PlanetCard
              key={ itemName }
              planetName={ itemName }
              planetImage={ itemImg }
            />
          );
        })}
      </div>
    );
  }
}

export default SolarSystem;
