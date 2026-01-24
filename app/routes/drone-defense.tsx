import type { Route } from "./+types/drone-defense";
import DroneDefense from "../components/DroneDefense";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Защита от БПЛА - ООО «ЛЕГИОН»" },
    { name: "description", content: "Система защиты от беспилотных летательных аппаратов от ООО «ЛЕГИОН»" },
  ];
}

export default function DroneDefensePage() {
  return <DroneDefense />;
}