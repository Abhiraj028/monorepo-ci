import { client } from "@repo/db/client";


export default async function Home() {

  const user = await client.user.findFirst();

  return (
    <div>
      <h1> Permanent Hello added bigeshwar dawg</h1>
      {user?.username}
      {user?.password}
    </div>
  );
}
