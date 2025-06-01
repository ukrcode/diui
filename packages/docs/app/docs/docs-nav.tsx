import Link from "next/link";

export default function DocsNav() {
  return (
    <aside>
      <nav>
        <ol>
          <li>
            <Link className="di-link di-link-underline" href="/docs/typography">
              Типографіка
            </Link>
          </li>
          <li>
            <Link className="di-link di-link-underline" href="/docs/colors">
              Кольори
            </Link>
          </li>

          <li>
            <Link className="di-link di-link-underline" href="/docs/components">
              Компоненти
            </Link>
          </li>
        </ol>
      </nav>
    </aside>
  );
}
