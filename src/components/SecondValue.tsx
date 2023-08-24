import { useSelector } from "react-redux";
import { Text } from "@mantine/core";
import { type RootState } from "~/store/store";
export const SecondValue = () => {
  const secondNumber = useSelector((state: RootState) => state.secondNumber);

  return (
    <Text size="xl" p={5}>
      Second Value: {secondNumber}
    </Text>
  );
};

export default SecondValue;
