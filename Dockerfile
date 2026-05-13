# Etapa 1: Build (Construcción)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Instalamos dependencias de forma estricta
RUN npm ci --only=production
COPY . .

# Etapa 2: Runtime (Ejecución)
FROM node:20-alpine
WORKDIR /app
# Solo copiamos los archivos finales necesarios, nada de basura de desarrollo
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/app.js ./
COPY --from=builder /app/server.js ./

EXPOSE 3000
# Comando para arrancar la app
CMD ["node", "server.js"]
