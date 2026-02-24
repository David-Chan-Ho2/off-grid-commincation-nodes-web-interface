"use client";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";

import NodeSection from "@/components/NodeSection";
import { ILocation } from "../types/location.types";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const {
    data: locations,
    error,
    isLoading,
  } = useSWR<ILocation[]>("/api/locations", fetcher);

  if (isLoading) return <Skeleton className="h-screen w-screen"></Skeleton>;
  if (error) return <div>Error</div>;

  return (
    <main className="h-screen flex flex-col">
      <Map locations={locations} />
      <NodeSection locations={locations} />
    </main>
  );
}
