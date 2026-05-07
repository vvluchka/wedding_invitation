import Image from "next/image";

export function Decorations() {
  return (
    <>
      {/* Десктопна версія - розкидані фото */}
      <div className="absolute inset-0 pointer-events-none ">
        <Image
          src="/img/image1.jpeg"
          alt="Роман і Христина"
          width={2000}
          height={3000}
          className="absolute left-1/2 lg:top-[-80%] -translate-x-1/2 brightness-50 opacity-75 object-cover"
          priority
        />
      </div>

      {/* Мобільна версія - горизонтальний ряд внизу */}
      <div className="lg:hidden  flex gap-4 flex-wrap justify-center p-5">
        {[1, 2, 3, 4, 5].map((num) => (
          <Image
            key={num}
            src={`/img/image${num}.jpeg`}
            alt="Роман і Христина"
            width={88}
            height={88}
            className="rounded-2xl shadow-md object-cover"
          />
        ))}
      </div>
    </>
  );
}
