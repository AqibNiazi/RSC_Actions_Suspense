import fs from "node:fs/promises";
import UsePromise from "@/components/use-promises";
import { Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function Home() {
  const fetchUserPromise = new Promise((resolve, reject) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
      // reject(new Error("Failed to fetch users"));
    }, 2000)
  );

  return (
    <main>
      <ErrorBoundary fallback={<p>Something went wrong!</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromise userPromise={fetchUserPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
