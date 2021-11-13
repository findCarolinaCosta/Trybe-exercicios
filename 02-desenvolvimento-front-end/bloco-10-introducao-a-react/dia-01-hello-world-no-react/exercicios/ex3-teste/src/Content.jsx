import { Component } from "react";
import { conteudos } from "./conteudosData";
import './Content.css'

export default class Content extends Component {
  render() {
    return (
      <div>
        { conteudos.map((assunto) => {
          return (
            <section className='card'>
              <h3 className='title'>O conteúdo é: { assunto.conteudo }</h3>
              <div className='about'>
                  <p>Status: { assunto.status }</p> 
                  <p>Bloco: { assunto.bloco }</p>
              </div>
            </section>
          )
        } ) }
      </div>
    )
  }
}