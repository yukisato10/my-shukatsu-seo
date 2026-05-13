import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "就活管理アプリおすすめ | ES・面接・締切を一括管理",
  description:
    "就活の企業管理、ES管理、面接予定、締切管理、就活ニュース、就活サービスをまとめて確認できる就活管理アプリを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/columns" className="text-sm font-bold text-cyan-300">
          ← コラム一覧へ
        </Link>

        <p className="mt-10 text-sm font-bold tracking-[0.3em] text-cyan-300">
          JOB HUNTING APP
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          就活管理アプリおすすめ｜ES・面接・締切を一括管理する方法
        </h1>

        <p className="mt-8 text-lg leading-9 text-gray-300">
          就活では、企業情報、ES、面接予定、説明会、Webテスト、締切、マイページ情報などを同時に管理する必要があります。
          管理がバラバラになると、締切忘れや選考準備の抜け漏れにつながりやすくなります。
        </p>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">就活管理でよくある悩み</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-300">
            <li>・企業ごとの選考状況が分からなくなる</li>
            <li>・ESの回答や志望動機を探すのに時間がかかる</li>
            <li>・面接日程、説明会、締切を別々に管理している</li>
            <li>・マイページのIDやパスワードが散らばる</li>
            <li>・業界ニュースや採用情報を確認する習慣が作りにくい</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black">
            就活管理アプリを使うメリット
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            就活管理アプリを使うと、企業情報、ES、面接予定、締切、メモをスマホでまとめて管理できます。
            特に複数企業を並行して受ける場合、情報を一か所に集約することで確認漏れを減らせます。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["情報が散らばらない", "企業情報、ES、予定、メモを一元管理できます。"],
              ["締切忘れを防ぎやすい", "ES締切や面接予定をカレンダーで確認できます。"],
              ["面接準備がしやすい", "ES内容や企業メモを面接前に見返せます。"],
              ["就活の進捗が見える", "選考フェーズや志望度を整理できます。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-black text-cyan-300">{title}</h3>
                <p className="mt-3 leading-7 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8">
          <h2 className="text-3xl font-black">My就活</h2>

          <p className="mt-5 leading-9 text-blue-50">
            My就活は、企業管理、ES管理、面接予定、締切管理、就活ニュース、就活サービスをまとめて使える就活管理アプリです。
            企業ごとの情報を整理しながら、就活全体の進捗をスマホで確認できます。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/15 p-5">
              <h3 className="font-black">就活ニュース</h3>
              <p className="mt-2 text-sm leading-7 text-blue-50">
                採用、インターン、業界動向などのニュースをアプリ内で確認できます。
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-5">
              <h3 className="font-black">就活サービス</h3>
              <p className="mt-2 text-sm leading-7 text-blue-50">
                就活サイト、エージェント、スカウトサービスなどを一覧で確認できます。
              </p>
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
            <Link href="/columns/es-management" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              ES管理アプリおすすめ
            </Link>
            <Link href="/columns/schedule-management" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              就活スケジュール管理アプリおすすめ
            </Link>
            <Link href="/columns/interview-management" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              面接管理アプリおすすめ
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}