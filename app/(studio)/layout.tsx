import "../globals.css";

export const metadata = {
  title: "Pratik Sahu",
  description: "Portfolio website built using Next.js and Sanity.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
