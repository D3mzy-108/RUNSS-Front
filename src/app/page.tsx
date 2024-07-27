import Banner from "@/components/Auth/Banner";
import SignInForm from "@/components/Auth/SignInForm";

export default function Home() {

  return (
    <main className="flex max-lg:flex-col items-center text-black">
      <div className="w-full lg:w-3/5">
        <Banner></Banner>
      </div>
      <div className="w-full lg:w-2/5 p-6">
        <SignInForm></SignInForm>
      </div>
    </main>
  );
}
