import type { Route } from "./+types/company";
import CompanyInfo from "../components/CompanyInfo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "О компании - ООО «ЛЕГИОН»" },
    { name: "description", content: "Информация о строительной компании ООО «ЛЕГИОН», история, миссия, услуги и клиенты" },
  ];
}

export default function Company() {
  return <CompanyInfo />;
}