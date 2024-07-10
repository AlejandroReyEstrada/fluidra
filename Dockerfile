FROM mcr.microsoft.com/playwright:v1.45.1-jammy
WORKDIR /test/
COPY . .
RUN npm ci
RUN npx playwright install --with-deps
RUN npx bddgen
CMD ["npx", "playwright", "test"]