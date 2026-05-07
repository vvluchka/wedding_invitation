export function InvitationContent() {
  return (
    <div className="text-center space-y-12">
      <p className="text-lg leading-relaxed text-[#4a3f35] max-w-md mx-auto">
        Є події, які залишаються в пам’яті на все життя.
        <br />І є люди, з якими хочеться їх розділити.
      </p>

      <div>
        <p className="font-script text-6xl md:text-7xl text-[#3f2e1e] tracking-wide mb-6">
          Дорогі, Гості!
        </p>
        <p className="text-xl text-[#6b5a45]">
          Запрошуємо вас розділити з нами радість
          <br />
          нашого одруження!
        </p>
      </div>

      {/* Вінчання + Бенкет */}
      <div className="grid md:grid-cols-2 gap-10 border-t border-b border-[#e8d9c7] py-12">
        <div className="text-center">
          <div className="text-5xl mb-4">💍</div>
          <p className="font-medium text-[#3f2e1e] text-lg">Вінчання</p>
          <p className="text-sm mt-3 text-[#6b5a45] leading-tight">
             храм Святого Юрія,<br /> с. Переволока
            <br /> 11:00
          </p>
        </div>
        <div className="text-center">
          <div className="text-5xl mb-4">🥂</div>
          <p className="font-medium text-[#3f2e1e] text-lg">Святковий бенкет</p>
          <p className="text-sm mt-3 text-[#6b5a45] leading-tight">
            ресторані «Княже село»
            <br /> 14:00
          </p>
        </div>
      </div>

      {/* Кольорова гама */}
      <div className="text-center">
        <p className="uppercase tracking-[2px] text-xs text-[#8c7a5e] mb-4">
          Кольорова гама нашого весілля
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {["#f5e8d3", "#f4a7b9", "#f8f1c7", "#a8b5a2", "#e8d9c7"].map(
            (color, i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
              />
            ),
          )}
        </div>
      </div>

      {/* Фінальний теплий текст */}
      <div className="pb-12 text-center text-sm leading-relaxed text-[#6b5a45] max-w-xs mx-auto">
        Це запрошення — особливе.
        <br />
        Посадіть його та виростіть квітку, адже все справжнє і красиве,
        <br />
        як і наше «ми», народжується з любові.
        <div className="mt-8 text-3xl">🌱</div>
      </div>
    </div>
  );
}
