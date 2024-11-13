import { type AppType } from "next/app";
import "~/styles/globals.css";
import { Montserrat, Raleway } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${montserrat.className} ${raleway.className}`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
