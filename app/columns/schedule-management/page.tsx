import type { Metadata } from "next";
import Link from "next/link";

const appStoreUrl =
  "https://apps.apple.com/jp/app/my%E5%B0%B1%E6%B4%BB-%E5%B0%B1%E6%B4%BB%E7%AE%A1%E7%90%86-es-%E3%83%9E%E3%82%A4%E3%83%9A%E3%83%BC%E3%82%B8-%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/id6760533552";

export const metadata: Metadata = {
  title: "就活スケジュール管理アプリおすすめ | 面接・ES締切を整理する方法",
  description:
    "就活の面接予定、説明会、ES締切、Webテストをカレンダーで効率よく管理する方法を解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f9ff] text-[#0f172a]">
      <article className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/columns" className="text-sm font-black text-blue-600">
          ← コラム一覧へ
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <p className="text-sm font-black tracking-[0.3em] text-blue-500">
              SCHEDULE MANAGEMENT
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              就活スケジュール管理アプリおすすめ｜
              <span className="text-blue-600">面接・ES締切を整理</span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              面接、説明会、ES締切、Webテストなど複数の予定をカレンダーで一元管理すると、
              締切忘れや日程重複を防ぎやすくなります。
            </p>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-4 shadow-xl">
            <img
              src="/karenda-.jpg"
              alt="就活スケジュール管理アプリのカレンダー画面"
              className="rounded-[1.5rem]"
            />
          </div>
        </div>

        <section className="mt-16 rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">就活スケジュール管理でよくある悩み</h2>

          <ul className="mt-6 space-y-4 leading-8 text-slate-600">
            <li>・ES締切を忘れてしまう</li>
            <li>・面接予定と説明会が重複する</li>
            <li>・企業ごとの予定を確認するのに時間がかかる</li>
            <li>・WebテストやGDの予定を別管理している</li>
            <li>・当日の予定をすぐ確認できない</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black">スケジュール管理で見るべき項目</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["ES締切", "提出日だけでなく、作成開始日も意識すると余裕を持って準備できます。"],
              ["面接予定", "日時、企業名、面接形式、確認メモをまとめておくと安心です。"],
              ["説明会", "説明会後に企業メモを残すことで、志望動機作成に活用できます。"],
              ["Webテスト", "受検期限、形式、準備状況を一緒に管理すると抜け漏れを防ぎやすくなります。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="font-black text-blue-600">{title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-xl">
          <h2 className="text-3xl font-black">My就活で予定を管理</h2>

          <p className="mt-5 leading-9 text-blue-50">
            My就活では、面接、ES締切、説明会、Webテストなどの予定を企業ごとに保存できます。
            企業情報やES内容と一緒に管理できるため、予定確認から面接準備までスムーズに行えます。
          </p>

          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[60px] items-center justify-center rounded-2xl bg-white px-8 font-black text-[#0f172a]"
          >
            App Storeで見る
          </a>
        </section>

        <RelatedLinks />
      </article>
    </main>
  );
}

function RelatedLinks() {
  return (
    <section className="mt-20 border-t border-blue-100 pt-10">
      <h2 className="text-2xl font-black">関連記事</h2>

      <div className="mt-6 grid gap-4">
        <Link href="/columns/job-hunting-management-app" className="rounded-2xl border border-blue-100 bg-white p-5 font-bold hover:bg-blue-50">
          就活管理アプリおすすめ
        </Link>
        <Link href="/columns/interview-management" className="rounded-2xl border border-blue-100 bg-white p-5 font-bold hover:bg-blue-50">
          面接管理アプリおすすめ
        </Link>
        <Link href="/columns/es-management" className="rounded-2xl border border-blue-100 bg-white p-5 font-bold hover:bg-blue-50">
          ES管理アプリおすすめ
        </Link>
      </div>
    </section>
  );
}