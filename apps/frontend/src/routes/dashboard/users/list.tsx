import { createFileRoute } from "@tanstack/react-router";
import { tsr } from '@/lib/tsr';

export const Route = createFileRoute("/dashboard/users/list")({
  component: RouteComponent,
  loader: async () => {
    const data = await tsr.users.getUsers.query()
    if (data.status !== 200) {
      throw new Error("Failed to fetch users");
    }

    return {
      crumb: "List",
      data: data.body,
    };
  }
});

function RouteComponent() {
  const { data } = Route.useLoaderData();
  return (
    <div>
      <h1>Users</h1>
      <p>List of users</p>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
          </li>
        ))}
      </ul>
      <p>Count: {data.length}</p>
    </div>
  )
}
