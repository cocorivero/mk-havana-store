import HomeContainer from '@/section/home/HomeContainer';
import { getPerfumes } from "@/services/perfumes.services";

export default async function Home() {
  const data = await getPerfumes();

  return (
      <HomeContainer data={data}/>
  );
}
