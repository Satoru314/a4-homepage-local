import AboutSection from "../components/about_section";
import DepartmentsSection from "../components/departments_section";
import NewsSection from "../components/news_section";
import HeroSection from "../components/hero_section";
import ActivityInfoSection from "../components/activity_info_section";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* ヒーローセクション */}
      <HeroSection />

      {/* ニュースセクション */}
      <NewsSection />

      {/* 団体紹介セクション */}
      <AboutSection />

      {/* 部署紹介セクション */}
      <DepartmentsSection />

      {/* 活動情報セクション */}
      <ActivityInfoSection />
    </div>
  );
}