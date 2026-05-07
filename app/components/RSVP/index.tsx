import { useState } from "react";

export function RSVPForm({ webAppUrl }: { webAppUrl: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [willAttend, setWillAttend] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formElement = e.currentTarget;

    try {
      const formData = new FormData(formElement);

      // Правильна обробка willAttend
      formData.set("willAttend", String(willAttend));

      // Якщо НЕ буде присутній — очищаємо adults і children
      if (!willAttend) {
        formData.set("adults", "");
        formData.set("children", "");
      } 
      // Якщо буде присутній — adults має бути > 0
      else {
        const adultsValue = formData.get("adults");
        if (!adultsValue || adultsValue === "0") {
          alert("Кількість дорослих повинна бути більше 0, якщо ви будете присутні.");
          setStatus("idle");
          return;
        }
      }

      await fetch(webAppUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus("success");

      setTimeout(() => {
        formElement.reset();
        setWillAttend(true);
        setStatus("idle");
      }, 1800);

    } catch (err) {
      console.error("Помилка відправки:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto space-y-6 sm:bg-[#f9f5eb]  sm:p-8 rounded-3xl sm:shadow-inner"
    >
      {/* Ім'я / Сім'я */}
      <div>
        <label className="block text-sm text-[#6b5a45] mb-2 font-medium">
          Імя та прізвище / Назва сімї
        </label>
        <input
          type="text"
          name="name"
          placeholder="Наприклад: Тарас Шевченко або Сім'я Шевченко"
          required
          className="placeholder-[#ad9a83] placeholder:text-sm text-[#6b5a45] w-full px-5 py-3.5 rounded-2xl border border-[#d4b88a] focus:outline-none focus:border-[#3f2e1e] text-lg"
        />
      </div>

      {/* Чи будуть присутні */}
      <div className="pt-4 border-t border-[#e8d9c7]">
        <label className="flex items-center gap-4 cursor-pointer group">
          <input
            type="checkbox"
            name="willAttend"
            checked={willAttend}
            onChange={(e) => setWillAttend(e.target.checked)}
            className="w-6 h-6 accent-[#6b5a45] cursor-pointer"
          />
          <span className="text-xl font-medium text-[#6b5a45]">
            Так, будемо присутні на весіллі
          </span>
        </label>
      </div>

      {/* Поля при присутності */}
      {willAttend && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#6b5a45] mb-2">
              Кількість дорослих <span className="text-red-500">*</span>
            </label>
            <select
              name="adults"
              defaultValue="0"
              className="w-full text-[#6b5a45] px-5 py-3.5 rounded-2xl border border-[#d4b88a] text-lg focus:outline-none focus:border-[#3f2e1e]"
            >
              {[0,1,2,3,4,5,6,7,8].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-[#6b5a45] mb-2">
              Кількість дітей (до 12 років)
            </label>
            <select
              name="children"
              defaultValue="0"
              className="w-full text-[#6b5a45] px-5 py-3.5 rounded-2xl border border-[#d4b88a] text-lg focus:outline-none focus:border-[#3f2e1e]"
            >
              {[0,1,2,3,4,5].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#3f2e1e] hover:bg-[#2c2115] disabled:bg-gray-400 text-white py-4 rounded-2xl font-medium text-lg transition-all mt-6"
      >
        {status === "loading" ? "Відправляємо..." : "Підтвердити відповідь 💌"}
      </button>

      {status === "success" && (
        <p className="text-center text-green-700 font-medium py-4 bg-green-50 rounded-2xl">
          Дякуємо! Ми отримали вашу відповідь 💕
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-red-600 py-3">
          Щось пішло не так. Спробуйте ще раз.
        </p>
      )}
    </form>
  );
}