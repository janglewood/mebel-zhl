import { AdminHeader, AdminLayoutWrapper, ContentWrapper } from "./styled";
import LeftArrowIcon from "@/assets/icons/left-arrow.svg";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { Text } from "@/components/Text";
import { useRequireAuth } from "@/hooks";

export const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { user, logout } = useRequireAuth();

  return (
    <AdminLayoutWrapper>
      {user && (
        <AdminHeader>
          <Button
            variant="secondary"
            onClick={router.back}
            style={{ alignItems: "center", gap: 8 }}
          >
            <LeftArrowIcon />
            <Text type="button-text" color="primary">
              Назад
            </Text>
          </Button>

          <Button
            onClick={logout}
            variant="secondary"
            text="Выйти из аккаунта"
          />
        </AdminHeader>
      )}
      <ContentWrapper>{children}</ContentWrapper>
    </AdminLayoutWrapper>
  );
};
