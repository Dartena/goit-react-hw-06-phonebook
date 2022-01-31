import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import contactsAction from "../../store/contacts/actions";
import { getFilter } from "../../store/contacts/selectors";
import { FormLabel, Input, Text } from "../styles/styled";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterId = nanoid();

  const onChange = (value) => dispatch(contactsAction.changeFilter(value));

  const onChangeHandler = (event) => {
    const { value } = event.target;
    onChange(value.toLowerCase());
  };

  return (
    <FormLabel htmlFor={filterId}>
      <Text>Find contact by name</Text>
      <Input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={onChangeHandler}
        id={filterId}
      />
    </FormLabel>
  );
}

export default Filter;
