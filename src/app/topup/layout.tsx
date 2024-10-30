export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-screen  " lang="en">
      <body
        className={`antialiased flex h-full w-full className="flex flex-col p-5 font-sans text-gray-800 bg-gray-50 min-h-screen"`}
      >
        <div className="flex items-center space-x-2 mb-4">
          <button className="text-2xl text-gray-700">&larr;</button>
          <h2 className="text-xl font-semibold">Top Up LRTJPay</h2>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
