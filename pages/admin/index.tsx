import { useRequireAuth } from "../../hooks/useRequireAuth";
import { useCatalog } from "../../hooks/useCatalog";

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

      <button onClick={logout}>SignOut</button>
    </div>
  );
};

export default Admin;
