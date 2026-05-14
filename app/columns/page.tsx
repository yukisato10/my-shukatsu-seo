import Link from "next/link";

const articles = [
  {
    title: "就活管理アプリおすすめ｜ES・面接・締切を一括管理",
    href: "/columns/job-hunting-management-app",
    description:
      "企業管理、ES管理、面接予定、締切、就活ニュースをまとめて整理する方法を解説します。",
    tag: "就活管理",
    icon: "📱",
  },
  {
    title: "ES管理アプリおすすめ｜就活のエントリーシート管理方法",
    href: "/columns/es-management",
    description:
      "ESの設問・回答・志望動機を企業ごとに保存し、効率よく使い回す方法を解説します。",
    tag: "ES管理",
    icon: "📝",
  },
  {
    title: "就活スケジュール管理アプリおすすめ",
    href: "/columns/schedule-management",
    description:
      "面接、説明会、ES締切、Webテストをカレンダーで管理する方法を解説します。",
    tag: "予定管理",
    icon: "📅",
  },
  {
    title: "面接管理アプリおすすめ｜就活の面接予定を整理する方法",
    href: "/columns/interview-management",
    description:
      "企業ごとの面接日程、選考状況、面接メモを効率よく管理する方法を解説します。",
    tag: "面接管理",
    icon: "💬",
  },
  {
    title: "就活ニュースの見方｜業界動向・採用情報を効率よく確認する方法",
    href: "/columns/job-news",
    description:
      "業界動向や採用情報を効率よく確認し、企業研究や面接対策に活用する方法を解説します。",
    tag: "ニュース",
    icon: "📰",
  },
];

export default function ColumnsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f9ff] text-[#0f172a]">
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-blue-200/70 blur-3xl" />
        <div className="absolute right-[-120px] top-[220px] h-[360px] w-[360px] rounded-full bg-cyan-200/60 blur-3xl" />

        <div className="relative">
          <Link
            href="/"
            className="inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-black text-blue-600 shadow-sm hover:bg-blue-50"
          >
            ← トップへ戻る
          </Link>

          <p className="mt-12 text-sm font-black tracking-[0.3em] text-blue-500">
            COLUMNS
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight">
            就活コラム
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            就活管理、ES管理、面接対策、スケジュール管理、就活ニュースの見方まで、
            就活を効率よく進めるための記事をまとめています。
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl shadow-sm">
                    {article.icon}
                  </div>

                  <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-blue-600">
                    {article.tag}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-black leading-snug">
                  {article.title}
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  {article.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-black text-blue-600">
                  記事を見る
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}