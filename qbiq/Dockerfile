FROM oven/bun:1.1.7 as build

WORKDIR /app

COPY . .

RUN bun install --production --no-cache && bun build src/index.ts --compile --minify --outfile build/app
RUN ls -la

FROM debian:bookworm-slim
WORKDIR /
COPY --from=build /app/build .
RUN chmod a+x ./app && ./app

