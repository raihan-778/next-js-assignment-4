import Head from "next/head";

import { Inter } from "@next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import QuestionTab from "@/components/QuestionTab/QuestionTab";
import SideNav from "@/components/SideNav/SideNav";
import Footer from "@/components/Footer/Footer";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MY Online Test Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main>
        <NavBar></NavBar>
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <QuestionTab></QuestionTab>
          </div>
          <div className="col-span-2">
            <SideNav></SideNav>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
