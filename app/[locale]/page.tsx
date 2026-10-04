import Home from "./home/page";

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <Home params={params} />;
}