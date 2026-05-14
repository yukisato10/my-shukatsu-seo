export default function Home() {
  const appStoreUrl =
    "https://apps.apple.com/jp/app/my%E5%B0%B1%E6%B4%BB-%E5%B0%B1%E6%B4%BB%E7%AE%A1%E7%90%86-es-%E3%83%9E%E3%82%A4%E3%83%9A%E3%83%BC%E3%82%B8-%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/id6760533552";

  const points = [
    {
      title: "企業ごとに情報を整理",
      text: "志望度・選考状況・マイページ情報をまとめて管理できます。",
      icon: "🏢",
    },
    {
      title: "ES・予定・メモを一元管理",
      text: "ES回答、面接予定、企業メモを企業ごとに保存できます。",
      icon: "📝",
    },
    {
      title: "就活情報もまとめて確認",
      text: "就活ニュースや就活サービスもアプリ内で確認できます。",
      icon: "📰",
    },
  ];

  const sections = [
    {
      label: "SCHEDULE",
      title: "スケジュールをカレンダーで管理",
      highlight: "締切・面接を忘れない",
      text: "ES締切、説明会、面接予定をカレンダーでまとめて確認できます。予定が増えても、企業ごとのスケジュールを整理しやすくなります。",
      image: "/karenda-.jpg",
      alt: "就活スケジュール管理アプリのカレンダー画面",
    },
    {
      label: "COMPANY",
      title: "企業ごとの情報を一元管理",
      highlight: "選考状況がひと目でわかる",
      text: "志望度、業界、選考ステップ、マイページ情報などを企業ごとに整理できます。複数企業を同時に受ける就活でも迷いにくくなります。",
      image: "/kigyoukanri.jpg",
      alt: "企業管理アプリの画面",
    },
    {
      label: "ES",
      title: "ESを企業ごとに保存",
      highlight: "過去の回答をすぐ見返せる",
      text: "ガクチカ、志望動機、強みなどの回答を企業ごとに保存できます。似た設問の回答を見返しやすく、ES作成を効率化できます。",
      image: "/ES.jpg",
      alt: "ES管理アプリの画面",
    },
    {
      label: "MEMO",
      title: "企業研究やOB訪問メモを整理",
      highlight: "面接前の見直しにも便利",
      text: "企業研究、OB訪問、説明会で聞いた内容を企業ごとにメモできます。選考前に必要な情報をすぐ確認できます。",
      image: "/kigyoumemo.jpg",
      alt: "企業メモ管理画面",
    },
    {
      label: "NEWS",
      title: "就活ニュースをまとめて確認",
      highlight: "業界動向をキャッチ",
      text: "採用、インターン、業界動向などの就活ニュースをアプリ内で確認できます。企業研究や面接対策にも活用できます。",
      image: "/news.jpg",
      alt: "就活ニュース機能の画面",
    },
    {
      label: "PROFILE",
      title: "プロフィールを一元管理",
      highlight: "ESの定番内容をすぐコピー",
      text: "自己紹介、ガクチカ、研究内容、強み・弱みなどを保存できます。よく使う内容をすぐにコピーして活用できます。",
      image: "/purofi-ru.jpg",
      alt: "プロフィール管理画面",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f9ff] text-[#0f172a]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-blue-200/70 blur-3xl" />
        <div className="absolute right-[-160px] top-[420px] h-[520px] w-[520px] rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute bottom-[-240px] left-[20%] h-[520px] w-[520px] rounded-full bg-sky-200/50 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/icon.png"
              alt="My就活"
              className="h-11 w-11 rounded-2xl shadow-sm"
            />
            <div>
              <p className="text-xl font-black tracking-tight text-[#0f172a]">
                My就活
              </p>
              <p className="text-xs font-bold text-blue-500">
                就活を、もっとスマートに。
              </p>
            </div>
          </a>

          <nav className="hidden gap-8 text-sm font-bold text-slate-600 md:flex">
            <a href="#points" className="hover:text-blue-600">
              特徴
            </a>
            <a href="#screens" className="hover:text-blue-600">
              機能
            </a>
            <a href="#columns" className="hover:text-blue-600">
              コラム
            </a>
            <a href="#download" className="hover:text-blue-600">
              ダウンロード
            </a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="absolute right-8 top-24 hidden grid-cols-6 gap-3 opacity-30 lg:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className="h-2 w-2 rounded-full bg-blue-400"
            />
          ))}
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-black text-blue-600 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              無料で使える就活管理アプリ
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-[#0b1220] sm:text-7xl">
              就活を、
              <br />
              <span className="text-blue-600">ひとつに。</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-slate-600">
              企業管理、ES管理、面接予定、締切、企業メモ、就活ニュースを
              一つのアプリで整理。複数企業の選考も、スマホでシンプルに管理できます。
            </p>

            <div id="download" className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[64px] items-center justify-center rounded-2xl bg-[#0b1220] px-8 text-center text-base font-black text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                App Storeで無料ダウンロード
              </a>

              <a
                href="#screens"
                className="inline-flex min-h-[64px] items-center justify-center rounded-2xl border border-blue-100 bg-white px-8 text-center text-base font-black text-blue-600 shadow-sm transition hover:-translate-y-1"
              >
                アプリ画面を見る
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold text-slate-500">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                iPhone対応
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                無料
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                企業・ES・予定を一元管理
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -left-8 top-12 h-36 w-36 rotate-12 rounded-[2rem] bg-blue-500/10" />
            <div className="absolute -right-8 bottom-16 h-32 w-32 -rotate-12 rounded-full bg-cyan-300/40 blur-xl" />

            <div className="relative rotate-2 rounded-[2.5rem] border border-blue-100 bg-white p-5 shadow-2xl">
              <img
                src="/karenda-.jpg"
                alt="My就活のカレンダー画面"
                className="w-full rounded-[2rem]"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 hidden rounded-3xl bg-[#0b1220] p-5 text-white shadow-2xl sm:block">
              <p className="text-xs font-bold text-blue-200">管理できる情報</p>
              <p className="mt-2 text-2xl font-black">企業・ES・予定</p>
            </div>
          </div>
        </div>
      </section>

      <section id="points" className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-[2rem] border border-blue-100 bg-white/90 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {point.icon}
              </div>
              <h2 className="mt-5 text-xl font-black">{point.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="screens" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black tracking-[0.3em] text-blue-500">
              APP FEATURES
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0b1220] sm:text-5xl">
              就活に必要な機能を、
              <br className="hidden sm:block" />
              わかりやすく整理
            </h2>
            <p className="mt-6 text-lg leading-9 text-slate-600">
              My就活は、就活中に散らばりやすい情報を企業ごとにまとめて管理できます。
              画面を見れば、必要な情報にすぐアクセスできます。
            </p>
          </div>

          <div className="mt-24 space-y-28">
            {sections.map((item, index) => {
              const isReverse = index % 2 === 1;

              return (
                <div
                  key={item.title}
                  className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                    isReverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <p className="text-sm font-black tracking-[0.3em] text-blue-500">
                      {item.label}
                    </p>
                    <h3 className="mt-4 text-4xl font-black leading-tight text-[#0b1220]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-2xl font-black text-blue-600">
                      {item.highlight}
                    </p>
                    <p className="mt-6 text-lg leading-9 text-slate-600">
                      {item.text}
                    </p>

                    <div className="mt-8 flex gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                        ✓
                      </span>
                      <div>
                        <p className="font-black text-[#0b1220]">
                          企業ごとにまとまる
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          情報を探す時間を減らし、選考準備に集中できます。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative ${
                      isReverse ? "lg:justify-self-start" : "lg:justify-self-end"
                    }`}
                  >
                    <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-200/70 to-cyan-100/70 blur-2xl" />
                    <div
                      className={`relative max-w-[390px] rounded-[2.5rem] border border-blue-100 bg-white p-4 shadow-2xl ${
                        isReverse ? "-rotate-2" : "rotate-2"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full rounded-[2rem]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="columns"
        className="relative border-y border-blue-100 bg-white/75 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black tracking-[0.3em] text-blue-500">
                COLUMN
              </p>
              <h2 className="mt-4 text-4xl font-black text-[#0b1220]">
                就活コラム
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                就活管理・ES・面接対策に関する記事を掲載しています。
              </p>
            </div>

            <a
              href="/columns"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-blue-600 px-6 font-black text-white shadow-lg transition hover:-translate-y-1"
            >
              記事一覧を見る
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              [
                "就活管理アプリおすすめ",
                "/columns/job-hunting-management-app",
                "ES・面接・締切を一括管理する方法を解説。",
              ],
              [
                "ES管理アプリおすすめ",
                "/columns/es-management",
                "ESの設問・回答・志望動機を整理する方法を解説。",
              ],
              [
                "面接管理アプリおすすめ",
                "/columns/interview-management",
                "面接予定や選考状況を整理する方法を解説。",
              ],
              [
                "就活ニュースの見方",
                "/columns/job-news",
                "業界動向・採用情報を効率よく確認する方法を解説。",
              ],
            ].map(([title, href, text]) => (
              <a
                key={href}
                href={href}
                className="group rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-[#0b1220]">
                    {title}
                  </h3>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    →
                  </span>
                </div>
                <p className="mt-4 leading-8 text-slate-600">{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-[#0b1220] p-10 text-center text-white shadow-2xl sm:p-16">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-white">
            <img
              src="/icon.png"
              alt="My就活"
              className="h-14 w-14 rounded-2xl"
            />
          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight">
            就活管理を、
            <br />
            スマホひとつで。
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-blue-100">
            企業管理、ES管理、面接予定、締切管理、就活ニュースをまとめて整理できます。
          </p>

          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-[64px] items-center justify-center rounded-2xl bg-white px-10 text-lg font-black text-[#0b1220] transition hover:-translate-y-1"
          >
            App Storeで無料ダウンロード
          </a>
        </div>
      </section>

      <footer className="border-t border-blue-100 bg-white/80 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm font-bold text-slate-500 md:flex-row">
          <p>© My就活</p>
          <div className="flex gap-5">
            <a href="/columns" className="hover:text-blue-600">
              就活コラム
            </a>
            <a href={appStoreUrl} className="hover:text-blue-600">
              App Store
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}