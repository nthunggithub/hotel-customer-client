import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1170,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList({rooms}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {rooms.map((tile) => (
          <GridListTile key={tile.Image}>
            <img src={tile.Image} alt="" />
            <Link to={`/roomDetail/${tile.MaP}`}>
                <GridListTileBar title={tile.TenP}
                    actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                        </IconButton>
                    }
                />
            </Link>
        </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
