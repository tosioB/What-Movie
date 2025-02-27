interface NoDataProps {
  data: string;
  gap: string;
  height?: string;
  fontSize: string;
  isBorder?: boolean;
}

const NoData = ({
  data,
  gap,
  height,
  fontSize,
  isBorder = false
}: NoDataProps) => {
  const getCorrectParticle = (text: string) => {
    if (!text) return ""; // 빈 문자열 방지
    const lastChar = text.charAt(text.length - 1); // 마지막 글자 가져오기
    const hasBatchim = (lastChar.charCodeAt(0) - 44032) % 28 !== 0; // 받침 여부 체크
    return hasBatchim ? "이" : "가"; // 받침 있으면 "이", 없으면 "가"
  };

  return (
    <div
      className="no-data"
      style={{
        gap,
        height,
        fontSize,
        border: isBorder ? "1px solid #e1e1e1" : "none"
      }}
    >
      <img src="/images/emoji_sad.svg" alt="슬픈 얼굴 이모지" />
      <p>{`${data}${getCorrectParticle(data)} 없습니다.`}</p>
    </div>
  );
};

export default NoData;
