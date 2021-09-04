import classes from "./TeamCard.module.css";

const TeamCard = ({ hero }) => {
  return (
    <div className={classes["my-team"]}>
      <img src={hero.image} alt="img_hero" />
      <p>{hero.name}</p>
    </div>
  );
};

export default TeamCard;
