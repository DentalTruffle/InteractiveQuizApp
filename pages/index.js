import Link from "next/link";

export default function Home() {
  return (
    <>
        <main>
          <div className="container">
            <h1>Welcome to our quiz!</h1>
            <hr/>
          <div className="list"  >
             <Link href="./categories"><h2 >Go to categories</h2></Link>
          </div>
          </div>
        </main>   
    </>
  );
}
