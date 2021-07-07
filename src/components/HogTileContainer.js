import HogTile from "./HogTile";
import { v4 as uuidv4 } from "uuid";

const HogTileContainer = ({ hogs }) => {
  return (
    <div className="ui eight wide column">
      {hogs.map((hog) => {
        return <HogTile key={uuidv4()} hog={hog} />;
      })}
    </div>
  );
};

export default HogTileContainer;
