import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid place-content-center">
      <SignIn />
    </div>
  );
}
