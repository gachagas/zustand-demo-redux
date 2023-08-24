import { useSelector } from "react-redux";
import { Text } from "@mantine/core";
import { type RootState } from "~/store/store";
export const FirstValue = () => {
  const { firstNumber } = useSelector((state: RootState) => state);

  return (
    <Text size="xl" p={5}>
      First Value: {firstNumber}
    </Text>
  );
};

export default FirstValue;
