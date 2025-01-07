import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Anouncement from "@/components/Anouncement"
import PageFooter from "@/components/PageFooter"



import Image from "next/image";

export default function Home() {
  return (
   <div>
<Header />
<Hero/>

    <Anouncement/>

    <PageFooter/>
    
    </div>

    
  );
}
