import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchActivity } from "../../api";
import { Box, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import styles from "./styles.module.css";
import Tilt from "react-parallax-tilt";
import cities from "../../cities.json";
import { useEffect, useState } from "react";

function ActivitiesDetail() {
  const [themeMode, setThemeMode] = useState("");
  //maps

  window.addEventListener("storage", myFunction);
  function myFunction(event) {
    setThemeMode(localStorage.getItem("chakra-ui-color-mode"));
  }
  window.onstorage = () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(
      JSON.parse(window.localStorage.getItem("chakra-ui-color-mode"))
    );
  };
  const { Activity_id } = useParams();

  const { isLoading, error, data } = useQuery(
    ["Activity", { Activity_id }],
    () => fetchActivity(Activity_id)
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const images = data.photos.map((photo) => ({
    original: photo,
    thumbnail: photo,
  }));

  const city = cities.filter((city) => city.name === data.location);
  console.log(themeMode);
  return (
    <>
      <Box className={styles.content}>
        <Box className={styles.imgGalleryArea}>
          <ImageGallery items={images} className={styles.imgGallery} />
        </Box>
        <Box className={styles.ActivityDetailsArea}>
          <Text as="h2" fontSize="2xl">
            {data.title}
          </Text>
          <Box className={styles.ActivitiesDetail}>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              <Tilt
                className={
                  themeMode === "light"
                    ? styles.parallaxEffectGlareScale
                    : styles.parallaxEffectGlareScaleLight
                }
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
              >
                <div className={styles.infoCards}>
                  <span>{data.tarih.start}</span> <br />-<br />
                  <span>{data.tarih.end} </span>{" "}
                </div>
              </Tilt>

              <Tilt
                className={styles.parallaxEffectGlareScale}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
              >
                <div className={styles.infoCards}>{data.location}</div>
              </Tilt>

              <Tilt
                className={styles.parallaxEffectGlareScale}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
              >
                <div className={styles.infoCards}>
                  {" "}
                  {data.price !== 0
                    ? "Ücret : " + data.price + "TL"
                    : "Ücretsiz"}{" "}
                </div>
              </Tilt>
              <GridItem colSpan={3}>
                <Tilt
                  className={styles.desc}
                  perspective={500}
                  glareEnable={true}
                  glareMaxOpacity={0.45}
                  scale={1.02}
                >
                  <div className={styles.infoCards}>{data.description}</div>
                </Tilt>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box className={styles.footer}></Box>
    </>
  );
}

export default ActivitiesDetail;
