import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ES管理アプリおすすめ | 就活のエントリーシート管理方法",
  description:
    "ESの設問、回答、志望動機、ガクチカを企業ごとに整理する方法と、ES管理アプリの活用方法を解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/columns" className="text-sm font-bold text-cyan-300">
          ← コラム一覧へ
        </Link>

        <p className="mt-10 text-sm font-bold tracking-[0.3em] text-cyan-300">
          ES MANAGEMENT
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          ES管理アプリおすすめ｜就活のエントリーシート管理方法
        </h1>

        <p className="mt-8 text-lg leading-9 text-gray-300">
          就活では、複数企業のESを同時に作成・提出する必要があります。
          設問、回答、志望動機、ガクチカ、自己PRを企業ごとに整理しておくことで、
          ES作成の効率が大きく上がります。
        </p>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">ES管理でよくある悩み</h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-300">
            <li>・過去に書いたES回答を探すのに時間がかかる</li>
            <li>・企業ごとの設問や文字数を管理できない</li>
            <li>・志望動機、ガクチカ、自己PRがメモアプリに散らばる</li>
            <li>・提出済みか下書き中か分からなくなる</li>
            <li>・面接前に提出したES内容を見返せない</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black">ESを効率よく管理するコツ</h2>

          <div className="mt-8 grid gap-4">
            {[
              ["企業ごとに保存する", "同じESでも企業ごとに内容が変わるため、企業単位で管理すると見返しやすくなります。"],
              ["設問と回答をセットで残す", "回答だけでなく設問も残すことで、面接前に質問意図を確認しやすくなります。"],
              ["カテゴリ分けする", "サマーインターン、本選考、早期選考などで分けると整理しやすくなります。"],
              ["提出前後の状態を分ける", "下書き、提出済み、修正予定を分けておくと抜け漏れを防ぎやすくなります。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-black text-cyan-300">{title}</h3>
                <p className="mt-3 leading-8 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8">
          <h2 className="text-3xl font-black">My就活でESを管理</h2>

          <p className="mt-5 leading-9 text-blue-50">
            My就活では、ESの設問・回答・志望動機を企業ごとに保存できます。
            企業情報や面接予定と一緒に管理できるため、面接前に提出内容を確認しやすくなります。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/15 p-5">
              <h3 className="font-black">設問管理</h3>
              <p className="mt-2 text-sm leading-7 text-blue-50">企業ごとのES設問を保存できます。</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-5">
              <h3 className="font-black">回答保存</h3>
              <p className="mt-2 text-sm leading-7 text-blue-50">回答内容を後から見返せます。</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-5">
              <h3 className="font-black">面接準備</h3>
              <p className="mt-2 text-sm leading-7 text-blue-50">面接前にES内容を確認できます。</p>
            </div>
          </div>

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
          </div>
        </section>
      </article>
    </main>
  );
}