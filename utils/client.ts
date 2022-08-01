import sanityClient from "@sanity/client";

// 참고로 여기는 sanityClient 에 대한 설정일 뿐이다.
// 요청 받으면 저장해야할 거니깐 sanityClient 에 '나 유효해요' 라고 토큰 던지는 것이다.
// 프로젝트 아이디는 아래에 따라!
export const client = sanityClient({
  projectId: "fiq4vqh1",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
