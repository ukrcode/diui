import Link from "next/link";

export default function DocsNav() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/docs/typography">Типографіка</Link>
          </li>
          <li>
            <Link href="/docs/colors">Кольори</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
