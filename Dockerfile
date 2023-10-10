# Use a imagem oficial do Nginx como base
FROM nginx:latest

# Copie os arquivos do seu site para o diretório de documentação padrão do Nginx
COPY ./html /usr/share/nginx/html

# Exponha a porta 80 para que o Nginx possa servir o site
EXPOSE 8080

# Comando para iniciar o servidor Nginx quando o contêiner for executado
CMD ["nginx", "-g", "daemon off;"]
