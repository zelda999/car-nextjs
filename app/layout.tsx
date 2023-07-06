import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car NextJS",
  description: "Discover world's best car nextJS application",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative' suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}