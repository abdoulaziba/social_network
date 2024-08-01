import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "/public/css/libs.min.css";
import "/public/css/socialv.css?ver=4.0.0";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
