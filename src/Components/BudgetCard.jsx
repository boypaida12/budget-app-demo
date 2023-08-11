import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Progress,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const BudgetCard = () => {
  const state = useSelector((state) => {
    return state.appReducer;
  });

  //   const dispatch = useDispatch();
  return (
    <>
      <Flex mt={10} gap={5}>
        {state.budget.map((budget) => {
          const isGreen = budget.finance < budget.amount;
          return (
            <Card
              key={budget.id}
              maxW="sm"
              borderTop={isGreen ? "5px solid limegreen" : "5px solid crimson"}
            >
              <CardBody>
                <Heading size="sm">{budget.name}</Heading>
                <Flex mt={4} fontSize="sm">
                  <Text>GHS {budget.finance}</Text> {/*finance amount = 100*/}
                  <Text ms="auto">GHS {budget.amount}</Text>{" "}
                  {/*budget amount = 200*/}
                </Flex>
                <Progress
                  rounded={5}
                  colorScheme={isGreen ? "whatsapp" : "red"}
                  hasStripe
                  my={2}
                  isAnimated
                  value={(budget.finance / budget.amount) * 100}
                />
                <Flex align="center" mt={4} gap={4}>
                  <Text fontSize="xs" fontStyle="italic" color="gray.600">
                    {budget.description}...
                  </Text>
                  <Button
                    ms="auto"
                    size="xs"
                    variant="outline"
                    colorScheme="whatsapp"
                    py={2}
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

export default BudgetCard;