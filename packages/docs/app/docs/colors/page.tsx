import Link from "next/link";

export default function Colors() {
  return (
    <>
      <h2 className="di-h2">Кольори</h2>

      <ul>
        <li>
          <Link className="di-link-underline" href="/docs/colors/text">
            Класи для кольорового тексту
          </Link>
        </li>
        <li>
          <Link className="di-link-underline" href="/docs/colors/background">
            Класи для кольорової підложки
          </Link>
        </li>
      </ul>
    </>
  );
}
