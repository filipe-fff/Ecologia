import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecario from './componentes/Cabecario'
import MenuBotao from './componentes/MenuBotao'
import MenuLista from './componentes/MenuLista'
import ArtigoLista from './componentes/ArtigoLista'
import Introducao from './componentes/Introducao'
import Colonia from './componentes/Colonia'
import Competicao from './componentes/Competicao'
import Canibarismo from './componentes/Canibarismo'
import Mutualismo from './componentes/Mutualismo'
import Comensarismo from './componentes/Comensarismo'
import Video from './componentes/video'
import Amensarismo from './componentes/Amensarismo'
import Parasitismo from './componentes/Parasitismo'
import Predacao from './componentes/Predacao'
import Competicao2 from './componentes/Competicao2'
import Tabela from './componentes/Tabela'
import Footer from './componentes/Footer'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Cabecario titulo={'Relações Ecologicas'}/>
      <MenuBotao />
      <MenuLista />
      <section className='corpo'>
          <ArtigoLista />
          <main>
              <Introducao />
              <ul>
                  <Colonia />
                  <Competicao />
                  <Canibarismo />
                  <Mutualismo />
                  <Comensarismo />
                  <Video />
                  <Amensarismo />
                  <Parasitismo />
                  <Predacao />
                  <Competicao2 />
              </ul>
              <Tabela />
          </main>
      </section>
      
      <Footer />

  </React.StrictMode>
)
