import React from "react";
import { Button, Card } from "@mui/material";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ data }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: 300,
        minWidth: 300,
        height: 350,
      }}
    >
      <CardMedia sx={{ height: 140 }} image={data.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description.length > 150
            ? data.description.slice(0, 150) + "..."
            : data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={data.host} target="_">
          <Button size="small">View</Button>
        </a>
        <a href={data.gitHubLink} target="_">
          <Button size="small">Github</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
