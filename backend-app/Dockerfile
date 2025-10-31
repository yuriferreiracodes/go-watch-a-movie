FROM golang:1.18 AS builder
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go mod tidy

RUN go build -o main ./cmd/api

FROM gcr.io/distroless/base-debian11
WORKDIR /app
COPY --from=builder /app/main .
EXPOSE 9000

CMD ["./main"]
