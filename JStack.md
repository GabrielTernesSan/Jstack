# JStack

## Primeiros passos com Node.js

### Como funciona o Node.js?

#### O que é NodeJS?

Node não é uma linguagem de programação, e sim uma plataforma que permite rodar JavaScript no servidor, um interpretador.

Inicialmente o JavaScript ele foi criado para rodar apenas nos browsers (navegadores), porém em 2008 foi lançado uma versão do google chrome, e nele continha um interpretador de código JavaScript chamado Chrome V8. Depois em 2009 um cara chamado Ryan Dahl pegou o código do V8 (Open source) e rodou no servidor, foi ai que nasceu o NodeJS.

#### Call Stack

A **Call Stack** é uma estrutura de dados que armazena basicamente onde no programa nós estamos, ela é a pilha de processamento do nosso código. Se entrarmos em uma função, nós colocamos ela sobre o topo da Stack. Se retornamos de uma função, saímos do topo da stack. Isso é tudo que a stack pode fazer.

````javascript
function multiply(a, b) {
    return a * b;
}

function double(number) {
    return multiply(number, 2);
}

function printDouble(number) {
    const result = double(number);
    console.log(result)
}

printDouble(2);
````

Quando a engine começa a executar esse código, a Call Stack vai estar vazia. Depois, os passos serão os seguintes:

<img src="C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230522141512266.png" alt="image-20230522141512266" style="zoom:80%;" />

Conforme as funções são executadas, elas vão saindo da Call Stack (Funcionando como uma pilha).

<img src="C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230522141744490.png" alt="image-20230522141744490" style="zoom: 67%;" />

#### Thread Pool e Event Loop

O Node.js é uma plataforma orientada a eventos que utiliza o conceito de thread única para gerenciar a pilha de eventos ou pilha de chamada (Call Stack), que por sinal adota o comportamento do tipo LIFO (última entrada, primeira saída). As operações de background no Node são gerenciadas por works que rodam em segundo plano, estes sim podem conter operações multi-thread.

Os works são processos em background de I/O assíncrono não bloqueastes gerenciados pela libuv, uma biblioteca open source multiplataforma escrita em linguagem C, a qual utiliza um thread-pool para gerenciar operações paralelas.

Este comportamento de thread única para manipulação da Call Stack é o que garante tanta performance a essa plataforma.

![img](https://miro.medium.com/v2/resize:fit:700/1*4Ck2I0oTttvVbinPrgIiKw.png)

Os eventos entrantes são empilhado na Stack, o Event-Loop fica responsável por monitorar a Stack em busca de eventos a serem processados, quando um evento é encontrado e este não representa uma “operação longa” o mesmo é imediatamente executado e o Event-Loop liberado para prosseguir com a execução do próximo evento da Stack.

Se tivermos uma “operação longa”, como por exemplo ler um arquivo em disco, realizar comunicação a nível de rede e assim por diante, o Event-Loop irá despachar essa operação juntamente com seu callback (chamada de retorno) para o Background Thread, ou seja, neste momento a libuv ganhará a responsabilidade de gerenciar essa execução em uma thread separada do Event-Loop, liberando o mesmo para prosseguir com a execução dos eventos ainda presentes na Stack. Quando essa tarefa que está rodando em uma thread separada for concluída, a sua função de callback será adicionado a Task Queue, que por sua vez aguardará o Event-Loop terminar sua tarefa (lembra, ele é Single-Thread, executa uma coisa por vez) para entrar na Stack e ter sua instrução executada.

#### HTTP e API's REST

##### O que é uma API?

O termo "API" é um acrônimo para "Application Programming Interface" que basicamente permite várias conexões de aplicações diferentes em uma mesma fonte de dados.

![image-20230523131312881](C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230523131312881.png)

O consumo desta fonte de dados é feito através de requisições HTTP.

##### Entendendo o protocolo HTTP

O protocolo HTTP é o responsável pela comunicação entre cliente e servidor.

![image-20230523131745483](C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230523131745483.png)

**Request**

![image-20230523131842135](C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230523131842135.png)

**Response**

![image-20230524110556323](C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230524110556323.png)

![image-20230524110636007](C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230524110636007.png)

**REST**

![image-20230524111001294](C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230524111001294.png)

![image-20230524111136986](C:\Users\gabriel.santos\AppData\Roaming\Typora\typora-user-images\image-20230524111136986.png)

#### O que são módulos

Módulos são conjunto de códigos que podem, ou não, ser reutilizados.

Dentro do Node existem 3 tipos de módulos:

- **Todos os arquivos JavaScript são módulos**;
- Nativos;
- npm (Node Package Manager).

## Material Complementar

https://medium.com/reactbrasil/como-o-javascript-funciona-uma-vis%C3%A3o-geral-da-engine-runtime-e-da-call-stack-471dd5e1aa30

https://fabiojanio.medium.com/introdu%C3%A7%C3%A3o-ao-node-js-single-thread-event-loop-e-mercado-46edd82c1faf

https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces