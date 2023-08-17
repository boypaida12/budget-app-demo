/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Progress,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  enableBudgetButton,
  clearEnabledCard,
  disableBudgetButton,
  enableCard,
} from "../slices/appSlices";

const ExpenseCard = () => {
  const state = useSelector((state) => {
    return state.appReducer;
  });

  const dispatch = useDispatch();
  const enabledCardId = useSelector((state) => state.appReducer.enabledCardId);
  const handleCardClick = (budget) => {
    if (budget.id === enabledCardId) {
      console.log("card clicked");
      dispatch(clearEnabledCard());
      dispatch(disableBudgetButton());
    } else {
      console.log("card unclicked");
      dispatch(enableCard(budget.id));
      dispatch(enableBudgetButton());
    }
  };
  return (
    <>
      <Flex mt={10} gap={5}>
        {state.budget.map((budget) => {
          const isCardEnabled = budget.id === enabledCardId;

          return (
            <Card
              key={budget.id}
              maxW="sm"
              borderTop="5px solid crimson"
              cursor={isCardEnabled ? "default" : "pointer"}
              filter={isCardEnabled ? "grayscale(0%)" : "grayscale(80%)"}
              opacity={isCardEnabled ? "1" : "0.6"}
              onClick={() => handleCardClick(budget)}
            >
              <CardBody>
                <Heading size="sm">{budget.name}</Heading>
                <Flex mt={4} fontSize="sm">
                  <Text ms="auto">
                    GHS {budget.finance} / {budget.amount}
                  </Text>
                </Flex>
                <Progress
                  rounded={5}
                  colorScheme="red"
                  hasStripe
                  my={4}
                  isAnimated
                  value={(budget.finance / budget.amount) * 100}
                />
                <Flex align="center" mt={4} gap={4}>
                  <Text fontSize="xs" fontStyle="italic" color="gray.600">
                    {budget.description.substring(0, 25)}...
                  </Text>
                  <Button
                    ms="auto"
                    size="xs"
                    variant="outline"
                    colorScheme="whatsapp"
                    py={3}
                    isDisabled
                  >
                    View Details
                  </Button>
                </Flex>
              </CardBody>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};

export default ExpenseCard;
