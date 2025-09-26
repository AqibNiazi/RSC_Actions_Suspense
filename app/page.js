import fs from "node:fs/promises";
import UsePromise from "@/components/use-promises";
import { Suspense } from "react";

export default async function Home() {
  const fetchUserPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
    }, 2000)
  );

  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <UsePromise userPromise={fetchUserPromise} />
      </Suspense>
    </main>
  );
}
