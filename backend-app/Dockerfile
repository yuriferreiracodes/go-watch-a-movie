FROM golang:1.18 AS builder
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go mod tidy

RUN go build -o main ./cmd/api

FROM debian:11-slim
WORKDIR /app
COPY --from=builder /app/main .
EXPOSE 9000

CMD ["./main"]
