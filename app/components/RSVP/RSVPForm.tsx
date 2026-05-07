import { useState } from "react";
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";

type Props = {
  webAppUrl: string;
};

export function RSVPForm({ webAppUrl }: Props) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [willAttend, setWillAttend] = useState<boolean | null>(null);
  const [adultsError, setAdultsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setAdultsError(false);

    const formElement = e.currentTarget;

    try {
      const formData = new FormData(formElement);

      if (willAttend === null) {
        alert("Будь ласка, оберіть: будете ви присутні чи ні.");
        setStatus("idle");
        return;
      }

      formData.set("willAttend", willAttend.toString());

      if (willAttend) {
        const adultsValue = formData.get("adults");
        if (!adultsValue || adultsValue === "0") {
          setAdultsError(true);
          setStatus("idle");
          return;
        }
      } else {
        formData.set("adults", "");
        formData.set("children", "");
      }

      await fetch(webAppUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus("success");

      setTimeout(() => {
        formElement.reset();
        setWillAttend(null);
        setAdultsError(false);
        setStatus("idle");
      }, 1800);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Ім'я / Сім'я */}
      <div>
        <label className="block text-sm text-[#6b5a45] mb-2 font-medium">
          Ім&#39;я та прізвище / Назва сім&#39;ї
        </label>
        <input
          type="text"
          name="name"
          placeholder="Наприклад: Тарас Шевченко або Сім'я Шевченко"
          required
          className="placeholder-[#ad9a83] text-[#6b5a45] w-full px-5 py-3.5 rounded-2xl border border-[#d4b88a] focus:outline-none focus:border-[#3f2e1e] text-lg"
        />
      </div>

      {/* Вибір: Так / Ні */}
      <div className="space-y-3 mx-auto">
        <p className="text-sm text-[#6b5a45] mb-3 font-medium">
          Чи будете присутні на весіллі?
        </p>

        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            name="willAttend"
            checked={willAttend === true}
            onChange={() => setWillAttend(true)}
            className="w-5 h-5 accent-[#3f2e1e]"
          />
          <span className="text-lg text-[#3f2e1e]">Так</span>
        </label>

        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            name="willAttend"
            checked={willAttend === false}
            onChange={() => setWillAttend(false)}
            className="w-5 h-5 accent-[#3f2e1e]"
          />
          <span className="text-lg text-[#3f2e1e]">Ні</span>
        </label>
      </div>

      {/* Поля при "Так" */}
      {willAttend === true && (
        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-sm text-[#6b5a45] mb-2">
              Кількість дорослих <span className="text-red-500">*</span>
            </label>
            <Select name="adults" defaultValue="0">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
            {adultsError && (
              <p className="text-red-600 text-sm mt-1 font-medium">
                Вкажіть кількість дорослих, які будуть присутні.
              </p>
            )}
          </div>

          <Select
            label="Кількість дітей (до 12 років)"
            name="children"
            defaultValue="0"
          >
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </Select>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading" || willAttend === null}
        size="large"
        className="w-full"
      >
        {status === "loading" ? "Відправляємо..." : "Підтвердити відповідь 💌"}
      </Button>

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
