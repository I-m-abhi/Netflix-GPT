import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({poster})=> {

  return (
    <div className="w-52 pr-4">
      <img src={IMG_CDN_URL + poster} alt="MovieCard" />
    </div>
  )
};

export default MovieCard;