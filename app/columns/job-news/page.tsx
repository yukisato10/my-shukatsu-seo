import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "就活ニュースの見方 | 業界動向・採用情報を効率よく確認する方法",
  description:
    "就活ニュース、業界動向、採用情報を効率よく確認し、企業研究や面接対策に活用する方法を解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/columns" className="text-sm font-bold text-cyan-300">
          ← コラム一覧へ
        </Link>

        <p className="mt-10 text-sm font-bold tracking-[0.3em] text-cyan-300">
          JOB NEWS
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          就活ニュースの見方｜業界動向・採用情報を効率よく確認する方法
        </h1>

        <p className="mt-8 text-lg leading-9 text-gray-300">
          就活では、企業情報だけでなく、業界動向や採用情報を確認することも重要です。
          ニュースを把握しておくことで、企業研究、志望動機作成、面接対策に活用しやすくなります。
        </p>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">就活ニュースを見るメリット</h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-300">
            <li>・業界研究に使える</li>
            <li>・面接で話す材料になる</li>
            <li>・企業の採用動向を把握しやすい</li>
            <li>・志望動機の説得力を高めやすい</li>
            <li>・成長業界や注目企業を見つけやすい</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black">確認すべきニュースの種類</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["採用情報", "新卒採用、インターン、説明会、選考スケジュールの情報を確認します。"],
              ["業界動向", "IT、金融、メーカー、広告、商社など、志望業界の変化を把握します。"],
              ["企業ニュース", "新規事業、決算、提携、海外展開などを企業研究に活用します。"],
              ["働き方・人材ニュース", "初任給、リスキリング、生成AI活用など、就活で話題になりやすい情報を確認します。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-black text-cyan-300">{title}</h3>
                <p className="mt-3 leading-8 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black">就活ニュースを効率よく確認する方法</h2>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            ニュースサイトを毎回個別に確認するのは手間がかかります。
            就活に関係するニュースをまとめて確認できる環境を作ることで、
            情報収集の時間を減らしながら、必要な情報を把握しやすくなります。
          </p>
        </section>

        <section className="mt-16 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8">
          <h2 className="text-3xl font-black">My就活でニュースを確認</h2>

          <p className="mt-5 leading-9 text-blue-50">
            My就活では、企業管理やES管理だけでなく、就活ニュースもアプリ内で確認できます。
            採用、インターン、業界動向などの情報をまとめて確認できるため、就活の情報収集にも活用できます。
          </p>

          <a
            href="https://apps.apple.com/jp/app/my%E5%B0%B1%E6%B4%BB-%E5%B0%B1%E6%B4%BB%E7%AE%A1%E7%90%86-es-%E3%83%9E%E3%82%A4%E3%83%9A%E3%83%BC%E3%82%B8-%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/id6760533552"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[60px] items-center justify-center rounded-2xl bg-white px-8 font-black text-black"
          >
            App Storeで見る
          </a>
        </section>

        <section className="mt-20 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-black">関連記事</h2>

          <div className="mt-6 grid gap-4">
            <Link href="/columns/job-hunting-management-app" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              就活管理アプリおすすめ
            </Link>
            <Link href="/columns/interview-management" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              面接管理アプリおすすめ
            </Link>
            <Link href="/columns/schedule-management" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              就活スケジュール管理アプリおすすめ
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}