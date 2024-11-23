import Link from "next/link";

export default function DocsNav() {
  return (
    <aside>
      <nav>
        <ol>
          <li>
            <Link href="/docs/typography">Типографіка</Link>
          </li>
          <li>
            <Link href="/docs/colors">Кольори</Link>
          </li>

          <li>
            <Link href="/docs/components">Компоненти</Link>
          </li>
        </ol>
      </nav>
    </aside>
  );
}
