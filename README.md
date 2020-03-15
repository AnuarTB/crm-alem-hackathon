## CRM система для отслеживания въезжающих в страну лиц:
Распознование анкеты бланка через технологию *OMR (Optical mark recognition)*, заполнение онлайн-анкеты на веб-сайте через *qr-код*. 
Автоматическое внесение в базу по региональным управлениям здравоохранениям.

*Пример:* пассажир, прилетевший с рейса (###), имея мобильное устройство, переходит по ссылке с помощью предоставленного на бумаге qr-кода, которая предоставляет доступ к сайту, где пассажир заполняет анкету. 
*Исключения:* если же пассажир не имеет моб.устройства или же его устройство не подключено к роумингу, то ему дается анкета бланк, где он заполняет его вручную, закрашивая синий/черной ручкой круги. Дальше анкета бланк направляется в оптический маркерный сканер или сканер установленный на мобильное устройство для считывания информации и дальнейшей ее обработки.

**На сегодняшний день у многих людей имеется с собой мобильное устройство. Используя его и QR-code, данный метод предоставляет возможность для быстрого функционирования системы без лишних касаний.**

## Процедура прохождения онлайн анкеты через QR-code
![QR-code](https://github.com/AnuarTB/crm-alem-hackathon/blob/master/qr-code.png)

Пассажир, используя приложение по считыванию qr-кода на мобильном устройстве, переходит на веб-сайт, где будет предоставлена онлайн анкета. Данные с сайта будут загружаться в базу данных.

![online_form1](https://github.com/AnuarTB/crm-alem-hackathon/blob/master/online_form1.png)

![online_form2](https://github.com/AnuarTB/crm-alem-hackathon/blob/master/online_form2.png)

В месте где нужно указать страны, которые посещал пассажир за последние  14 дней, предоставляется 4 столбца, где пасссажир указывает код страны. Все коды стран будут предоставлены в соответствующем формате:


![list_of_countries](https://github.com/AnuarTB/crm-alem-hackathon/blob/master/list_of_countries.png)
![list_of_countries_2](https://github.com/AnuarTB/crm-alem-hackathon/blob/master/list_of_countries_2.png)


## Процедура прохождения анкеты бланка
Пассажир не имеющий мобильное устрйство или если его устройство не предоставляет возможности перейти через qr-код на веб-сайт, то ему предоставляется данный бланк для заполнения данных. 

![bubbleform](https://github.com/AnuarTB/crm-alem-hackathon/blob/master/blank.png)

После заполнения всех данных, бланк направляется для сканирования и распознования. Вся предоставленная информация автоматически заполняется в базу данных.

В еденичных случаях анкета может быть просканирована сканером установленного на мобильное устройство, в иных случаях оптический маркерный сканер удобен для считывания большого количества анкет.
