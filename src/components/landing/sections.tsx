import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-mc-green border-mc-green">Магазин открыт</Badge>,
    title: "Прокачай свой игровой опыт.",
    showButton: true,
    buttonText: 'Перейти в магазин'
  },
  {
    id: 'about',
    title: 'Почему наш магазин?',
    content: 'Только проверенные предметы, моментальная выдача после оплаты и поддержка 24/7. Никаких рисков — только игра.'
  },
  {
    id: 'features',
    title: 'Что есть в магазине',
    content: 'Редкие ресурсы, уникальные сеты брони, зелья, оружие и эксклюзивные предметы — всё для доминирования на сервере.'
  },
  {
    id: 'testimonials',
    title: 'Нам доверяют игроки',
    content: 'Тысячи покупателей уже усилили свои персонажи. Присоединяйся к тем, кто играет на максимуме.'
  },
  {
    id: 'join',
    title: 'Начни играть сильнее',
    content: 'Выбери нужные предметы, оплати и получи их прямо в игре. Быстро, надёжно, без лишних шагов.',
    showButton: true,
    buttonText: 'Открыть магазин'
  },
]