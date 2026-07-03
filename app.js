// Jonathan Hecl Portfolio - Main Application Logic
// Built with Vanilla JS, ES6 Modules, and dynamic Canvas graphics.

// ==========================================
// 1. LOCALIZATION DICTIONARY
// ==========================================
const TRANSLATIONS = {
    es: {
        "nav.about": "Sobre mí",
        "nav.terminal": "Consola",
        "nav.skills": "Habilidades",
        "nav.projects": "Proyectos",
        "nav.experience": "Experiencia",
        
        "hero.greeting": "¡Hola Mundo! 👋 Yo soy",
        "hero.role_prefix": "Desarrollador ",
        "hero.bio": "Programador multidisciplinario y autodidacta, enfocado en el manejo de modelos LLM open-source y cómo hacerlos útiles para la sociedad. Apasionado por los sistemas eficientes, la inteligencia artificial local y el desarrollo de videojuegos.",
        "hero.btn_projects": "Ver Proyectos",
        "hero.btn_terminal": "Usar Terminal",
        "hero.card_tag": "@jonathanhecl",
        "hero.stat_years": "Años Exp",
        "hero.stat_repos": "Repos",
        "hero.stat_rank": "Rank AR",
        
        "terminal.tag": ">_ INTERACTIVO",
        "terminal.title": "La Consola de Jonathan",
        "terminal.subtitle": "Explora mi perfil ejecutando comandos retro en la terminal o haciendo clic en los botones rápidos.",
        "terminal.welcome": "Hecl-OS v2.6.7 (RAG Engine: Ollama Local)",
        "terminal.tip": "Escribe 'help' o haz clic abajo para ver los comandos disponibles.",
        
        "skills.tag": "HABILIDADES",
        "skills.title": "Matriz Tecnológica",
        "skills.subtitle": "Tecnologías y lenguajes que domino. Desde sistemas robustos en la nube hasta desarrollo indie de videojuegos.",
        
        "projects.tag": "PORTAFOLIO",
        "projects.title": "Proyectos Destacados",
        "projects.subtitle": "Una colección curada de herramientas de código abierto, agentes de IA, frameworks y videojuegos.",
        "projects.search_placeholder": "Buscar proyecto...",
        "projects.filter_all": "Todos",
        "projects.filter_ai": "IA & Agentes",
        "projects.filter_sys": "Sistemas & Seguridad",
        "projects.filter_game": "Videojuegos",
        "projects.filter_lib": "Librerías & Web",
        "projects.view_code": "Ver Código",
        
        "experience.tag": "TRAYECTORIA",
        "experience.title": "Hitos & Experiencia",
        "experience.subtitle": "Comunidades fundadas, canales de contenido y mi recorrido autodidacta.",
        
        "footer.tagline": "Construyendo tecnología transparente, abierta y rápida desde Argentina.",
        "footer.support_title": "Apoya mi trabajo libre",
        "footer.support_desc": "Si te gustan mis proyectos y el código abierto, puedes apoyarme mediante BNB/BEP-20:",
        "footer.copied": "¡Copiado al portapapeles!",
        "footer.rights": "Todos los derechos reservados. Hecho con pasión y código limpio.",
        
        // Dynamic console outputs
        "cli.help_title": "--- Comandos Disponibles ---",
        "cli.cmd_about": "about       - Conoce quién soy y mi filosofía de desarrollo.",
        "cli.cmd_skills": "skills      - Muestra mi pila de tecnologías principales.",
        "cli.cmd_projects": "projects    - Lista mis proyectos de software más destacados.",
        "cli.cmd_experience": "experience  - Mi recorrido y hitos profesionales.",
        "cli.cmd_contact": "contact     - Canales de contacto directo.",
        "cli.cmd_coffee": "buy-coffee  - Dirección de donación para café.",
        "cli.cmd_clear": "clear       - Limpiar la pantalla de la consola.",
        "cli.about_text": "Jonathan Hecl: Desarrollador full-stack y de videojuegos autodidacta radicado en Argentina. Enfocado en el manejo de modelos LLM open-source y cómo hacerlos útiles para la sociedad. Fundador de la legendaria comunidad GS-Zone y streamer en hidE_zone. Apasionado por la optimización de sistemas.",
        "cli.contact_text": "Puedes contactarme a través de:\n- Email: jonathanhecl@gmail.com\n- LinkedIn: https://www.linkedin.com/in/jhecl/\n- GitHub: https://github.com/jonathanhecl",
        "cli.coffee_text": "¡Gracias por el café! Dirección BNB/BEP-20: 0x13ED1fF925Aa0050D25904348dF9D7748ee6B88d",
        "cli.invalid": "Comando no reconocido. Escribe 'help' para ver la lista de comandos."
    },
    en: {
        "nav.about": "About",
        "nav.terminal": "Console",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        
        "hero.greeting": "Hello World! 👋 I am",
        "hero.role_prefix": "Full-stack ",
        "hero.bio": "Multidisciplinary, self-taught developer focused on open-source LLM management and making them useful for society. Passionate about efficient systems, local AI architectures, and game development.",
        "hero.btn_projects": "View Projects",
        "hero.btn_terminal": "Use Console",
        "hero.card_tag": "@jonathanhecl",
        "hero.stat_years": "Years Exp",
        "hero.stat_repos": "Repos",
        "hero.stat_rank": "AR Rank",
        
        "terminal.tag": ">_ INTERACTIVE",
        "terminal.title": "Jonathan's Console",
        "terminal.subtitle": "Explore my developer profile by running retro commands in the terminal, or using the quick action buttons.",
        "terminal.welcome": "Hecl-OS v2.6.7 (RAG Engine: Local Ollama)",
        "terminal.tip": "Type 'help' or click below to see the available commands.",
        
        "skills.tag": "SKILLS",
        "skills.title": "Technical Matrix",
        "skills.subtitle": "Technologies and languages I master. From robust cloud architectures to indie game engineering.",
        
        "projects.tag": "PORTFOLIO",
        "projects.title": "Featured Projects",
        "projects.subtitle": "A curated collection of open-source utilities, AI agents, game engines, and developer tools.",
        "projects.search_placeholder": "Search projects...",
        "projects.filter_all": "All",
        "projects.filter_ai": "AI & Agents",
        "projects.filter_sys": "Systems & Security",
        "projects.filter_game": "Game Dev",
        "projects.filter_lib": "Libraries & Web",
        "projects.view_code": "View Code",
        
        "experience.tag": "TIMELINE",
        "experience.title": "Milestones & Journey",
        "experience.subtitle": "Communities founded, stream channels, and my self-taught coding history.",
        
        "footer.tagline": "Building transparent, open, and fast technology from Argentina.",
        "footer.support_title": "Support my open-source work",
        "footer.support_desc": "If you enjoy my free software projects, you can support me via BNB/BEP-20:",
        "footer.copied": "Copied to clipboard!",
        "footer.rights": "All rights reserved. Crafted with passion and clean code.",
        
        // Dynamic console outputs
        "cli.help_title": "--- Available Commands ---",
        "cli.cmd_about": "about       - Learn about who I am and my coding philosophy.",
        "cli.cmd_skills": "skills      - View my core technology stack.",
        "cli.cmd_projects": "projects    - List my most remarkable software creations.",
        "cli.cmd_experience": "experience  - Show career highlights and history.",
        "cli.cmd_contact": "contact     - Get direct contact links.",
        "cli.cmd_coffee": "buy-coffee  - Support me with crypto-coffee.",
        "cli.cmd_clear": "clear       - Clear the console screen.",
        "cli.about_text": "Jonathan Hecl: Self-taught full-stack and game developer based in Argentina. Focused on open-source LLM management and making them useful for society. Founder of GS-Zone and content creator at hidE_zone. Driven by low-level coding and software optimization.",
        "cli.contact_text": "You can reach me at:\n- Email: jonathanhecl@gmail.com\n- LinkedIn: https://www.linkedin.com/in/jhecl/\n- GitHub: https://github.com/jonathanhecl",
        "cli.coffee_text": "Thanks for the support! BNB/BEP-20 address: 0x13ED1fF925Aa0050D25904348dF9D7748ee6B88d",
        "cli.invalid": "Command not recognized. Type 'help' to see the list of commands."
    },
    ja: {
        "nav.about": "自己紹介",
        "nav.terminal": "コンソール",
        "nav.skills": "スキル",
        "nav.projects": "プロジェクト",
        "nav.experience": "経歴",
        
        "hero.greeting": "ハローワールド！ 👋 私は",
        "hero.role_prefix": "フルスタック",
        "hero.bio": "オープンソースのLLMモデルの管理と、それらを社会に役立てることに注力する、独学の多才な開発者。効率的なシステム、ローカルAI、ゲーム開発に情熱を注いでいます。",
        "hero.btn_projects": "開発実績を見る",
        "hero.btn_terminal": "ターミナルを使う",
        "hero.card_tag": "@jonathanhecl",
        "hero.stat_years": "開発経験年数",
        "hero.stat_repos": "リポジトリ数",
        "hero.stat_rank": "AR順位",
        
        "terminal.tag": ">_ インタラクティブ",
        "terminal.title": "ジョナサンのターミナル",
        "terminal.subtitle": "レトロなコマンドを入力するか、クイックボタンをクリックして、私の開発者プロファイルをご覧ください。",
        "terminal.welcome": "Hecl-OS v2.6.7 (RAGエンジン: ローカルOllama)",
        "terminal.tip": "「help」と入力するか、下のボタンをクリックすると、利用可能なコマンドが表示されます。",
        
        "skills.tag": "スキル",
        "skills.title": "技術マトリクス",
        "skills.subtitle": "私が得意とする技術スタックです。堅牢なクラウドインフラからインディゲーム開発まで幅広く対応します。",
        
        "projects.tag": "実績紹介",
        "projects.title": "注目のプロジェクト",
        "projects.subtitle": "オープンソースユーティリティ、AIエージェント、ゲームエンジン、開発者向けツールの厳選コレクションです。",
        "projects.search_placeholder": "プロジェクトを検索...",
        "projects.filter_all": "すべて",
        "projects.filter_ai": "AI・エージェント",
        "projects.filter_sys": "システム・セキュリティ",
        "projects.filter_game": "ゲーム開発",
        "projects.filter_lib": "ライブラリ・Web",
        "projects.view_code": "ソースコード",
        
        "experience.tag": "タイムライン",
        "experience.title": "歩みとマイルストーン",
        "experience.subtitle": "創設したコミュニティ、配信チャンネル、そして独学のプログラミング史。",
        
        "footer.tagline": "アルゼンチンから、透明、オープン、かつ高速なテクノロジーをお届けします。",
        "footer.support_title": "オープンソース活動を支援する",
        "footer.support_desc": "もし私のプロジェクトやオープンソース活動が気に入っていただけましたら、BNB/BEP-20経由でご支援をお願いいたします：",
        "footer.copied": "クリップボードにコピーしました！",
        "footer.rights": "All rights reserved. 情熱とクリーンなコードで構築されました。",
        
        // Dynamic console outputs
        "cli.help_title": "--- 利用可能なコマンド ---",
        "cli.cmd_about": "about       - 開発哲学とプロフィールを表示します。",
        "cli.cmd_skills": "skills      - 主要なスキルスタックを表示します。",
        "cli.cmd_projects": "projects    - 注目すべき開発製品をリストアップします。",
        "cli.cmd_experience": "experience  - これまでの経歴や主要実績を表示します。",
        "cli.cmd_contact": "contact     - 連絡先チャンネルを表示します。",
        "cli.cmd_coffee": "buy-coffee  - コーヒー代を送るためのアドレスを表示します。",
        "cli.cmd_clear": "clear       - 画面をクリアします。",
        "cli.about_text": "Jonathan Hecl: アルゼンチン在住の独学のフルスタックおよびゲーム開発者。オープンソースLLM의 管理と社会への応用に注力。伝説的なコミュニティ「GS-Zone」の創設者であり「hidE_zone」配信者。低レベルのコーディングと最適化を追求。",
        "cli.contact_text": "連絡先一覧:\n- Email: jonathanhecl@gmail.com\n- LinkedIn: https://www.linkedin.com/in/jhecl/\n- GitHub: https://github.com/jonathanhecl",
        "cli.coffee_text": "サポートありがとうございます！ BNB/BEP-20アドレス: 0x13ED1fF925Aa0050D25904348dF9D7748ee6B88d",
        "cli.invalid": "不明なコマンドです。「help」と入力してコマンド一覧をご確認ください。"
    }
};

