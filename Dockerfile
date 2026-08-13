FROM node:20-alpine AS build

ENV PORT=81
ENV NODE_OPTIONS="--max-old-space-size=1024"

ENV VITE_EMAILJS_SERVICE_ID=service_2ujgl7u
ENV VITE_EMAILJS_TEMPLATE_ID=template_3waq3ft
ENV VITE_EMAILJS_PUBLIC_KEY=-L_7OxCVQOeTf_IaV

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm cache clean --force
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 81

CMD ["nginx", "-g", "daemon off;"]


# docker build  --no-cache -t docker.yuvaq.com/yuvaq_portfolio_new_27032026 .      
# docker run -d --name yuvaq_portfolio_new_27032026 -p 81:81 yuvaq_portfolio_new_27032026_image

# docker tag yuvaq_portfolio_new_27032026_image docker.yuvaq.com/yuvaq_portfolio_new_27032026
# docker push docker.yuvaq.com/yuvaq_portfolio_new_27032026
# docker pull docker.yuvaq.com/yuvaq_portfolio_new_27032026
# docker run -d --name yuvaq_portfolio_new_27032026 -p 81:81 docker.yuvaq.com/yuvaq_portfolio_new_27032026


# docker pull docker.yuvaq.com/rrcomplaint_frontend
# docker run -d --name rrcomplaint_frontend -p 8003:80 docker.yuvaq.com/rrcomplaint_frontend