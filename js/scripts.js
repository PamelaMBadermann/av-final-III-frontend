async function adicionarRecado(event) {
    event.preventDefault();
    
    try {
        const titulo = document.getElementById('tituloRecado').value;
        const descricao = document.getElementById('descricaoRecado').value;

        const { recado } = await axios.post('http://av-final-backend-api.herokuapp.com/', {
            titulo,
            descricao
        });
        
        const listaRecados = document.getElementById('listaRecados');

        console.log('recado adicionado com sucesso!');

        listaRecados.innerHTML += `
                <th scope="row">${recado.id_recado}</th>
                <td>${recado.titulo}</td>
                <td>${recado.descricao}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" id="apagarRecadoBtn" 
                            onclick="apagarRecado(event)" class="btn btn-danger">
                                Apagar
                        </button>
                        <button type="button" class="btn btn-success" 
                            data-toggle="modal" 
                            data-target="#exampleModal">
                                Editar
                        </button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="ModalLabel">
                                    <input type="text" id="novoTitulo" placeholder="Edite o título do recado">
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input type="text" id="novaDescricao" placeholder="Edite a descrição do recado">                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" onclick="editarRecado(event)" class="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>`;
    } catch (error) {
        alert('Erro ao adicionar recado');
        return error;
    }
};

async function editarRecado(event) {
    event.preventDefault();

    try {
        const id_recado = document.getElementById('id_recado').value;
        const titulo = document.getElementById('novoTitulo').value;
        const descricao = document.getElementById('novaDescricao').value;
        
        const { recado } = await axios.put('http://av-final-backend-api.herokuapp.com/', {
            id_recado,
            titulo,
            descricao
        });

        alert('Recado editado com sucesso!')
        console.log('Recado editado com sucesso!');
    } catch (error) {
        alert('Erro ao adicionar recado');
        return error;
    }
};

async function apagarRecado(event) {
    event.preventDefault();

    try {
        const { id_recado } = await axios.delete('http://av-final-backend-api.herokuapp.com/');
    } catch (error) {
        alert('Erro ao apagar recado');
        return error;
    }
};