// ==========================================
// 2. PROJECT DATA
// ==========================================
const PROJECTS = [
    {
        id: "go-crew",
        category: "ai",
        title: "GO-Crew",
        desc: {
            es: "Sistema RAG offline standalone para indexar y consultar documentos en un entorno local seguro. Desarrollado en Go, integra Ollama para IA de vanguardia sin dependencia de la nube.",
            en: "Standalone offline RAG system to index and query documents in a secure local environment. Written in Go, integrating Ollama for zero cloud dependencies.",
            ja: "ドキュメントを安全なローカル環境で索引・検索するスタンドアロンオフラインRAGシステム。Go言語で書かれ、クラウド不要でOllamaを統合。"
        },
        tags: ["Golang", "Ollama", "RAG", "Vector-DB", "Svelte"],
        github: "https://github.com/jonathanhecl/go-crew"
    },
    {
        id: "vibe-coder",
        category: "ai",
        title: "vibe-coder",
        desc: {
            es: "Agente de programación local-first diseñado específicamente para Ollama. Automatiza refactorizaciones, genera código y responde consultas técnicas directamente desde tu máquina.",
            en: "Local-first coding assistant designed specifically for Ollama models. Automates refactoring, generates code, and answers technical queries on your machine.",
            ja: "Ollamaモデル専用のローカルファーストコーディングエージェント。コード生成、リファクタリング、技術的な質問の回答をマシン上で自動化。"
        },
        tags: ["Golang", "Ollama", "AI-Agent", "CLI", "JSON-RPC"],
        github: "https://github.com/jonathanhecl" // General github redirect since it's one of his top search mentions
    },
    {
        id: "ollama-manager",
        category: "ai",
        title: "Ollama-Manager",
        desc: {
            es: "Interfaz gráfica y panel de control para administrar modelos locales de Ollama, permitiendo descargar, eliminar y probar modelos de manera interactiva.",
            en: "Graphical interface and control panel to manage local Ollama models, enabling users to download, delete, and test models interactively.",
            ja: "ローカルのOllamaモデルを管理するためのグラフィカルインターフェースとコントロールパネル。モデルを対話的にダウンロード、削除、テストできます。"
        },
        tags: ["Golang", "Ollama", "Model-Management", "Desktop-App", "REST-API"],
        github: "https://github.com/jonathanhecl/Ollama-Manager"
    },
    {
        id: "ollamabot",
        category: "ai",
        title: "ollamabot",
        desc: {
            es: "Bot y enrutador inteligente y eficiente de recursos locales que combina múltiples modelos de Ollama, permitiendo aprovechar diferentes capacidades en cada uno.",
            en: "Intelligent and efficient local resource router that combines multiple Ollama models, leveraging unique capabilities from each model.",
            ja: "複数のOllamaモデルを組み合わせ、それぞれの独自の機能を活用する、ローカルリソース用のインテリジェントで効率的なルーターボット。"
        },
        tags: ["Golang", "Ollama", "Smart-Routing", "AI-Agent", "Telegram-Bot"],
        github: "https://github.com/jonathanhecl/ollamabot"
    },
    {
        id: "imperial-shield",
        category: "sys",
        title: "Imperial Shield",
        desc: {
            es: "Centro de seguridad avanzado para Windows. Realiza monitoreo en tiempo real del archivo HOSTS, Windows Defender, configuración de red y telemetría de privacidad.",
            en: "Advanced Windows security hub. Features real-time monitoring for the HOSTS file, Windows Defender, network configurations, and telemetry privacy.",
            ja: "Windows向けの高度なセキュリティハブ。HOSTSファイル、Windows Defender、ネットワーク構成、プライバシーの遠隔測定をリアルタイム監視。"
        },
        tags: ["C#", "Windows-API", "Security", "WPF", "Networking"],
        github: "https://github.com/jonathanhecl/imperial-shield"
    },
    {
        id: "japaverbs",
        category: "lib",
        title: "JapaVerbs",
        desc: {
            es: "Aplicación Web Progresiva (PWA) de alto rendimiento diseñada para aprender y practicar conjugaciones de verbos en japonés de forma interactiva y sin conexión.",
            en: "High-performance Progressive Web App (PWA) designed to learn and practice Japanese verb conjugations interactively and offline.",
            ja: "日本語の動詞の活用をインタラクティブかつオフラインで学習・練習するために設計された高性能PWA（プログレッシブウェブアプリ）。"
        },
        tags: ["TypeScript", "PWA", "Japanese", "TailwindCSS", "Svelte"],
        github: "https://github.com/jonathanhecl/japaverbs"
    },
    {
        id: "ollama-bench-go",
        category: "ai",
        title: "ollama-bench-go",
        desc: {
            es: "Herramienta de benchmarking en línea de comandos para medir el rendimiento de modelos locales cargados en Ollama. Mide tokens por segundo y uso de hardware.",
            en: "Command-line benchmarking utility to measure token-generation speeds and hardware resource usage of local Ollama models.",
            ja: "ローカルのOllamaモデルの処理速度とハードウェアリソースの使用量を測定するコマンドラインベンチマークツール。"
        },
        tags: ["Golang", "Ollama", "Benchmark", "CLI", "Analytics"],
        github: "https://github.com/jonathanhecl/ollama-bench-go"
    },
    {
        id: "pnotepad-plus",
        category: "sys",
        title: "pNotepad+",
        desc: {
            es: "Bloc de notas seguro y multiplataforma con cifrado AES-256 de nivel militar para almacenar notas confidenciales sin depender de servidores externos.",
            en: "Secure, cross-platform encrypted text editor with military-grade AES-256 encryption to manage sensitive notes locally.",
            ja: "軍用グレードのAES-256暗号化を備えた、安全なマルチプラットフォーム暗号化テキストエディタ。ノートをローカル管理します。"
        },
        tags: ["Golang", "Cryptography", "AES-256", "Fyne-UI", "Security"],
        github: "https://github.com/jonathanhecl/pNotepad-plus"
    },
    {
        id: "gollama",
        category: "lib",
        title: "gollama",
        desc: {
            es: "Librería de integración ultraligera en Golang para interactuar con la API de Ollama, facilitando el desarrollo rápido de aplicaciones que usen LLMs locales.",
            en: "Ultra-lightweight Golang integration library to interact with Ollama's API, enabling rapid local LLM application development.",
            ja: "OllamaのAPIとやり取りするための超軽量なGolang統合ライブラリ。ローカルLLMアプリケーションの迅速な開発を可能にします。"
        },
        tags: ["Golang", "API-Wrapper", "Ollama", "JSON", "HTTP-Client"],
        github: "https://github.com/jonathanhecl/gollama"
    },
    {
        id: "stream-sync",
        category: "lib",
        title: "stream-sync",
        desc: {
            es: "Gestor de transmisiones multiplataforma para sincronizar el estado, los chats y la información de streaming de forma concurrente entre Twitch y Kick.",
            en: "Cross-platform stream manager to concurrently synchronize broadcasting status, chats, and metadata between Twitch and Kick platforms.",
            ja: "TwitchとKickプラットフォーム間で、配信ステータス、チャット、メタデータを同時に同期するマルチプラットフォーム配信マネージャ。"
        },
        tags: ["TypeScript", "Twitch-API", "Kick-API", "WebSockets", "Node.js"],
        github: "https://github.com/jonathanhecl/stream-sync"
    },
    {
        id: "argentum-godot",
        category: "game",
        title: "Argentum Godot Client",
        desc: {
            es: "Cliente multijugador desarrollado en Godot Engine para Argentum Online v0.12.1, portando mecánicas retro en red a un motor gráfico moderno.",
            en: "Multiplayer client developed in Godot Engine for Argentum Online v0.12.1, porting retro network mechanics to a modern engine.",
            ja: "Argentum Online v0.12.1向けにGodot Engineで開発されたマルチプレイヤーC/Sクライアント。レトロな同期機構を現代風に移植。"
        },
        tags: ["Godot-4", "GDScript", "ENet", "Game-Networking", "Argentum-Online"],
        github: "https://github.com/jonathanhecl/Argentum"
    },
    {
        id: "webao",
        category: "game",
        title: "webAO",
        desc: {
            es: "Experimento técnico y prueba de concepto para ejecutar la lógica de cliente de Argentum Online directamente en el navegador usando HTML5 y canvas.",
            en: "Technical experiment and proof of concept to run the classic Argentum Online client engine directly inside the browser using HTML5.",
            ja: "HTML5とCanvasを使用して、ブラウザ内でクラシックなArgentum Onlineのクライアントエンジンを直接実行する技術実験。"
        },
        tags: ["JavaScript", "HTML5-Canvas", "WebSockets", "Retro-Game"],
        github: "https://github.com/jonathanhecl/webAO"
    },
    {
        id: "destructible-terrain",
        category: "game",
        title: "Destructible Terrain Godot 4",
        desc: {
            es: "Proyecto plantilla que demuestra la implementación de terrenos 2D completamente destructibles en tiempo real mediante operaciones con máscaras de bits.",
            en: "Template project showcasing real-time destructible 2D terrain in Godot 4 using bitmap masking operations and physics updates.",
            ja: "ビットマップマスク操作と物理演算を使用して、Godot 4でリアルタイムに破壊可能な2D地形を実装するテンプレート。"
        },
        tags: ["Godot-4", "GDScript", "Physics", "2D-Graphics", "Bitmaps"],
        github: "https://github.com/jonathanhecl/destructible-terrain-godot4"
    },
    {
        id: "bru-ship",
        category: "lib",
        title: "bru-ship",
        desc: {
            es: "Herramienta de línea de comandos en Go para convertir colecciones de Bruno API al formato clásico de Postman, ideal para la migración de equipos.",
            en: "CLI tool in Go to convert Bruno API collections into Postman format, simplifying API specification sharing and migrations.",
            ja: "Bruno APIコレクションをPostman形式に変換するGo製のCLIツール。API仕様の共有や移行を簡素化。"
        },
        tags: ["Golang", "CLI", "API-Migration", "Postman", "Bruno"],
        github: "https://github.com/jonathanhecl/bru-ship"
    }
];

