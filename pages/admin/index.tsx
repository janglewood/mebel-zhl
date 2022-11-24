import { useRequireAuth } from "../../hooks/useRequireAuth";
import { useCatalog } from "../../hooks/useCatalog";
import { Button } from "@/components/Admin/Button";

const Admin = (): JSX.Element => {
  const { logout } = useRequireAuth();

  const { catalog, isLoading } = useCatalog();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>Catalog list</h1>
      <ul>
        {catalog?.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>

      <Button onClick={logout} text="Выйти из аккаунта"></Button>
    </div>
  );
};

export default Admin;
