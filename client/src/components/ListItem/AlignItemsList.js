/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function AlignItemsList(props) {
  const [image, setImage] = React.useState(null);

  const setImageBase64 = () => {
    let binary = "";
    let bytes = new Uint8Array(props?.data?.image?.data?.data);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64String = window.btoa(binary);

    setImage(base64String);
  };

  React.useEffect(() => {
    setImageBase64();
  }, [props]);

  return (
    <List sx={{ width: "100%" }}>
      <Link
        to={`/${props?.data._id}`}
        className="link"
        state={{ clickedItem: props?.data }}
      >
        <ListItem
          alignItems="flex-start"
          
        >
          <ListItemAvatar>
            <Avatar
              alt={props?.data?.alt}
              src={`data:image/png;base64,${image}`}
              sx={{ height: '70px', width: '70px', marginRight: "1.5rem", border: "2px solid #003761"}}
            />
          </ListItemAvatar>
          <ListItemText
            primary={props?.data?.product_name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props?.data?.brand}
                </Typography>
                {` : ${props?.data?.description}`}
                <br />
                <h5>{`$${props?.data?.price}`}</h5>
              </React.Fragment>
            }
          />
        </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
    </List>
  );
}
