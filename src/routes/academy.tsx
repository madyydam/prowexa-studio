import { createFileRoute } from "@tanstack/react-router";
import { AcademyPage } from "@/components/academy-page";

export const Route = createFileRoute("/academy")({
  component: AcademyPage,
});
