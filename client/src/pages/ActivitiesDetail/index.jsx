import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchActivity } from "../../api";
import { Box, Button, Text } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
function ActivitiesDetail() {
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
  return (
    <div>
      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <p>{data.description}</p>
      <span>{data.tarih.start}</span> -{"  "}
      <span>{data.tarih.end} Tarihlerinde</span>
      <p>{data.location}'da!</p>
    </div>
  );
}

export default ActivitiesDetail;
