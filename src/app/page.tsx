import PageTransition from "@/components/PageTransition";
import HomeContainer from '@/section/home/HomeContainer';
import { getPerfumes } from "@/services/perfumes.services";

export default async function Home() {
  const data = await getPerfumes();

  return (
    <PageTransition>
      <HomeContainer data={data}/>
    </PageTransition>
  );
}
