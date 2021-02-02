import Link from "next/link";
import Layout from "../components/Layout";
import Image from "../components/Image";

export default () =>(
  <Layout header="Next" title="Top page.">
    <p>Welcome</p>
    <Image fname="cat.jpg" size="250" />
    <hr/>
    <Link href="/other">
      <button>Go to Other page &gt;&gt;</button>
    </Link>
  </Layout>
)