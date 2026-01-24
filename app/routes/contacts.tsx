import type { Route } from "./+types/contacts";
import Contacts from "../components/Contacts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты - ООО «ЛЕГИОН»" },
    { name: "description", content: "Контактная информация строительной компании ООО «ЛЕГИОН». Телефоны, адрес, email и форма обратной связи." },
  ];
}

export default function ContactsPage() {
  return <Contacts />;
}