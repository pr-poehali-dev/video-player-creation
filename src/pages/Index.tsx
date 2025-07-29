import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showUpload, setShowUpload] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Основы веб-разработки",
      channel: "TechChannel",
      duration: "15:30",
      views: "123K",
      thumbnail: "/img/c1113d6e-c9c9-4dd7-a5df-1a42c7b63ff4.jpg",
      avatar: "TC"
    },
    {
      id: 2,
      title: "Красивые пейзажи мира",
      channel: "NatureVision",
      duration: "8:45",
      views: "89K",
      thumbnail: "/img/75f86799-bf70-4fa7-b2d0-4d8a904565d1.jpg",
      avatar: "NV"
    },
    {
      id: 3,
      title: "Мастер-класс по кулинарии",
      channel: "CookingPro",
      duration: "22:15",
      views: "456K",
      thumbnail: "/img/24bc07b3-766c-4cc3-b247-bb30cb72e3da.jpg",
      avatar: "CP"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Menu" size={24} className="text-gray-600" />
            <h1 className="text-2xl font-bold text-red-600">VideoHub</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input 
                placeholder="Поиск видео..." 
                className="pl-4 pr-12 py-2 rounded-full border-gray-300"
              />
              <Button 
                size="sm" 
                className="absolute right-0 top-0 h-full px-4 rounded-r-full bg-gray-100 hover:bg-gray-200 text-gray-600"
              >
                <Icon name="Search" size={16} />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => setShowUpload(!showUpload)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              <Icon name="Upload" size={16} className="mr-2" />
              Загрузить
            </Button>
            <Avatar>
              <AvatarFallback>У</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          {/* Video Player */}
          <div className="mb-6">
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <img 
                src={videos[currentVideo].thumbnail} 
                alt={videos[currentVideo].title}
                className="w-full h-full object-cover"
              />
              
              {/* Player Controls Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  size="lg"
                  className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black rounded-full p-4"
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={32} />
                </Button>
              </div>

              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    size="sm"
                    className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white p-2"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                  </Button>

                  <div className="flex-1 flex items-center space-x-2">
                    <span className="text-white text-sm">5:20</span>
                    <Progress value={progress} className="flex-1 h-1" />
                    <span className="text-white text-sm">{videos[currentVideo].duration}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white p-2">
                      <Icon name="Volume2" size={20} />
                    </Button>
                    <Button size="sm" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white p-2">
                      <Icon name="Settings" size={20} />
                    </Button>
                    <Button size="sm" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white p-2">
                      <Icon name="Maximize" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">{videos[currentVideo].title}</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-red-100 text-red-600">
                      {videos[currentVideo].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{videos[currentVideo].channel}</p>
                    <p className="text-sm text-gray-500">{videos[currentVideo].views} просмотров</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" className="bg-gray-100 hover:bg-gray-200 text-gray-700">
                    <Icon name="ThumbsUp" size={16} className="mr-1" />
                    Нравится
                  </Button>
                  <Button size="sm" className="bg-gray-100 hover:bg-gray-200 text-gray-700">
                    <Icon name="Share" size={16} className="mr-1" />
                    Поделиться
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Form */}
          {showUpload && (
            <Card className="mb-6 border-2 border-dashed border-gray-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <Icon name="Upload" size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Загрузить видео</h3>
                  <p className="text-gray-500 mb-4">Перетащите видеофайл сюда или нажмите для выбора</p>
                  <Input type="file" accept="video/*" className="hidden" id="video-upload" />
                  <label htmlFor="video-upload">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Выбрать файл
                    </Button>
                  </label>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Video Grid */}
          <h3 className="text-lg font-semibold mb-4">Рекомендованные видео</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <Card 
                key={video.id} 
                className={`cursor-pointer hover:shadow-lg transition-shadow ${
                  index === currentVideo ? 'ring-2 ring-red-500' : ''
                }`}
                onClick={() => setCurrentVideo(index)}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      <AvatarFallback className="bg-red-100 text-red-600 text-xs">
                        {video.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h4>
                      <p className="text-xs text-gray-500">{video.channel}</p>
                      <p className="text-xs text-gray-500">{video.views} просмотров</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Категории</h3>
              <div className="space-y-2">
                {['Технологии', 'Природа', 'Кулинария', 'Путешествия', 'Образование', 'Музыка'].map((category) => (
                  <Button 
                    key={category}
                    variant="ghost" 
                    className="w-full justify-start text-left"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;