import { Text } from "@/components/Text";
import { ItemForm } from "@/components/Admin/Forms/ItemForm";

import { useRequireAuth, useCatalog } from "@/hooks";

import { AddItemPageWrapper } from "./styled";

const AddItem = (): JSX.Element => {
  useRequireAuth();

  return (
    <AddItemPageWrapper>
      <Text type="h1">Добавить товар</Text>
      <ItemForm />
    </AddItemPageWrapper>
  );
};

export default AddItem;
