import Link from "next/link";
import style from "../static/Style";

export default () =><div>
  {style}
  <h1>Next.js</h1>
  <p>This is other page.</p>
  <hr />
  <div>
    <Link href="/">
      <button>&lt;&lt; Back to Index page</button>
    </Link>
  </div>
</div>