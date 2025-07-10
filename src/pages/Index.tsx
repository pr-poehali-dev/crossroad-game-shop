import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [applicationData, setApplicationData] = useState({
    name: "",
    experience: "",
    motivation: "",
    testAnswer: "",
  });

  const testQuestions = [
    {
      question: "Какое главное правило работы с покупателями?",
      options: [
        "Быстро обслужить и отпустить",
        "Всегда быть вежливым и помогать",
        "Игнорировать жалобы",
        "Продать как можно больше",
      ],
      correct: 1,
    },
  ];

  const newsItems = [
    {
      title: "Новое поступление товаров",
      date: "10 июля 2025",
      content:
        "В магазин поступили новые товары: свежие фрукты, овощи и молочная продукция. Цены остаются доступными для всех игроков!",
      type: "товары",
    },
    {
      title: "Набор сотрудников",
      date: "8 июля 2025",
      content:
        "Ищем активных и ответственных сотрудников! Требования: знание правил магазина, вежливость с покупателями.",
      type: "работа",
    },
    {
      title: "Обновление системы оплаты",
      date: "5 июля 2025",
      content:
        "Внедрена новая система оплаты через игровую валюту. Теперь покупки стали еще удобнее!",
      type: "система",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                <Icon name="ShoppingCart" className="text-white" size={24} />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold text-gray-800"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Перекрёсток
                </h1>
                <p className="text-sm text-gray-600">Roblox Store</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-100 text-green-700">
                <Icon name="Users" size={16} className="mr-1" />
                Онлайн: 24
              </Badge>
              <Badge
                variant="outline"
                className="bg-orange-100 text-orange-700"
              >
                <Icon name="Clock" size={16} className="mr-1" />
                Открыто 24/7
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-5xl font-bold mb-4 text-gray-800"
            style={{ fontFamily: "Montserrat" }}
          >
            Добро пожаловать в Перекрёсток!
          </h2>
          <p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Open Sans" }}
          >
            Лучший магазин в Roblox! Широкий ассортимент товаров, дружелюбный
            персонал и доступные цены.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              <Icon name="ShoppingBag" className="mr-2" size={20} />
              Каталог товаров
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
                >
                  <Icon name="Briefcase" className="mr-2" size={20} />
                  Устроиться на работу
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800">
                    Заявка на работу
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя в Roblox</Label>
                    <Input
                      id="name"
                      value={applicationData.name}
                      onChange={(e) =>
                        setApplicationData({
                          ...applicationData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Введите ваш никнейм"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Опыт работы</Label>
                    <Textarea
                      id="experience"
                      value={applicationData.experience}
                      onChange={(e) =>
                        setApplicationData({
                          ...applicationData,
                          experience: e.target.value,
                        })
                      }
                      placeholder="Расскажите о своём опыте работы в Roblox"
                    />
                  </div>
                  <div>
                    <Label htmlFor="motivation">
                      Почему хотите работать у нас?
                    </Label>
                    <Textarea
                      id="motivation"
                      value={applicationData.motivation}
                      onChange={(e) =>
                        setApplicationData({
                          ...applicationData,
                          motivation: e.target.value,
                        })
                      }
                      placeholder="Расскажите о своей мотивации"
                    />
                  </div>
                  <div>
                    <Label className="text-lg font-semibold">
                      Тест на знание правил
                    </Label>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium mb-3">
                        {testQuestions[0].question}
                      </p>
                      <RadioGroup
                        value={applicationData.testAnswer}
                        onValueChange={(value) =>
                          setApplicationData({
                            ...applicationData,
                            testAnswer: value,
                          })
                        }
                      >
                        {testQuestions[0].options.map((option, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={index.toString()}
                              id={`option-${index}`}
                            />
                            <Label htmlFor={`option-${index}`}>{option}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Store Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="/img/6422cfc9-a62a-4898-90e9-20fdc1427e3a.jpg"
              alt="Перекрёсток магазин в Roblox"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="news" className="flex items-center space-x-2">
                <Icon name="Newspaper" size={18} />
                <span>Новости</span>
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className="flex items-center space-x-2"
              >
                <Icon name="Package" size={18} />
                <span>Товары</span>
              </TabsTrigger>
              <TabsTrigger value="info" className="flex items-center space-x-2">
                <Icon name="Info" size={18} />
                <span>О магазине</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="news" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsItems.map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className={
                            item.type === "товары"
                              ? "bg-blue-100 text-blue-700"
                              : item.type === "работа"
                                ? "bg-green-100 text-green-700"
                                : "bg-orange-100 text-orange-700"
                          }
                        >
                          {item.type}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="products" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Свежие фрукты", price: "50 Robux", category: "Еда" },
                  {
                    name: "Молочные продукты",
                    price: "30 Robux",
                    category: "Еда",
                  },
                  {
                    name: "Хлебобулочные изделия",
                    price: "25 Robux",
                    category: "Еда",
                  },
                  { name: "Напитки", price: "20 Robux", category: "Напитки" },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <div className="w-full h-24 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg flex items-center justify-center">
                        <Icon
                          name="Package"
                          size={32}
                          className="text-gray-600"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg mb-2">
                        {product.name}
                      </CardTitle>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{product.category}</Badge>
                        <span className="font-bold text-green-600">
                          {product.price}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="info" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon
                        name="MapPin"
                        className="text-orange-500"
                        size={24}
                      />
                      <span>Местоположение</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Наш магазин находится в центре города Roblox. Легко найти
                      по карте игры!
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Clock" className="text-green-500" size={24} />
                      <span>Режим работы</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Работаем круглосуточно! Наши сотрудники готовы помочь вам
                      в любое время.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Users" className="text-blue-500" size={24} />
                      <span>Наша команда</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Дружелюбный персонал, который всегда поможет с выбором
                      товаров и ответит на ваши вопросы.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Star" className="text-yellow-500" size={24} />
                      <span>Качество</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Только лучшие товары по доступным ценам. Гарантируем
                      качество всех продуктов!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3
                className="text-lg font-bold mb-4"
                style={{ fontFamily: "Montserrat" }}
              >
                Перекрёсток Roblox
              </h3>
              <p className="text-gray-400">
                Лучший магазин в игре с широким ассортиментом товаров и
                дружелюбным персоналом.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Discord: PerekrestokRoblox
                </p>
                <p className="text-gray-400 flex items-center">
                  <Icon name="Users" size={16} className="mr-2" />
                  Группа в Roblox: Перекрёсток
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Работаем с 2024 года</p>
                <p className="text-gray-400">
                  Более 1000 довольных покупателей
                </p>
                <p className="text-gray-400">Регулярные акции и скидки</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Перекрёсток Roblox. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
