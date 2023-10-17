import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ItemCard = ({ data }) => {
  const handleClick = () => {
    localStorage.setItem("clickedKey", data.key);
    localStorage.setItem("clickedType", data.type);
    localStorage.setItem("clickedImagePath", data.image_path);
    localStorage.setItem("clickedName", data.name);
  };

  return (
    <div
      style={{
        marginRight: "10px",
      }}
    >
      <Link to={`/${data.id}`} className="link">
        {" "}
        <Card
          sx={{
            maxWidth: 345,
            width: 220,
            border: "1px solid darkblue",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <center>
            <CardMedia
              component="img"
              alt={data.alt}
              height="160"
              width="150"
              image={require(`../../assets/images/products/` + data.image_path)}
            />
            <CardContent>
              <Typography gutterBottom variant="" component="div">
                {data.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/${data.key}`} className="link">
                <Stack
                  direction="row"
                  spacing={2}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    justifyItems: "center",
                    marginLeft: 68,
                  }}
                >
                  <Button
                    variant="outlined"
                    href="#outlined-buttons"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    VIEW
                  </Button>
                </Stack>
              </Link>
            </CardActions>
          </center>
        </Card>
      </Link>
    </div>
  );
};

export default ItemCard;