StocksToBuy
===========

Provides U.S stocks data and stocks filters in real time

Note pour le mettre sur un vps:

Acheter
Aler ici https://www.ovh.com/ca/fr/vps/vps-classic.xml
Prendre le moins cher
Choisir ubuntu comme os
Payer

Se connecter
Ouvrir putty

Hostname
L'adresse ip

Username
Fournit dans l'email (root)

Password
Fournit dans l'email

Mettre a jour
sudo apt-get update

Installer unzip
sudo apt-get install unzip

Installer java
sudo apt-get install openjdk-7-jdk

Installer glassfish4.0.1
cd /opt
wget http://dlc.sun.com.edgesuite.net/glassfish/4.0.1/nightly/latest-glassfish.zip
chmod 700 lastest-glassfish.zip
unzip latest-glassfish.zip

Entrer un mot de passe
asadmin start-domain
asadmin enable-secure-admin
asadmin change-admin-password (Le nom de l'admin est admin, servira a se connecter a glassfish)

Ajouter export PATH=/opt/glassfish4/bin:$PATH au fichier .bashrc ou .profile si pas .bashrc

Aller dans la console d'administration de glassfish
http://ADRESSE_IP:4848/

Username
admin

Password
Celui entre precedement

Aller dans applications

Cliquer sur Deployer

Choisir l'application .war

Se connecter au site
ADRESSE_IP:8080/StocksToBuy/WebSite
