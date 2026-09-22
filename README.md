# 다이렉트 자동차보험 다나와 (car-direct.kr) SEO & GEO 자동 포스팅 시스템

**다이렉트 자동차보험 다나와([car-direct.kr](https://car-direct.kr))**를 위한 **Google/네이버 검색(SEO) 및 생성형 AI 검색(ChatGPT Search, Perplexity, Google AI Overviews 등 GEO) 최적화 무인 자동 포스팅 & 호스팅어(Hostinger) SFTP 자동 배포 시스템**입니다.

---

## 🌟 핵심 기능 및 장점

1. **최신 생성형 AI 모델 기반 포스팅**:
   - Google Gemini AI를 활용하여 최신 손해보험 약관, 할인 특약, 차종별/연령별 최적화 가이드를 매일 자동 집필합니다.
2. **차세대 AI 검색(GEO) 완벽 대응**:
   - **3줄 Direct Answer 요약 박스**: ChatGPT, Perplexity 등 AI가 즉시 인용할 수 있는 핵심 요약 제공
   - **구조화된 비교표**: 보험사별/특약별 할인율 및 보장금액 비교 테이블
   - **사용자 질의형 FAQ**: 구글 리치 스니펫과 AI 질의에 부합하는 질문-답변
3. **손해보험 광고심의 가이드라인 준수**:
   - 광고비 수령 고지, 금융소비자 권리 안내, 예금자보호법 고지 탑재로 신뢰도(E-E-A-T) 극대화
4. **전환율(Conversion) 극대화**:
   - 각 글마다 [1분 최저가 다이렉트 비교견적 바로가기](https://globalapi.adalba.co.kr/0c2caoaatpBV) CTA 배너 및 모바일 하단 플로팅 바 연동
5. **호스팅어(Hostinger) 보안 SFTP 자동 배포**:
   - 포트 `65002`를 통해 기존 워드프레스 메인 사이트에 전혀 지장을 주지 않고 `/posts/` 정적 칼럼 및 `sitemap.xml`, `robots.txt`만 안전하고 빠르게 배포

---

## 📁 주요 폴더 및 파일 구조

```
car-direct.kr/
├── posts/                    # 생성된 자동차보험 칼럼 허브 및 개별 포스트 HTML
│   ├── index.html            # 칼럼 허브 목록 (실시간 검색 및 카테고리 필터)
│   └── assets/               # 전용 모던 반응형 CSS 및 인터랙션 JS
├── data/
│   ├── posts.json            # 발행된 전체 포스트 메타데이터 DB
│   ├── topics_insurance_seo_geo.json # 5대 카테고리 × 7개 손보사 × 차종/연령 Matrix
│   └── site_config.json      # 사이트명, 비교견적 링크, 공시 고지 문구
├── scripts/
│   ├── generate_post.mjs     # Gemini AI 기반 자동 포스팅 엔진
│   ├── upload_to_hostinger.py# 호스팅어 SFTP(65002) 자동 배포 스크립트
│   └── run_daily.bat         # 윈도우 원클릭 실행 파일
├── .github/workflows/
│   └── daily-post.yml        # 매일 아침 08:30 무인 자동 발행 & 배포 워크플로우
├── robots.txt                # GPTBot, PerplexityBot 등 AI 크롤러 친화적 robots.txt
├── sitemap.xml               # 새 글 발행 시 실시간 자동 갱신되는 사이트맵
└── package.json              # npm 실행 스크립트
```

---

## 🚀 로컬 실행 방법

### 1. 신규 글 생성 및 호스팅어 배포 (한 번에 실행)
```bash
npm run post:deploy
```
또는 `scripts/run_daily.bat`을 더블 클릭하여 실행할 수 있습니다.

### 2. 개별 명령어
- **새 글 1편 작성만 하기**: `npm run post`
- **호스팅어 서버 배포만 하기**: `npm run deploy`

---

## ☁️ GitHub Actions 클라우드 무인 자동화 설정

컴퓨터를 켜두지 않아도 **매일 오전 8시 30분(KST)** 에 GitHub 클라우드가 자동으로 새 글을 작성하고 호스팅어 서버로 배포합니다.

### GitHub 저장소 Secrets 등록
GitHub 저장소 > **Settings** > **Secrets and variables** > **Actions** 에서 다음 4개 항목을 추가합니다:

| Secret 이름 | 값 설명 | 예시 |
|---|---|---|
| `GEMINI_API_KEY` | Google Gemini API Key | `AQ.Ab8...` |
| `FTP_SERVER` | 호스팅어 서버 IP | `145.79.25.99` |
| `FTP_USERNAME` | 호스팅어 계정 ID | `u687833262` |
| `FTP_PASSWORD` | 호스팅어 비밀번호 | `Mega9317!@` |

---

## 🔗 실시간 확인 URL

- 메인 사이트: [https://car-direct.kr/](https://car-direct.kr/)
- 정보마당 허브: [https://car-direct.kr/posts/](https://car-direct.kr/posts/)
- 사이트맵: [https://car-direct.kr/sitemap.xml](https://car-direct.kr/sitemap.xml)
- 로봇 설정: [https://car-direct.kr/robots.txt](https://car-direct.kr/robots.txt)
- 1분 비교견적: [https://globalapi.adalba.co.kr/0c2caoaatpBV](https://globalapi.adalba.co.kr/0c2caoaatpBV)
