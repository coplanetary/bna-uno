FROM bun:latest

WORKDIR /usr/src/app

COPY . .

RUN bun install

RUN bun cache

RUN bun run build

EXPOSE 8080

CMD ["bun", "run", "start"]
