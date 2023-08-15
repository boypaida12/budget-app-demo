import { Grid, GridItem, HStack } from "@chakra-ui/react";

import TotalExpence from "../../Components/Data and chart/TotalExpence";
import TotalBudget from "../../Components/Data and chart/TotalBudget";
import DataChart from "../../Components/Data and chart/DataChart";
import ExpenseBreakdown from "../../Components/ExpenseBreakdown";

const Home = () => {
  return (
    <Grid templateColumns="repeat(10,1fr)" mt={4} p={4} columnGap={3}>
      <GridItem colSpan={6}>
        <HStack mb={10}>
          <TotalExpence />
          <TotalBudget />
        </HStack>
        <DataChart />
      </GridItem>
      <GridItem colSpan={4}>
        <ExpenseBreakdown />
      </GridItem>
    </Grid>
  );
};

export default Home;
