import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ko: {
    translation: {
      nav: { about: '소개', skills: '기술', career: '경력', projects: '프로젝트', contact: '연락처' },
      hero: {
        greeting: '안녕하세요',
        name: '임진수입니다',
        sub: 'IT 엔지니어 | Java · Spring · Linux · RPA',
        contact: '연락하기',
        projects: '프로젝트 보기',
      },
      about: {
        title: '소개',
        body: '2017년 일본에 건너와 일본어를 익히고, 버거킹 재팬에서 점장으로 근무하며 현장 매니지먼트 경험을 쌓았습니다. 2023년 10월 IT로 전직해 현재 일본 3번째 현장에서 UFJ은행 MUTB BASE팀 소속으로 데이터베이스 설계 및 구축 업무를 담당하고 있습니다.',
      },
      skills: {
        title: '기술 스택',
        backend: '백엔드',
        infra: '인프라 / 자동화',
        frontend: '프론트엔드',
      },
      career: {
        title: '경력',
        items: [
          { period: '2025.10 – 현재', role: 'IT 엔지니어 3번째 안건', company: 'UFJ은행 MUTB BASE팀', desc: 'DB 테이블 설계 및 구축 담당. 이전 1번째 안건과 같은 UFJ은행 건물 내 근무.' },
          { period: '2025.2 – 2025.9', role: 'IT 엔지니어 2번째 안건 (Jenkins)', company: 'JFE 현장', desc: 'Jenkins를 이용한 서버 관리 및 배포 자동화. 아티팩트 파일 관리.' },
          { period: '2024.4 – 2025.1', role: 'IT 엔지니어 2번째 안건 (백엔드)', company: 'JFE 현장', desc: '공장 단말용 백엔드 개발. Java + Spring Boot 사용. 문자코드·바이트·16진수·8진수 등 저수준 처리 담당.' },
          { period: '2023.10 – 2024.3', role: 'IT 엔지니어 1번째 안건', company: 'UFJ은행 건물 내', desc: 'VBA + Java 배치로 인적관리 시스템 개발. 화면 및 마스터 테이블 구축.' },
          { period: '2021.10 – 2023.5', role: '점장', company: '버거킹 재팬', desc: '점포 전체 운영 관리. 인원 배치, 교육, 매출 관리.' },
          { period: '2019.3 – 2021.9', role: '스태프 → 부점장', company: '버거킹 재팬', desc: '현장 업무 및 팀 리더 역할.' },
          { period: '2019.2까지', role: '일본어학교', company: '일본', desc: '2017년 7월 도일 후 일본어 습득.' },
        ],
      },
      projects: {
        title: '프로젝트',
        items: [
          { name: 'board-api', desc: 'Spring Boot + JWT 기반 게시판 REST API. 회원가입/로그인, 게시글/댓글 CRUD, 테스트 37개.', tech: ['Java', 'Spring Boot', 'JPA', 'JWT', 'H2/MySQL'] },
          { name: 'board-front', desc: 'React + Tailwind CSS 게시판 프론트엔드. JWT 인증 연동, 게시글/댓글 전 기능.', tech: ['React', 'Vite', 'Tailwind CSS', 'Axios'] },
        ],
      },
      contact: {
        title: '연락처',
        email: '이메일',
        github: 'GitHub',
      },
    },
  },
  ja: {
    translation: {
      nav: { about: '自己紹介', skills: 'スキル', career: '経歴', projects: 'プロジェクト', contact: '連絡先' },
      hero: {
        greeting: 'はじめまして',
        name: 'イムジンスです',
        sub: 'ITエンジニア | Java · Spring · Linux · RPA',
        contact: 'お問い合わせ',
        projects: 'プロジェクトを見る',
      },
      about: {
        title: '自己紹介',
        body: '2017年に来日し、日本語学校で日本語を習得。バーガーキングジャパンで店長として現場マネジメントを経験した後、2023年10月にITへ転職。現在は3件目の案件として、UFJ銀行MUTBのBASEチームにてテーブル設計・DB構築業務を担当しています。',
      },
      skills: {
        title: 'スキルセット',
        backend: 'バックエンド',
        infra: 'インフラ / 自動化',
        frontend: 'フロントエンド',
      },
      career: {
        title: '経歴',
        items: [
          { period: '2025.10 – 現在', role: 'ITエンジニア 3件目', company: 'UFJ銀行 MUTB BASEチーム', desc: 'DBテーブル設計・構築を担当。1件目と同じUFJ銀行ビル内での勤務。' },
          { period: '2025.2 – 2025.9', role: 'ITエンジニア 2件目（Jenkins）', company: 'JFE現場', desc: 'Jenkinsを用いたサーバー管理・デプロイ自動化。アーティファクトファイル管理。' },
          { period: '2024.4 – 2025.1', role: 'ITエンジニア 2件目（バックエンド）', company: 'JFE現場', desc: '工場端末向けバックエンド開発。Java + Spring Boot使用。文字コード・バイト・16進数・8進数などの低レベル処理を担当。' },
          { period: '2023.10 – 2024.3', role: 'ITエンジニア 1件目', company: 'UFJ銀行ビル内', desc: 'VBA + Javaバッチで人事管理システム開発。画面およびマスターテーブル構築。' },
          { period: '2021.10 – 2023.5', role: '店長', company: 'バーガーキングジャパン', desc: '店舗全体の運営管理。シフト管理、スタッフ教育、売上管理。' },
          { period: '2019.3 – 2021.9', role: 'スタッフ → 副店長', company: 'バーガーキングジャパン', desc: '現場業務およびチームリーダーとして活躍。' },
          { period: '2019.2まで', role: '日本語学校', company: '日本', desc: '2017年7月に来日後、日本語を習得。' },
        ],
      },
      projects: {
        title: 'プロジェクト',
        items: [
          { name: 'board-api', desc: 'Spring Boot + JWTベースの掲示板REST API。ユーザー認証、投稿・コメントCRUD、テスト37件。', tech: ['Java', 'Spring Boot', 'JPA', 'JWT', 'H2/MySQL'] },
          { name: 'board-front', desc: 'React + Tailwind CSSの掲示板フロントエンド。JWT認証連携、投稿・コメント全機能実装。', tech: ['React', 'Vite', 'Tailwind CSS', 'Axios'] },
        ],
      },
      contact: {
        title: '連絡先',
        email: 'メール',
        github: 'GitHub',
      },
    },
  },
  en: {
    translation: {
      nav: { about: 'About', skills: 'Skills', career: 'Career', projects: 'Projects', contact: 'Contact' },
      hero: {
        greeting: "Hi, I'm",
        name: 'Jinsoo Lim',
        sub: 'IT Engineer | Java · Spring · Linux · RPA',
        contact: 'Get in touch',
        projects: 'View Projects',
      },
      about: {
        title: 'About Me',
        body: 'I moved to Japan in 2017, studied Japanese, and worked as a store manager at Burger King Japan. In October 2023, I transitioned into IT. Currently on my 3rd project assignment, working with the UFJ Bank MUTB BASE team on database table design and construction.',
      },
      skills: {
        title: 'Skills',
        backend: 'Backend',
        infra: 'Infrastructure / Automation',
        frontend: 'Frontend',
      },
      career: {
        title: 'Career',
        items: [
          { period: '2025.10 – Present', role: 'IT Engineer – 3rd Assignment', company: 'UFJ Bank MUTB BASE Team', desc: 'Database table design and construction. Working in the same UFJ Bank building as 1st assignment.' },
          { period: '2025.2 – 2025.9', role: 'IT Engineer – 2nd Assignment (Jenkins)', company: 'JFE Site', desc: 'Server management and deployment automation via Jenkins. Artifact file management.' },
          { period: '2024.4 – 2025.1', role: 'IT Engineer – 2nd Assignment (Backend)', company: 'JFE Site', desc: 'Backend development for factory terminal systems. Java + Spring Boot. Low-level processing: character encoding, bytes, hex, and octal.' },
          { period: '2023.10 – 2024.3', role: 'IT Engineer – 1st Assignment', company: 'UFJ Bank Building', desc: 'HR management system using VBA + Java batch. Screen and master table development.' },
          { period: '2021.10 – 2023.5', role: 'Store Manager', company: 'Burger King Japan', desc: 'Full store operations management. Staff scheduling, training, and sales management.' },
          { period: '2019.3 – 2021.9', role: 'Staff → Assistant Manager', company: 'Burger King Japan', desc: 'On-site operations and team leadership.' },
          { period: 'Until 2019.2', role: 'Japanese Language School', company: 'Japan', desc: 'Arrived in Japan in July 2017 and studied Japanese.' },
        ],
      },
      projects: {
        title: 'Projects',
        items: [
          { name: 'board-api', desc: 'Spring Boot + JWT-based bulletin board REST API. Auth, post/comment CRUD, 37 tests.', tech: ['Java', 'Spring Boot', 'JPA', 'JWT', 'H2/MySQL'] },
          { name: 'board-front', desc: 'React + Tailwind CSS bulletin board frontend. JWT auth integration, full post/comment features.', tech: ['React', 'Vite', 'Tailwind CSS', 'Axios'] },
        ],
      },
      contact: {
        title: 'Contact',
        email: 'Email',
        github: 'GitHub',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