// ==========================================
// 3. SKILLS DATA
// ==========================================
const SKILLS = [
    {
        category: { es: "Backend & Sistemas", en: "Backend & Systems", ja: "バックエンド・システム" },
        icon: "fa-server",
        glow: "cyan",
        items: [
            { name: "Golang", level: 95 },
            { name: "gRPC & Protocol Buffers", level: 90 },
            { name: "Node.js (TypeScript)", level: 85 },
            { name: "PHP", level: 80 },
            { name: "C# / VB.NET / VB6", level: 90 }
        ]
    },
    {
        category: { es: "Desarrollo de Videojuegos", en: "Game Development", ja: "ゲーム開発" },
        icon: "fa-gamepad",
        glow: "purple",
        items: [
            { name: "Godot Engine (4.x / GDExtension)", level: 95 },
            { name: "Rust / C++ for Godot", level: 80 },
            { name: "Unity Engine", level: 75 },
            { name: "Game Networking (ENet, TCP/UDP)", level: 90 },
            { name: "Math & Physics 2D/3D", level: 85 }
        ]
    },
    {
        category: { es: "Front-end & Web", en: "Front-end & Web", ja: "フロントエンド・Web" },
        icon: "fa-laptop-code",
        glow: "emerald",
        items: [
            { name: "Svelte", level: 90 },
            { name: "React", level: 80 },
            { name: "Angular / AngularJS", level: 85 },
            { name: "HTML5 Canvas (Core Javascript)", level: 95 },
            { name: "PWA (Progressive Web Apps)", level: 85 }
        ]
    },
    {
        category: { es: "Infraestructura & Datos", en: "Infrastructure & Data", ja: "インフラ・データベース" },
        icon: "fa-database",
        glow: "yellow",
        items: [
            { name: "Google Cloud Platform (GCP)", level: 80 },
            { name: "Ollama (Local LLM Infrastructure)", level: 95 },
            { name: "Firebase (Real-time DB / Auth)", level: 90 },
            { name: "MongoDB", level: 80 },
            { name: "MySQL / SQLite", level: 85 }
        ]
    }
];

