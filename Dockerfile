FROM node:latest

# Встановлюємо робочу директорію 
WORKDIR /app

#Встановити nodemon для гарячого перезавантаження
RUN npm install -g nodemon

# Копіюємо файли package.json та package-lock.json в робочу директорію контейнера
COPY package*.json ./

# Виконуємо команду npm install для встановлення залежностей
RUN npm install

# Копіюємо всі інші файли з поточного каталогу в робочу директорію контейнера
COPY . .

EXPOSE 3000

# Виконуємо команду для запуску додатку при старті контейнера
CMD [ "node", "app.js" ]