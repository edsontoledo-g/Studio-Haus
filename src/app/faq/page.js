import { createClient } from "contentful";
import FaqRow from "@/app/ui/components/faq/FaqRow";

export default async function Faqs() {
  const faqs = await getFAQs();

  return (
    <div className="min-h-screen pt-48 px-8 pb-8 max-w-7xl mx-auto">
      <h2 className="font-medium mb-8 text-5xl sm:text-7xl">FAQs</h2>
      {faqs.map((faq) => {
        return (
          <FaqRow
            key={faq.sys.id}
            faq={faq.fields}
          />
        );
      })}
    </div>
  );
}

async function getFAQs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const res = await client.getEntries({ content_type: "faq", order: "sys.createdAt" });
  return res.items;
}