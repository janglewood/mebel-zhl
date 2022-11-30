import { useRouter } from "next/router";

import { ItemForm } from "@/components/Admin/Forms/ItemForm";

import { AdminItemPageWrapper } from "./styled";

const CatalogItem = (): JSX.Element => {
  const {
    query: { id },
  } = useRouter();

  return (
    <AdminItemPageWrapper>
      <ItemForm isEditing id={id as string} />
    </AdminItemPageWrapper>
  );
};

export default CatalogItem;
