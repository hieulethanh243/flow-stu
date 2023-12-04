//= Global Styles
import '@/styles/globals.css';

export const metadata = {
  title: 'Flow Studio',
  description: 'We create a visual art to make your imagination come true.',
  keywords: ['Flow Studio', 'CGI', 'VFX'],
  icons: {
    icon: '/assets/imgs/tab-logo.png',
    shortcut: '/assets/imgs/tab-logo.png',
  },
  images: [
    {
      url: 'https://res.cloudinary.com/dtyv8vpj9/image/upload/v1701274364/0510_Cover_1_00000_uonmz2.jpg',
      width: 200,
      height: 200,
    },
  ],
  openGraph: {
    title: 'Flow Studio',
    description: 'We create a visual art to make your imagination come true.',
    keywords: ['Flow Studio', 'CGI', 'VFX'],
    icons: {
      icon: '/assets/imgs/tab-logo.png',
      shortcut: '/assets/imgs/tab-logo.png',
    },
    images: [
      {
        url: 'https://res.cloudinary.com/dtyv8vpj9/image/upload/v1701274364/0510_Cover_1_00000_uonmz2.jpg',
        width: 200,
        height: 200,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
