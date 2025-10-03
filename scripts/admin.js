document.getElementById('form-post').addEventListener('submit', function(event)
{
    event.preventDefault();

    const title= document.getElementById('post-title').value;
    const body= document.getElementById('post-body').value;

    const posts= JSON.parse(localStorage.getItem('blogPosts')) || [];
    /*Criei uma constante chamada posts, se no localStorage tiver um "blogPosts" ele vai dar um localStorage.getItem e salvar na constante, caso não tenha, vai criar uma array vazia*/ 

    const newPost={

        title: title, body: body,
        date: new Date().toLocaleDateString('pt-BR')
    };
    /*Criei um objeto de post pegando o value do titulo e corpo do post */

    posts.unshift(newPost);
    /*adicionei o objto dentro da array posts(vazia ou não)*/


    localStorage.setItem('blogPosts', JSON.stringify(posts));
    /*salvei no local storage de nome blogPosts o JSON do array posts*/


    alert("Post enviado com sucesso!");
    document.getElementById('form-post').reset();
    /*resetei a pagina com o form-post (formulário inteiro) */



    window.location.href = 'index.html';
    

    






});