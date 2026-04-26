import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/components/careers-page";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});
