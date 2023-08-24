import { useDispatch } from "react-redux";
import { addToFirst } from "~/store/store";
import { Button } from "@mantine/core";
export const AddToFirstButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      size="xl"
      onClick={() => {
        dispatch(addToFirst());
      }}
    >
      Add to First
    </Button>
  );
};

export default AddToFirstButton;
