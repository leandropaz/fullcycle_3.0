FROM golang:alpine AS builder

WORKDIR /src/package/app/

COPY hello.go .

RUN go mod init hello && go build -o hello

FROM scratch
COPY --from=builder /src/package/app/hello .
ENTRYPOINT [ "./hello" ]
