export type BannerData = {
    message: string;
    state: 'success' | 'error';
};

// banner 라는걸 받아올건데 뭔데. BannerData 타입이다.
// 타입은 위에 적혀져 있음.
export default function Banner({banner: { message, state }}: {banner: BannerData}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';
  return (
    <p className={`p-2 rounded-xl w-full text-center ${isSuccess ? 'bg-green-300' : 'bg-red-300'}`}>
      {`${icon} ${message}`}
    </p>
  );
}