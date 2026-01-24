import type { Route } from "./+types/services";
import ServicesShowcase from "../components/ServicesShowcase";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Услуги - ООО «ЛЕГИОН»" },
    { name: "description", content: "Полный спектр строительных и монтажных услуг от ООО «ЛЕГИОН». Подготовительные работы, монтаж металлоконструкций, отделочные работы и многое другое." },
  ];
}

export default function ServicesPage() {
  return <ServicesShowcase />;
}