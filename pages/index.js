import Head from "next/head";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import SignUp from "../components/SignUp";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <div className="flex px-[32px] bg-base-100 justify-center items-start pt-[72px] pb-[75.25px] md:py-12 md:items-center min-h-screen">
      <Head>
        <title>Next Github Pages App</title>
        <meta
          name="description"
          content="Next Github Pages App"
        />
      </Head>
      <main className="bg-white rounded-md md:rounded-lg main -tracking-[0.01em] md:-tracking-[0.015em] overflow-hidden grid grid-cols-1 auto-rows-min md:grid-cols-2 mx-auto max-w-[480px] md:max-w-[636px]">
        <JoinUs />
        <SignUp />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
