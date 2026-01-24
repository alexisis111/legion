import type { Route } from "./+types/vacancies";
import Vacancies from "../components/Vacancies";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Вакансии - ООО «ЛЕГИОН»" },
    { name: "description", content: "Открытые вакансии в строительной компании ООО «ЛЕГИОН». Условия работы, требования и контакты для связи." },
  ];
}

export default function VacanciesPage() {
  return <Vacancies />;
}