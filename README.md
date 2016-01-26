# pimpapp-web
Versão web do aplicativo pimp.

Na instalação do meteor em debian 8 (jessie) configurado para português do Brasil encontrei o seguinte problema após mudar para o diretório da aplicação e chamar o comando : meteor 
Unexpected mongo exit code 1. Restarting.
Unexpected mongo exit code 1. Restarting.
Unexpected mongo exit code 1. Restarting.
Can't start Mongo server.

A solução que encontrei foi adicionar esta linha no arquivo $HOME/.bashrc:
export LC_ALL=en_US.UTF-8

Para mais detalhes veja: https://github.com/meteor/meteor/issues/4019

Se o locale para o inglês dos EUA não estiver disponível, é necessário adicioná-lo, através do seguinte procedimento:
- executar comando: locale - para ver o valor para o usuário corrente
- executar comando: locale-gen "en_US.UTF-8" (pode requerer permissões de super usuário) - vai gerar dados para en_US.UTF-8
- alternativamente pode-se editar o arquivo /etc/locales.gen e tirar o comentário do locale desejado.

Para mais detalhes veja: http://askubuntu.com/questions/162391/how-do-i-fix-my-locale-issue.
