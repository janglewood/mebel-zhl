import Link from "next/link";

import { useRequireAuth, useCatalog } from "@/hooks";

import { Button } from "@/components/Admin/Button";
import { Text } from "@/components/Text";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import {
  AdminPageWrapper,
  ButtonsWrapper,
  StyledList,
  StyledListItem,
  StyledPlusIcon,
  StyledRemoveIcon,
  SubHeaderWrapper,
} from "./styled";

import { theme } from "styles/theme";

const Admin = (): JSX.Element => {
  useRequireAuth();

  const { catalog, isLoading, deleteItem } = useCatalog();

  return (
    <AdminPageWrapper>
      {isLoading ? (
        <LoadingSpinner
          color={theme.palette.colors.violet}
          size={64}
          borderSize={8}
          style={{ alignSelf: "center" }}
        />
      ) : (
        <>
          <SubHeaderWrapper>
            <Text type="h1">Каталог</Text>
            <Link href={`/admin/add`} style={{ textDecoration: "none" }}>
              <Button
                variant="primary"
                style={{ padding: "10px 12px", minWidth: "0" }}
              >
                <StyledPlusIcon />
              </Button>
            </Link>
          </SubHeaderWrapper>
          <StyledList>
            {catalog?.map(({ title, id }) => (
              <StyledListItem key={title}>
                <Text type="text">{title}</Text>

                <ButtonsWrapper>
                  <Link
                    href={`/admin/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="secondary" text="Редактировать" />
                  </Link>
                  <Button
                    variant="secondary"
                    style={{ padding: "14px 18px", minWidth: "0" }}
                    isLoading={isLoading}
                    onClick={() => deleteItem(id)}
                  >
                    <StyledRemoveIcon />
                  </Button>
                </ButtonsWrapper>
              </StyledListItem>
            ))}
          </StyledList>
        </>
      )}
    </AdminPageWrapper>
  );
};

export default Admin;
