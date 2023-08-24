import { useDispatch } from "react-redux";

import { Button } from "@mantine/core";
import { addToSecond } from "~/store/store";

export const AddToSecondButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        size="xl"
        onClick={() => {
          dispatch(addToSecond());
        }}
      >
        Add to Second
      </Button>
    </div>
  );
};

export default AddToSecondButton;
