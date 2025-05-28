import ClientRootLayout from "./ClientRootLayout";
export const metadata = {
  title: "Deon",
  description: "Deon's personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
