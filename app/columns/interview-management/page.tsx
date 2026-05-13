import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "面接管理アプリおすすめ | 就活の面接予定を整理する方法",
  description:
    "就活の面接日程、企業ごとの選考状況、面接メモ、ES内容を効率よく管理する方法を解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/columns" className="text-sm font-bold text-cyan-300">
          ← コラム一覧へ
        </Link>

        <p className="mt-10 text-sm font-bold tracking-[0.3em] text-cyan-300">
          INTERVIEW MANAGEMENT
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          面接管理アプリおすすめ｜就活の面接予定を整理する方法
        </h1>

        <p className="mt-8 text-lg leading-9 text-gray-300">
          就活では、一次面接、二次面接、最終面接など複数の面接を企業ごとに管理する必要があります。
          面接予定とES内容、企業メモを一緒に整理しておくことで、面接前の準備がしやすくなります。
        </p>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">面接管理でよくある悩み</h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-300">
            <li>・企業ごとの面接日程が分からなくなる</li>
            <li>・一次面接、二次面接、最終面接の進捗を整理できない</li>
            <li>・面接前に確認したいメモが見つからない</li>
            <li>・提出したES内容をすぐ見返せない</li>
            <li>・面接後の振り返りを残していない</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black">面接前に管理すべき情報</h2>

          <div className="mt-8 grid gap-4">
            {[
              ["面接日時", "企業名、開始時間、面接形式、URLや場所をまとめておくと安心です。"],
              ["選考フェーズ", "一次面接、二次面接、最終面接など、現在の進捗を整理できます。"],
              ["ES内容", "提出したESを確認することで、回答の一貫性を保ちやすくなります。"],
              ["面接メモ", "逆質問、話した内容、次回に活かす反省点を残しておくと改善につながります。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-black text-cyan-300">{title}</h3>
                <p className="mt-3 leading-8 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8">
          <h2 className="text-3xl font-black">My就活で面接を管理</h2>

          <p className="mt-5 leading-9 text-blue-50">
            My就活では、面接予定、ES内容、企業メモ、選考状況を企業ごとにまとめて管理できます。
            面接前に必要な情報をアプリ内で確認できるため、準備不足を防ぎやすくなります。
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
            <Link href="/columns/schedule-management" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              就活スケジュール管理アプリおすすめ
            </Link>
            <Link href="/columns/es-management" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              ES管理アプリおすすめ
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}