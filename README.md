# express_api_12chat

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2022/10/09

 update : 2022/10/15

***

express + postgres , typescript chat API 

* express : 4.17.1

* typescript: 4.6.4

***
### front / next.js

https://github.com/kuc-arc-f/nextjs12_18chat

***
### setup

* .env : password , host , dbname set

```
POSTGRES_DATABASE="__DBNAME__"
POSTGRES_USER="__USER__"
POSTGRES_PASSWORD="__PASSWORD__"
POSTGRES_HOST="__DBHOST__"
POSTGRES_PORT=5432
```

***
### migration prisma (schema.prisma)

* prismaで、マイグレーションが必要になります。

https://gist.github.com/kuc-arc-f/79fc7be9a275d7e695bda51580665035

***
### Start

```
# dev-start
yarn dev

# start
yarn build

yarn start

```
***
### blog

***

