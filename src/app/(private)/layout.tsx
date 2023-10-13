import PrivateSider from "@/components/view/PrivateSider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <PrivateSider />
        <div>{children}</div>
      </body>
    </html>
  );
}
