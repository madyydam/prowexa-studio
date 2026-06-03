import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage } from "@/components/testimonials-page";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
});
