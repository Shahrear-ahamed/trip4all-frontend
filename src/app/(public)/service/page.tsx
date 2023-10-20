import SingleTour from "@/components/ui/SingleTour";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { IService } from "@/interface";

export default async function ServicePage() {
  const res = await fetch(`${getBaseUrl()}/services?limit=5`, {
    cache: "no-cache",
  });
  const resJson = await res.json();

  const meta = resJson.data.meta;
  const services = resJson.data.data;

  console.log(services);

  return (
    <section className="">
      {services?.map((tour: IService) => (
        <SingleTour key={tour.id} tour={tour} />
      ))}
    </section>
  );
}
