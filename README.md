Привіт, це - конструктор резюме=)

Конфігураційний файл який Вас цікавить знаходиться у src/config/constants - там усі базові налаштування які допоможуть указати актуальні для Вас дані.

Обьект user - то є основний файл який вам треба заповнити своїми даними.
Поле userPhotoImg - це ваше фото яке буде на сторінці about, це фото потрібно спочатку покласти в проєкет, покласти потрібно в папку public, далі по бажанню, у мене фото лежить тут '../../public/images/profile/Frame.png', після того як додали фото у потрібний фолдер, треба імпортувати його в файл constants, у мене це виглядає так - import userPhoto from '../../public/images/profile/Frame.png'.

Поле mainScreenImg - фото на головній сторінці, логіка такаж як з userPhotoImg.

certificatesNumberField: 12,
satisfiedClientsField: 50,
yearsOfExperience: 2,
position: "Frontend Developer",

ці поля стосуются сторінки about, думаю тут все зрозуміло.

userResume тут потрібно спочатку своє резюме додати до папки public, без якихось підпапок, тощо, а потім у проперті userResume: назва вашого резюме файлу.


Далі йде education - тут все необхідне про Вашу освіту.

experience - Ваш досвід.

Далі projects - тут ваші проєкти, поле type відповідає чи буде проєкт ротягуватися на всю довжину єкрану на великих екранах, поле done відповідає чи буде зверху плашка - ще в роботі, то я зробив щоб можно було нагнати неактивних проєктів без активних посилань, тобто якщо у вас нема проєктів, можете поставити done = false, і вониим будуть не активні.

Поле img в проджектсах - тут логіка такаж як з фото, завантажуємо файл у паблік фолдер, потім імпортимо у файл з константами у графу імдж

articles - логіка такаж як у projects.

В основному все, якщо є бажання кастомізувати основні кольори, то вони лежать у файлі tailwind.config.js там theme.extend.colors можна міняти значення цих основних чотирьох кольорів.

Деплоїти це реккомендую на https://vercel.com/ томушо він оптимізований під nextjs аплікухи, ну і максимально простий.
Якшо буде потрібна допомога, пишіть =)