import Header from "./Header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
