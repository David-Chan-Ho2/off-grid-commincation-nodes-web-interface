'use client'
import dynamic from "next/dynamic"

const LeafletMap = dynamic(() => import("./components/Map"), {
  ssr: false,
});

export default function Page() {
  return (
    <main>
      <LeafletMap />
    </main>
  );
}