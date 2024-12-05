---
title: ERD
sidebar_position: 1
---

### ER-диаграмма

![ER-диаграмма](Диаграмма.jpg)

## Contractor

| Название | Тип     | Описание              |
| -------- | ------- | --------------------- |
| id | uuid | Идентификатор подрядчика |
| surname | varchar(100) | Фамилия подрядчика |
| name | varchar(100) | Имя подрядчика |
| phone_number  | varchar(100)    | Номер телефона подрядчика |
| email | varchar(255) | Электронный адрес подрядчика |
| work_experiency_days | int | Опыт работы подрядчика в днях |
| additional_information | text | Дополнительная информация о подрядчике |
