import { createClient } from "contentful";
import Landing from "@/app/ui/components/home/landing/Landing";
import OutstandingProjects from "./ui/components/home/outstabdingprojects/OutstandingProjects";
import Mission from "./ui/components/home/mission/Mission";
import ContactUs from "@/app/ui/components/home/contact/ContactUs";

export default async function Home() {
  const outstandingProjects = await getOutstandingProjects();
  
  return (
    <main className="max-w-7xl mx-auto">
      <Landing/>
      <OutstandingProjects outstandingProjects={outstandingProjects}/>
      <Mission/>
      <ContactUs/>
    </main>
  );
}

async function getOutstandingProjects() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const res = await client.getEntries({ content_type: "outstandingProject", limit: 3 });
  return res.items;
}