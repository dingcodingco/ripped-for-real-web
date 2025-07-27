import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ripped For Real - 리얼하게 찢었다';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #FFA500, #ff6b00)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          Ripped For Real
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#999999',
            textAlign: 'center',
          }}
        >
          The Ultimate Motivation App for Men in Their 20s
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#999999',
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          20대 남성을 위한 최강 동기부여 앱
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}