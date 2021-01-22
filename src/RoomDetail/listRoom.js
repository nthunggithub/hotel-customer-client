import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
    width: 300,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ListRoom({rooms}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        <GridListTile  cols={2} style={{ height: '40px' }}>
        </GridListTile>
        {rooms.map((tile) => (
          <GridListTile key={tile.Image}>
            <img src={tile.Image? tile.Image : "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/46/2016/10/03040240/3-Nagas-Luang-Prabang-MGallery-By-Sofitel-Superior-double.jpg"} style={{height:"120px"}} alt="" />
        </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