// ==========================================
// 4. TIMELINE/EXPERIENCE DATA
// ==========================================
const TIMELINE = [
    {
        year: "2005 - Presente",
        year_en: "2005 - Present",
        year_ja: "2005 - 現在",
        title: {
            es: "Fundador y Administrador | Comunidad GS-Zone",
            en: "Founder & Administrator | GS-Zone Community",
            ja: "創設者兼管理者 | GS-Zoneコミュニティ"
        },
        desc: {
            es: "Fundé y administré la comunidad de desarrollo en línea más grande de habla hispana enfocada en Argentum Online y desarrollo indie. Con más de 500,000 publicaciones, logré liderar la administración del servidor, seguridad contra ataques, hosting de bases de datos, y moderación de equipos.",
            en: "Founded and managed the largest Spanish-speaking online development community focusing on Argentum Online and indie game dev. Hosting over 500,000 posts, managing server setups, database tuning, network security, and moderator teams.",
            ja: "Argentum Onlineとインディゲーム開発に焦点を当てた、スペイン語圏最大のオンライン開発コミュニティを創設・運営。50万件以上の投稿があり、サーバー管理、セキュリティ対策、データベース調整、チームのモデレーションを主導。"
        },
        icon: "fa-users"
    },
    {
        year: "2020 - Presente",
        year_en: "2020 - Present",
        year_ja: "2020 - 現在",
        title: {
            es: "Creador de Contenido & Streamer | hidE_zone",
            en: "Content Creator & Streamer | hidE_zone",
            ja: "コンテンツクリエイター＆配信者 | hidE_zone"
        },
        desc: {
            es: "Canal de YouTube y transmisiones en vivo enfocado en la programación en tiempo real, el diseño de videojuegos en Godot Engine, y el análisis de algoritmos e inteligencia artificial. Creando una comunidad activa de jóvenes programadores.",
            en: "YouTube channel and live streams dedicated to live coding, game architecture design in Godot Engine, local AI setups, and algorithms walkthroughs, forming an active sub-community of young developers.",
            ja: "ライブコーディング、Godot Engineでのゲーム設計、アルゴリズム分析、AI開発などに特化したYouTubeチャンネルとライブ配信。意欲的な若手プログラマーのアクティブなコミュニティを育成。"
        },
        icon: "fa-tv"
    },
    {
        year: "2005 - En adelante",
        year_en: "2005 - Onward",
        year_ja: "2005 - 以降",
        title: {
            es: "Desarrollador Full-stack & Creador Open Source",
            en: "Full-stack Developer & Open Source Creator",
            ja: "フルスタック開発者・オープンソース制作者"
        },
        desc: {
            es: "Trayectoria multidisciplinaria y autodidacta desarrollando más de 80 proyectos. Especializado en el ecosistema Go (microservicios gRPC, CLI de alto rendimiento) y el motor Godot. Creador de librerías para Ollama y utilidades robustas de seguridad para sistemas operativos Windows.",
            en: "A self-taught journey developing over 80 code repositories. Specializing in the Go ecosystem (high-performance CLI, gRPC microservices), Godot engine architectures, Ollama wrapper integrations, and Windows OS native security layers.",
            ja: "80以上のコードリポジトリを開発した独学のジャーニー。Goエコシステム（高性能CLI、gRPCマイクロサービス）、Godotエンジン設計、Ollama連携モジュール、Windows用セキュリティユーティリティなどの開発に特化。"
        },
        icon: "fa-laptop-code"
    }
];

