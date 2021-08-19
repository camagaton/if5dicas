function verifica() {
     if (document.formulario.nome.value.length < 3) {
          alert("Por favor, preencha o nome corretamente.");
          document.formulario.nome.focus;
           return; 
    }
     if (document.formulario.email.value.length <3) {
          alert("Por favor, preencha o email corretamente.");
           return; 
    }
     if (document.formulario.assunto.value.length < 3) {
          alert("Por favor, preencha o assunto corretamente.");
           return; 
    }
     if (document.formulario.mensagem.value.length < 3) {
          alert("Por favor, preencha o mensagem corretamente.");
           return; 
    }
    alert("Obrigado pelo contato... Logo lhe retornaremos!");
    
}