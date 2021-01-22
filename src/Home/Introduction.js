import React, { useState, useEffect } from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import RightArrowIcon from "@material-ui/icons/ArrowRight";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: 500,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  carouselContainer: {
    display: "flex",
    minWidth: 500,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  dotContainer: {
    display: "flex",
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "relative",
    height: typeof window !== "undefined" ? (window.innerHeight * 3) / 5 : 450,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  slideSkeletonView: {
    width: 500,
    height: (typeof window !== "undefined" ? (window.innerHeight * 3) / 5 : 450)+50,
  }
}));

export default function Introduction(props) {
  const { images } = props;
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(0);
  const [timer, setTimer] = useState(0);
  //slide animation
  const [check, setCheck] = useState(true);
  const [slideDirection, setSlideDirection] = useState("left");

  useEffect(() => {
    setTimer(5);
  }, []);

  const changeImage = (image) => {
    if (image === selectedImage) return;
    if (image < selectedImage) {
      setSlideDirection("right");
    } else setSlideDirection("left");
    setCheck(false);
    setSelectedImage(image);
  };

  useEffect(() => {
    if (timer === 0) {
      let nextImg;
      if (selectedImage === images.length - 1) nextImg = 0;
      else nextImg = selectedImage + 1;
      changeImage(nextImg);
      setTimer(5);
    } else {
      const timeOut = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [timer]);

  useEffect(() => {
    setCheck(true);
  }, [selectedImage]);

  return (
    <div className={classes.root}>
      {check ? (
        <Slide in={check} direction={slideDirection}>
          <div className={classes.carouselContainer}>
            {images.map((image, index) => (
              <>
                {selectedImage === index ? (
                  <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    style={{ width: "70%" }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${image.url})`,
                      }}
                    />
                  </ButtonBase>
                ) : (
                  <span />
                )}
              </>
            ))}
            <span style={{ width: "15%" }} />
            {images.map((image, index) => (
              <>
                {selectedImage === index - 1 ||
                (selectedImage === images.length - 1 && index === 0) ? (
                  <ButtonBase
                    onClick={() => {
                      changeImage(index);
                      setTimer(5);
                    }}
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    style={{ width: "15%" }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${image.url})`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <RightArrowIcon fontSize="large" />
                    </span>
                  </ButtonBase>
                ) : (
                  <span />
                )}
              </>
            ))}
          </div>
        </Slide>
      ) : (
        <div className={classes.slideSkeletonView}></div>
      )}

      <div className={classes.dotContainer}>
        {images.map((image, index) => (
          <>
            {selectedImage === index ? (
              <span
                style={{
                  width: 10,
                  height: 10,
                  marginInline: 10,
                  borderRadius: 10,
                  backgroundColor: "#033A56",
                }}
              />
            ) : (
              <ButtonBase
                onClick={() => {
                  changeImage(index);
                  setTimer(5);
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    marginInline: 10,
                    borderRadius: 10,
                    backgroundColor: "#033A56",
                    opacity: 0.5
                  }}
                />
              </ButtonBase>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
