import { Text } from "@/components/Text";
import { CatalogItem as CatalogItemInterface } from "interfaces/catalog";
import { CatalogItem, CatalogListWrapper } from "./styled";

interface IProps {
  catalog: CatalogItemInterface[];
  currentItemId: CatalogItemInterface["id"];
  setCurrentItemId: React.Dispatch<
    React.SetStateAction<CatalogItemInterface["id"]>
  >;
}

export const CatalogList = ({
  catalog,
  currentItemId,
  setCurrentItemId,
}: IProps) => {
  return (
    <CatalogListWrapper>
      {catalog.map(({ id, title }) => (
        <CatalogItem
          key={id}
          onClick={() => {
            setCurrentItemId(id);
          }}
          isActive={currentItemId === id}
        >
          <Text type="h2">{title}</Text>
        </CatalogItem>
      ))}
    </CatalogListWrapper>
  );
};
