import ClientDemo from "@/components/client-demo";
import DataFetching from "@/components/data-fetching";
import RSCDemo from "@/components/rsc_demo";

export default function Home() {
  return (
    <main>
      <ClientDemo />
      <RSCDemo />
      <DataFetching />
    </main>
  );
}
