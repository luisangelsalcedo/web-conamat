FROM php:8-apache

# Habilitar el mod_rewrite
RUN a2enmod rewrite

# Copiar archivo de configuración de Apache para habilitar Rewrite
COPY ./apache-config.conf /etc/apache2/sites-available/000-default.conf