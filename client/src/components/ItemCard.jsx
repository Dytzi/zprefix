import { CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import CardActionArea from '@mui/material/CardActionArea';

const ItemCard = ({ id, user_id, name, description, quantity }) => {
  const navigate = useNavigate();

  if (description.length > 100) {
    description = description.slice(0, 99);
    description += "...";
  }

  function handleCardClick() {
    navigate(`/details/${id}`)
  }

  return (
    <Card>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography style={{ fontWeight: 'bold' }}>{name}</Typography>
          <Typography>{description}</Typography>
          <Typography>{quantity}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
