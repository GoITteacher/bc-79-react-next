import Link from "next/link";

const Page = () => {
  return (
    <main>
      <p>Це сторінка що описує загальну політику нашого сайту</p>
      <p>
        Також ви можете переглянути{" "}
        <Link href="/polices/privacy">Privacy Policy</Link>
      </p>
    </main>
  );
};

export default Page;
