import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const items = [
  {
    icon: "Sword",
    name: "Алмазный меч",
    description: "Зачарованный меч с уроном V и огнём II",
    price: "49 ₽",
    tag: "Хит",
  },
  {
    icon: "Shield",
    name: "Сет брони",
    description: "Полный алмазный комплект с защитой IV",
    price: "129 ₽",
    tag: "Популярное",
  },
  {
    icon: "Zap",
    name: "Зелья x10",
    description: "Зелья силы, скорости и регенерации",
    price: "39 ₽",
    tag: null,
  },
  {
    icon: "Star",
    name: "VIP-статус",
    description: "Особый ник, доступ к закрытым зонам и бонусы",
    price: "199 ₽",
    tag: "Эксклюзив",
  },
  {
    icon: "Package",
    name: "Стартовый набор",
    description: "Всё необходимое для быстрого старта на сервере",
    price: "79 ₽",
    tag: null,
  },
  {
    icon: "Crown",
    name: "Донатор навсегда",
    description: "Пожизненный статус с максимальными привилегиями",
    price: "499 ₽",
    tag: "Лучшая цена",
  },
]

interface ShopSectionProps {
  isActive: boolean
}

export default function ShopSection({ isActive }: ShopSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Выбери предмет
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            className="relative border border-[#1a3a1a] bg-black/60 backdrop-blur rounded-xl p-5 flex flex-col gap-3 hover:border-mc-green transition-colors"
          >
            {item.tag && (
              <span className="absolute top-3 right-3 text-xs font-bold text-black bg-mc-green rounded-full px-2 py-0.5">
                {item.tag}
              </span>
            )}
            <div className="w-10 h-10 rounded-lg bg-[#0f2a0f] flex items-center justify-center">
              <Icon name={item.icon} size={20} className="text-mc-green" fallback="Package" />
            </div>
            <div>
              <p className="text-white font-semibold text-base">{item.name}</p>
              <p className="text-neutral-400 text-sm mt-1">{item.description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="text-mc-green font-bold text-lg">{item.price}</span>
              <Button
                size="sm"
                className="bg-mc-green text-black hover:bg-green-400 font-bold transition-colors"
              >
                Купить
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}