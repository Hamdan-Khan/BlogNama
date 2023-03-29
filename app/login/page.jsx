import Register from "@/components/Register";

export default async function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-7 p-8">
        <h1 className="text-4xl font-bold text-center">DUMMY LOGIN PAGE</h1>
        <Register />
      </div>
    </>
  );
}
