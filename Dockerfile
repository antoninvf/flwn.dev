# ---- deps ----
FROM node:22-bookworm-slim AS deps
WORKDIR /app

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN corepack enable

# Install deps (cache-friendly)
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# ---- build ----
FROM node:22-bookworm-slim AS build
WORKDIR /app

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# SvelteKit build (adapter-node => outputs /build)
RUN pnpm run build

# ---- prod deps ----
FROM node:22-bookworm-slim AS prod-deps
WORKDIR /app

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN corepack enable

COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --prod --frozen-lockfile

# ---- run ----
FROM node:22-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Keep runtime deps for adapter-node output and non-bundled packages.
COPY --from=prod-deps /app/node_modules ./node_modules

# adapter-node output
COPY --from=build /app/build ./build
# Optional runtime metadata
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

# adapter-node entrypoint
CMD ["node", "build/index.js"]
