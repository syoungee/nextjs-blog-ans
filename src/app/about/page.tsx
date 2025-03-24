import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../../public/images/profile.JPG';

const careerData = [
  {
    company: 'Feel-Good',
    period: '2024.04 - 2025.01',
    position: 'Front-end Developer',
    description: ['자사 홈페이지 개발 및 배포(ReactJS)', '회원 관리 기능(Mypage) 구현', '사용자 경험(UX) 개선 - 다국어 번역 포함'],
    link: 'https://kpass.feel-good.io/',
  },
  {
    company: 'TecAce Gx',
    period: '2022.11 - 2023.11',
    position: 'Front-end Developer',
    description: ['삼성 스마트TV 앱(SEP) 개발(VueJS)', 'Admin 웹 페이지 개발', '자사 홈페이지 개발 및 유지보수'],
    link: 'https://tecace.com/work',
  },
  {
    company: 'RedBrick',
    period: '2022.03 - 2022.06',
    position: 'Front-end Developer',
    description: ['Redbrick Avatar1.0 page 구현(React)', '3D Studio 고도화 작업(React)'],
    link: 'https://www.notion.so/RedBrick-fb9b07b7f86b48e4967a049b7a86e1ba?pvs=21',
  },
  {
    company: 'WeHealed',
    period: '2020.12 - 2021.06',
    position: 'Front-end Developer Intern',
    description: [
      'AI 홈트레이닝 앱 “라이크 핏” UI 유지보수(React-Native)',
      '쿠폰존 UI 구현 및 딥링크 팝업 기능 개발',
      '사용자 관절 좌표 데이터 기반 스켈레톤 플레이어 제작(D3.js, Node.js)',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.wehealed.likefit.android&hl=ko&gl=US',
  },
];

function Hero() {
  return (
    <section className="text-center">
      <Image className="rounded-full mx-auto" src={profileImage} alt="Lia Hwang" width={250} height={250} priority />
      <h2 className="text-3xl font-bold mt-2">Hi, I'm Lia Hwang</h2>
      <h3 className="text-xl font-semibold">Front-end Developer</h3>
      <p>요가와 클라이밍에 푹 빠진 프론트엔드 개발자입니다.</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
      </Link>
    </section>
  );
}

function CareerItem({ company, period, position, description, link }) {
  return (
    <div className="p-4 border-b border-gray-300">
      <h4 className="text-2xl font-bold">{company}</h4>
      <p className="text-gray-600">{period}</p>
      <p className="font-semibold">{position}</p>
      <ul className="list-disc list-inside">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <Link href={link}>
        <button className="mt-2 bg-blue-500 text-white font-bold py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300">더 보기</button>
      </Link>
    </div>
  );
}

function CareerSection() {
  return (
    <section className="mt-6">
      <h3 className="text-3xl font-bold mb-4">Career</h3>
      {careerData.map((career, index) => (
        <CareerItem key={index} {...career} />
      ))}
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Hero />
      <CareerSection />
    </main>
  );
}