// Typewriter Roles array
const TYPING_WORDS = {
    es: ["Full-stack", "de Videojuegos", "Autodidacta", "en Golang", "en Godot"],
    en: ["Developer", "Game Engineer", "Self-taught Developer", "in Go", "in Godot"],
    ja: ["開発者", "ゲームエンジニア", "独学のプログラマー", "Go言語使い", "Godot開発者"]
};

// ==========================================
// 5. TRANSLATION CONTROLLER
// ==========================================
let currentLanguage = "es";

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // 1. Static translations
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        }
    });

    // 2. Placeholder translations
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (TRANSLATIONS[lang][key]) {
            el.setAttribute("placeholder", TRANSLATIONS[lang][key]);
        }
    });

    // Update floating language indicator text
    document.getElementById("currentLang").textContent = lang.toUpperCase();

    // Render dynamic blocks with new translations
    renderSkillsGrid();
    renderProjectsGrid();
    renderTimeline();
}

// Initialize Language Selection Actions
function initLanguageSelector() {
    const langBtn = document.getElementById("langBtn");
    const langDropdown = document.getElementById("langDropdown");

    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
        langDropdown.classList.remove("open");
    });

    langDropdown.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", (e) => {
            const lang = e.currentTarget.getAttribute("data-lang");
            setLanguage(lang);
            langDropdown.classList.remove("open");
        });
    });
}

