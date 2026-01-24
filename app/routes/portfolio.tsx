import type { Route } from "./+types/portfolio";
import Portfolio from "../components/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Портфолио - ООО «ЛЕГИОН»" },
    { name: "description", content: "Проекты и реализованные работы строительной компании ООО «ЛЕГИОН»" },
  ];
}

export default function PortfolioPage() {
  return <Portfolio />;
}