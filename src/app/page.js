import { createClient } from "contentful";
import Landing from "@/app/ui/components/home/landing/Landing";
import Services from "./ui/components/home/services/Services";
import OutstandingProjects from "./ui/components/home/outstabdingprojects/OutstandingProjects";
import Mission from "./ui/components/home/mission/Mission";
import ContactUs from "@/app/ui/components/home/contact/ContactUs";

export default async function Home() {
  const services = await getContent("service");
  const outstandingProjects = await getContent("outstandingProject");
  
  return (
    <main className="max-w-7xl mx-auto">
      <Landing/>
      <Services services={services} />
      <OutstandingProjects outstandingProjects={outstandingProjects}/>
      <Mission/>
      <ContactUs/>
    </main>
  );
}

async function getContent(contentType) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const res = await client.getEntries({ content_type: contentType, limit: 3 });
  return res.items;
}