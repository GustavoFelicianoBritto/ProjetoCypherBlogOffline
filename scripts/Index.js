window.addEventListener('DOMContentLoaded',function()
{   
    const postscontainer = document.getElementById('posts-container');
    /*salvei numa constante postscontainer a tag que tem id 'posts-container' no caso a section dentro do main */


    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    /* Criei constante posts e salvei nela o json do array dos posts, caso vazio ela só cria um array vazio*/

    if(posts.length === 0) /*se a quantidade de posts for 0 */
    {
        postscontainer.innerHTML= '<p class="post"> Sem posts. Crie um agora <a href="post.html">aqui</a></p>';

        return;
        
    }

    posts.forEach(post => {
        /**for each, o post aqui é o item dentro do posts que estou segurando (newPost) e nele vou puxar as informações, poderia ser qualquer nome no lugar de post */

        const articleElement= document.createElement('article');
        /*criei uma constante que cria um artigo */
        articleElement.classList.add('post');
        /**adicionei a class post pro artigo, para estilização no css */


        /*<p class="post-date">Publicado em: ${post.date}</p>*/

        
        let processedBody = post.body.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        
        processedBody = processedBody.replace(/\#(.*?)\#/gi, (match, url) => {
            const trimmedUrl = url.trim(); // Remove espaços em branco do início e do fim da URL
            return `<img src="${trimmedUrl}" alt="Imagem do post">`;
        });


        processedBody = processedBody.replace(/\_(.*?)\_/g, '<i>$1</i>'); // Itálico com _texto_
        processedBody = processedBody.replace(/\*(.*?)\*/g, '<b>$1</b>'); // Negrito com *texto*
        processedBody = processedBody.replace(/\~(.*?)\~/g, '<s>$1</s>'); // tachado com ~texto~
        
        
        processedBody = processedBody.replace(/\n/g, '<br>');

        articleElement.innerHTML= `
        <h2>${post.title.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h2>
        <p>${processedBody}</p>
        `;

        postscontainer.appendChild(articleElement);
        /*peguei o postscontainer que está segurando a tag, coloquei uma criança nele, que é o articleElement que criamos e personalizamos */

        
    });




});