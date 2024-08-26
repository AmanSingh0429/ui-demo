import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        Please navigate to the page by clicking <br />
        <Link
          href="/CannabisBluten"
          className="underline"
        >
          here!!!
        </Link>
      </div>
    </>
  );
}
