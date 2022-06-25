import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import Card from "../../components/Card";
import { useInfiniteQuery } from "react-query";
import { fetchActivites } from "../../api";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import FilterContext from "../../components/Context/FilterContext";
import axios from "axios";

function Activities() {
  const { result } = useContext(FilterContext);
  //holding allActivitiy datas
  const [allData, setAllData] = useState("");
  //for all datas

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_ENDPOINT}/activities`)
      .then((res) => setAllData(res.data));
  }, [result]);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("Activities", fetchActivites, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 8;
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });
  if (status === "loading") return "Loading...";
  if (status === "error") return "An error has occurred: " + error.message;

  //filtered activities
  const filtered = allData
    ? allData.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(result.toLowerCase())
        );
      })
    : "";

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={1}>
        {/* filtre yoksa çalışacak */}
        {data.pages.map((group, index) => (
          <React.Fragment key={index}>
            {result === "" &&
              group.map((activity, index) => (
                <Box w="100%" key={index}>
                  <Card Activity={activity} />
                </Box>
              ))}
          </React.Fragment>
        ))}
        {/* filtre varsa çalışacak */}
        {result !== "" &&
          allData.length !== 0 &&
          filtered &&
          filtered.map((activity, index) => (
            <Box w="100%" key={index}>
              <Card Activity={activity} />
            </Box>
          ))}
      </Grid>
      <Flex mt="10" justifyContent="center" p={10}>
        <Button
          isLoading={isFetchingNextPage}
          colorScheme="teal"
          variant="ghost"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
}

export default Activities;
