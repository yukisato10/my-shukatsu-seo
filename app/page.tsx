export default function Home() {
  const appStoreUrl =
    "https://apps.apple.com/jp/app/my%E5%B0%B1%E6%B4%BB-%E5%B0%B1%E6%B4%BB%E7%AE%A1%E7%90%86-es-%E3%83%9E%E3%82%A4%E3%83%9A%E3%83%BC%E3%82%B8-%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/id6760533552";

  const features = [
    {
      title: "企業管理",
      text: "選考状況・志望度・企業情報を整理",
      icon: "🏢",
    },
    {
      title: "ES管理",
      text: "設問・回答・志望動機を企業ごとに保存",
      icon: "📝",
    },
    {
      title: "予定管理",
      text: "面接・ES締切・説明会をカレンダーで管理",
      icon: "📅",
    },
    {
      title: "就活ニュース",
      text: "採用・インターン・業界ニュースを確認",
      icon: "📰",
    },
    {
      title: "就活サービス",
      text: "就活サイトやエージェントを比較",
      icon: "🚀",
    },
    {
      title: "マイページ管理",
      text: "ID・パスワードをまとめて管理",
      icon: "🔐",
    },
  ];

  const screens = [
    {
      title: "スケジュール管理",
      text: "面接・ES締切・説明会をカレンダーで管理。大事な予定の抜け漏れを防げます。",
      image: "/karenda-.jpg",
      alt: "就活スケジュール管理アプリのカレンダー画面",
    },
    {
      title: "ES管理",
      text: "ESの設問・回答・志望動機を企業ごとに保存。過去のESもすぐに見返せます。",
      image: "/ES.jpg",
      alt: "ES管理アプリの画面",
    },
    {
      title: "企業管理",
      text: "志望度や選考状況を一覧管理。企業ごとの進捗をひと目で確認できます。",
      image: "/kigyoukanri.jpg",
      alt: "企業管理アプリの画面",
    },
    {
      title: "予定管理",
      text: "企業ごとの予定をまとめて管理。予定にはメモも残せます。",
      image: "/yotei.jpg",
      alt: "企業ごとの予定管理画面",
    },
    {
      title: "企業メモ",
      text: "企業研究やOB訪問の内容を企業ごとにまとめて整理できます。",
      image: "/kigyoumemo.jpg",
      alt: "企業メモ管理画面",
    },
    {
      title: "就活ニュース",
      text: "採用・インターン・業界ニュースをアプリ内でまとめて確認できます。",
      image: "/news.jpg",
      alt: "就活ニュース機能の画面",
    },
    {
      title: "プロフィール管理",
      text: "ESで使う自己紹介やガクチカなどの内容を保存し、すぐにコピーできます。",
      image: "/purofi-ru.jpg",
      alt: "プロフィール管理画面",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/icon.png"
              alt="My就活"
              className="h-12 w-12 rounded-2xl shadow-2xl"
            />

            <div>
              <p className="text-xl font-black tracking-tight">My就活</p>
              <p className="text-xs text-blue-200">
                就活を、もっとスマートに。
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#features" className="hover:text-white">
              機能
            </a>
            <a href="#screens" className="hover:text-white">
              画面紹介
            </a>
            <a href="#columns" className="hover:text-white">
              コラム
            </a>
            <a href="#download" className="hover:text-white">
              ダウンロード
            </a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-bold text-blue-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              就活管理アプリ
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              就活を
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                一元管理
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
              ES・企業管理・面接予定・締切・就活ニュースを
              ひとつのアプリで管理。
              <br />
              複数企業の就活を、シンプルに整理できます。
            </p>

            <div
              id="download"
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[92px] items-center justify-center rounded-2xl bg-white px-8 text-center font-bold text-black shadow-2xl transition hover:scale-[1.03]"
              >
                App Storeで無料ダウンロード
              </a>

              <div className="flex min-h-[92px] flex-col justify-center rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur">
                <p className="text-sm text-gray-400">iPhone対応</p>
                <p className="mt-1 text-lg font-bold">完全無料</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-3xl" />

            <div className="relative flex w-full max-w-md flex-col items-center rounded-[3rem] border border-white/10 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-2xl">
              <img
                src="/icon.png"
                alt="My就活"
                className="h-44 w-44 rounded-[2rem] shadow-2xl sm:h-56 sm:w-56"
              />

              <h2 className="mt-8 text-3xl font-black">My就活</h2>

              <p className="mt-4 max-w-sm leading-8 text-gray-300">
                企業管理、ES管理、面接予定、締切、就活ニュースをまとめて整理できる就活管理アプリ。
              </p>

              <div className="mt-8 grid w-full grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-gray-400">主な機能</p>
                  <p className="mt-2 text-xl font-black">6つ</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-gray-400">料金</p>
                  <p className="mt-2 text-xl font-black">無料</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
            FEATURES
          </p>
          <h2 className="mt-4 text-4xl font-black">就活をラクにする機能</h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-3xl shadow-lg">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">{feature.title}</h3>

              <p className="mt-4 leading-8 text-gray-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="screens"
        className="border-y border-white/10 bg-[#081423] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
              APP SCREEN
            </p>

            <h2 className="mt-4 text-4xl font-black">
              アプリ画面で機能をチェック
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
              ES管理、企業管理、面接予定、就活ニュースなど、
              就活に必要な情報を一つのアプリにまとめて管理できます。
            </p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {screens.map((screen) => (
              <div
                key={screen.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10"
              >
                <img
                  src={screen.image}
                  alt={screen.alt}
                  className="w-full rounded-[1.5rem]"
                />

                <div className="p-4">
                  <h3 className="text-2xl font-bold">{screen.title}</h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {screen.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="columns"
        className="border-t border-white/10 bg-white/5 py-24 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
            COLUMN
          </p>

          <h2 className="mt-4 text-4xl font-black">就活コラム</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              ["就活管理アプリおすすめ", "/columns/job-hunting-management-app"],
              ["ES管理アプリおすすめ", "/columns/es-management"],
              ["面接管理アプリおすすめ", "/columns/interview-management"],
              ["就活ニュースの見方", "/columns/job-news"],
            ].map(([title, href]) => (
              <a
                key={href}
                href={href}
                className="group rounded-[2rem] border border-white/10 bg-[#0f172a]/70 p-8 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">{title}</h3>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-cyan-400/20">
                    →
                  </div>
                </div>

                <p className="mt-4 leading-8 text-gray-400">
                  詳しい解説を見る
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-blue-600 to-cyan-500 p-14 text-center shadow-2xl">
            <h2 className="text-4xl font-black leading-tight">
              就活をもっと
              <br />
              シンプルに。
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-blue-100">
              ES・企業管理・面接予定・締切管理をひとつのアプリで整理。
            </p>

            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-[64px] items-center justify-center rounded-2xl bg-white px-10 text-lg font-black text-black transition hover:scale-[1.03]"
            >
              無料で始める
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-400 md:flex-row">
          <p>© My就活</p>
        </div>
      </footer>
    </main>
  );
}