// ==========================================
// 6. RENDER DYNAMIC COMPONENTS
// ==========================================

function renderSkillsGrid() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;
    
    grid.innerHTML = "";

    SKILLS.forEach(skillCat => {
        const catName = skillCat.category[currentLanguage] || skillCat.category["es"];
        
        const card = document.createElement("div");
        card.className = `skill-card glow-${skillCat.glow}`;
        
        let itemsHtml = "";
        skillCat.items.forEach(item => {
            itemsHtml += `
                <div class="skill-item">
                    <div class="skill-item-info">
                        <span class="skill-item-name">${item.name}</span>
                        <span class="skill-item-percent">${item.level}%</span>
                    </div>
                    <div class="skill-progress-bg">
                        <div class="skill-progress-bar bar-${skillCat.glow}" style="width: ${item.level}%"></div>
                    </div>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="skill-card-header">
                <div class="skill-icon-box box-${skillCat.glow}">
                    <i class="fa-solid ${skillCat.icon}"></i>
                </div>
                <h3>${catName}</h3>
            </div>
            <div class="skill-card-body">
                ${itemsHtml}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function renderProjectsGrid(searchTerm = "", filterTerm = "all") {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    
    grid.innerHTML = "";
    const cleanSearch = searchTerm.toLowerCase().trim();

    const filtered = PROJECTS.filter(proj => {
        // Category check
        if (filterTerm !== "all" && proj.category !== filterTerm) {
            return false;
        }
        
        // Search check
        if (cleanSearch !== "") {
            const titleMatch = proj.title.toLowerCase().includes(cleanSearch);
            const descMatch = (proj.desc[currentLanguage] || "").toLowerCase().includes(cleanSearch);
            const tagsMatch = proj.tags.some(tag => tag.toLowerCase().includes(cleanSearch));
            return titleMatch || descMatch || tagsMatch;
        }

        return true;
    });

    if (filtered.length === 0) {
        const noResults = document.createElement("div");
        noResults.className = "no-projects-found";
        noResults.innerHTML = `
            <i class="fa-regular fa-folder-open text-4xl opacity-50 mb-3"></i>
            <p>${currentLanguage === 'es' ? 'No se encontraron proyectos.' : currentLanguage === 'ja' ? 'プロジェクトが見つかりません。' : 'No projects found.'}</p>
        `;
        grid.appendChild(noResults);
        return;
    }

    filtered.forEach(proj => {
        const descText = proj.desc[currentLanguage] || proj.desc["es"];
        const tagsHtml = proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");
        
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-card-content">
                <h3 class="project-card-title">${proj.title}</h3>
                <p class="project-card-desc">${descText}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
            </div>
            <div class="project-card-footer">
                <a href="${proj.github}" target="_blank" rel="noopener" class="project-code-link">
                    <i class="fa-brands fa-github"></i>
                    <span>${TRANSLATIONS[currentLanguage]["projects.view_code"]}</span>
                </a>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function renderTimeline() {
    const wrapper = document.getElementById("experienceTimeline");
    if (!wrapper) return;
    
    wrapper.innerHTML = "";

    TIMELINE.forEach((item, index) => {
        const yearText = currentLanguage === "en" ? item.year_en : currentLanguage === "ja" ? item.year_ja : item.year;
        const titleText = item.title[currentLanguage] || item.title["es"];
        const descText = item.desc[currentLanguage] || item.desc["es"];
        
        const card = document.createElement("div");
        card.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        card.innerHTML = `
            <div class="timeline-dot">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-year">${yearText}</div>
                <h3 class="timeline-title">${titleText}</h3>
                <p class="timeline-desc">${descText}</p>
            </div>
        `;
        
        wrapper.appendChild(card);
    });
}

// Initialize search and category filtering events
function initProjectsControls() {
    const searchInput = document.getElementById("projectSearch");
    const filterTabs = document.querySelectorAll(".filter-tab");
    
    let currentFilter = "all";
    let searchVal = "";

    searchInput.addEventListener("input", (e) => {
        searchVal = e.target.value;
        renderProjectsGrid(searchVal, currentFilter);
    });

    filterTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            filterTabs.forEach(t => t.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            currentFilter = e.currentTarget.getAttribute("data-filter");
            renderProjectsGrid(searchVal, currentFilter);
        });
    });
}

// ==========================================
// 7. RETRO TERMINAL CONSOLE EMULATOR
// ==========================================
function initTerminal() {
    const terminalInput = document.getElementById("terminalInput");
    const terminalBody = document.getElementById("terminalBody");
    const quickButtons = document.querySelectorAll(".terminal-qbtn");
    
    if (!terminalInput || !terminalBody) return;

    // Command History (Up/Down arrows)
    const cmdHistory = [];
    let historyIdx = -1;

    // Focus input on body click
    terminalBody.addEventListener("click", () => {
        terminalInput.focus();
    });

    // Intercept Enter key
    terminalInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = terminalInput.value;
            executeCommand(command);
            terminalInput.value = "";
            historyIdx = -1;
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (cmdHistory.length > 0) {
                if (historyIdx === -1) historyIdx = cmdHistory.length - 1;
                else if (historyIdx > 0) historyIdx--;
                terminalInput.value = cmdHistory[historyIdx];
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (cmdHistory.length > 0 && historyIdx !== -1) {
                if (historyIdx < cmdHistory.length - 1) {
                    historyIdx++;
                    terminalInput.value = cmdHistory[historyIdx];
                } else {
                    historyIdx = -1;
                    terminalInput.value = "";
                }
            }
        }
    });

    // Attach quick clicks
    quickButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const cmd = e.currentTarget.getAttribute("data-cmd");
            executeCommand(cmd);
        });
    });

    function executeCommand(cmdStr) {
        const cmdClean = cmdStr.trim().toLowerCase();
        if (cmdClean === "") return;

        // Record history
        cmdHistory.push(cmdStr);

        // Echo prompt
        appendLine(`guest@hecl-os:~$ ${cmdStr}`, "echo-line");

        // Parse command
        switch (cmdClean) {
            case "help":
                printHelp();
                break;
            case "clear":
                clearTerminal();
                break;
            case "about":
                appendLine(TRANSLATIONS[currentLanguage]["cli.about_text"], "output-line text-green");
                break;
            case "contact":
                appendMultiline(TRANSLATIONS[currentLanguage]["cli.contact_text"], "output-line text-cyan");
                break;
            case "sudo buy-coffee":
            case "buy-coffee":
                appendLine(TRANSLATIONS[currentLanguage]["cli.coffee_text"], "output-line text-yellow font-bold");
                break;
            case "skills":
                printSkillsCLI();
                break;
            case "projects":
                printProjectsCLI();
                break;
            case "experience":
                printExperienceCLI();
                break;
            default:
                appendLine(TRANSLATIONS[currentLanguage]["cli.invalid"], "output-line text-red");
                break;
        }

        // Auto scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function appendLine(text, className = "output-line") {
        const line = document.createElement("div");
        line.className = className;
        line.textContent = text;
        
        // Insert before the input line
        const inputLine = terminalBody.querySelector(".terminal-input-line");
        terminalBody.insertBefore(line, inputLine);
    }

    function appendMultiline(text, className = "output-line") {
        const lines = text.split("\n");
        lines.forEach(l => appendLine(l, className));
    }

    function clearTerminal() {
        const outputs = terminalBody.querySelectorAll(".output-line, .echo-line");
        outputs.forEach(node => node.remove());
    }

    function printHelp() {
        appendLine(TRANSLATIONS[currentLanguage]["cli.help_title"], "output-line font-bold text-cyan");
        appendLine(TRANSLATIONS[currentLanguage]["cli.cmd_about"]);
        appendLine(TRANSLATIONS[currentLanguage]["cli.cmd_skills"]);
        appendLine(TRANSLATIONS[currentLanguage]["cli.cmd_projects"]);
        appendLine(TRANSLATIONS[currentLanguage]["cli.cmd_experience"]);
        appendLine(TRANSLATIONS[currentLanguage]["cli.cmd_contact"]);
        appendLine(TRANSLATIONS[currentLanguage]["cli.cmd_coffee"]);
        appendLine(TRANSLATIONS[currentLanguage]["cli.cmd_clear"]);
    }

    function printSkillsCLI() {
        appendLine("--- SKILLS MATRIX ---", "output-line font-bold text-purple");
        SKILLS.forEach(cat => {
            const catName = cat.category[currentLanguage] || cat.category["es"];
            appendLine(`[${catName}]`, "output-line text-cyan font-semibold mt-1");
            cat.items.forEach(item => {
                const dots = ".".repeat(Math.max(2, 25 - item.name.length));
                appendLine(`  ${item.name} ${dots} ${item.level}%`);
            });
        });
    }

    function printProjectsCLI() {
        appendLine("--- FEATURED REPOS ---", "output-line font-bold text-emerald");
        PROJECTS.slice(0, 6).forEach(proj => {
            appendLine(`* ${proj.title} [${proj.tags.slice(0, 3).join(", ")}]`, "output-line font-semibold mt-1 text-cyan");
            appendLine(`  ${proj.desc[currentLanguage] || proj.desc["es"]}`);
        });
        appendLine("... and 70+ more projects on GitHub!", "output-line text-gray italic mt-1");
    }

    function printExperienceCLI() {
        appendLine("--- TIMELINE HIGHLIGHTS ---", "output-line font-bold text-yellow");
        TIMELINE.forEach(item => {
            const title = item.title[currentLanguage] || item.title["es"];
            const year = currentLanguage === "en" ? item.year_en : currentLanguage === "ja" ? item.year_ja : item.year;
            appendLine(`[${year}] ${title}`, "output-line text-cyan font-semibold mt-1");
            appendLine(`  ${item.desc[currentLanguage] || item.desc["es"]}`);
        });
    }
}

// ==========================================
// 8. HERO TYPEWRITER ANIMATION
// ==========================================
function initTypewriter() {
    const target = document.getElementById("typewriter-text");
    if (!target) return;

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let delay = 150;

    function type() {
        const words = TYPING_WORDS[currentLanguage] || TYPING_WORDS["es"];
        const currentWord = words[wordIdx];
        
        if (isDeleting) {
            target.textContent = currentWord.substring(0, charIdx - 1);
            charIdx--;
            delay = 60;
        } else {
            target.textContent = currentWord.substring(0, charIdx + 1);
            charIdx++;
            delay = 120;
        }

        if (!isDeleting && charIdx === currentWord.length) {
            isDeleting = true;
            delay = 2000; // Pause at full word
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            delay = 500; // Pause before typing next word
        }

        setTimeout(type, delay);
    }

    // Start typewriter
    type();
}

// ==========================================
// 9. 3D TILT EFFECT FOR PROFILE CARD
// ==========================================
function initProfileTilt() {
    const card = document.getElementById("profileCard");
    if (!card) return;

    card.addEventListener("mousemove", (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        
        // Mouse coordinate relative to the card center
        const mouseX = e.clientX - cardRect.left - cardWidth / 2;
        const mouseY = e.clientY - cardRect.top - cardHeight / 2;
        
        // Degrees of rotation (max 15deg)
        const rotateX = -(mouseY / (cardHeight / 2)) * 12;
        const rotateY = (mouseX / (cardWidth / 2)) * 12;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        
        // Move the glow spot
        const glow = card.querySelector(".profile-card-glow");
        if (glow) {
            const glowX = e.clientX - cardRect.left;
            const glowY = e.clientY - cardRect.top;
            glow.style.background = `radial-gradient(circle 200px at ${glowX}px ${glowY}px, rgba(99, 102, 241, 0.15), transparent 80%)`;
        }
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        const glow = card.querySelector(".profile-card-glow");
        if (glow) {
            glow.style.background = "transparent";
        }
    });
}

// ==========================================
// 10. INTERACTIVE CANVAS PARTICLES ENGINE
// ==========================================
function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const maxParticles = Math.min(100, Math.floor((width * height) / 15000));
    
    const mouse = {
        x: null,
        y: null,
        radius: 120
    };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            // Palette matches deep indigo theme
            this.color = Math.random() > 0.5 ? "rgba(99, 102, 241, 0.4)" : "rgba(6, 182, 212, 0.35)";
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            // Bounce off boundaries
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;

            // Move
            this.x += this.vx;
            this.y += this.vy;

            // Interactive response to mouse position (slight push away)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x += (dx / dist) * force * 1.5;
                    this.y += (dy / dist) * force * 1.5;
                }
            }

            this.draw();
        }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);

                if (dist < 100) {
                    const alpha = (100 - dist) / 100 * 0.15;
                    ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

// ==========================================
// 11. GENERAL UTILITIES (DONATION CLIPS, SCROLLS)
// ==========================================
function initGeneralUtilities() {
    const copyBtn = document.getElementById("copyWalletBtn");
    const walletText = document.getElementById("walletAddr");
    const toast = document.getElementById("copyToast");

    if (copyBtn && walletText) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(walletText.textContent).then(() => {
                if (toast) {
                    toast.classList.add("visible");
                    setTimeout(() => {
                        toast.classList.remove("visible");
                    }, 2500);
                }
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
    }

    // Smooth Scroll behaviors
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#") && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });
}

// ==========================================
// 12. RUN INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Detect system/browser language default
    const userLang = (navigator.language || navigator.userLanguage).toLowerCase();
    const defaultLang = userLang.startsWith("es") ? "es" : userLang.startsWith("ja") ? "ja" : "en";
    
    // Setup and trigger initial load
    initLanguageSelector();
    setLanguage(defaultLang);
    initGeneralUtilities();
    
    // Core dynamic components
    initParticles();
    initTypewriter();
    initProfileTilt();
    initTerminal();
    initProjectsControls();
});
