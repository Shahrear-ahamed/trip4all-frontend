import PageNotFoundSvg from "@/components/ui/404Svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <main className="errorPageMain h-screen flex items-center justify-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 mt-5 mb-5 relative">
            <PageNotFoundSvg />
            <Link href="/" className="absolute left-[47%] bottom-[10%]">
              <Button
                variant="ghost"
                className="text-white duration-500 border border-white">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
