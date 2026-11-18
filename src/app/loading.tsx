export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F4EEDF] text-[#111111] flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <div
          aria-hidden="true"
          className="mx-auto w-12 h-[3px] bg-[#00D6C9]"
        />
        <p className="font-serif text-2xl italic text-[#111111]">
          Opening page…
        </p>
      </div>
    </div>
  );
}
