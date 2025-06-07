FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
COPY tsconfig.json ./
COPY tailwind.config.* postcss.config.* ./
COPY . .

RUN npm install --frozen-lockfile
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

ENV NODE_ENV=production
ENV PORT=3518

EXPOSE 3518

CMD ["npm", "start"]
