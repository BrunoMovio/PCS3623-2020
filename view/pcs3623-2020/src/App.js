import React from 'react';
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {route: '', body: [], result: ''};

    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleChangeRoute = this.handleChangeRoute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeBody(event) {
    const props = event.target.value.split(',')
    this.setState({body: props});
  }

  handleChangeRoute(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const body = {
      name: "150  bpm"
    };
    
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "severo-dumont"
          }
        }
      )
      .then((res) => {
        console.log("legal vc criou uma playlist");
      })
      .catch((error) => {
        console.log(error.message);
      });
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="col-25">
            <label for="consulta">Consulta</label>
          </div>
          <div class="col-75">
            <input type="text" id="consulta" name="consulta" placeholder="Insira a consulta" value={this.state.route} onChange={this.handleChangeRoute} />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="parametros">Paramêtros</label>
          </div>
          <div class="col-75">
            <textarea id="parametros" name="parametros" placeholder="Insira os parametros da consulta"  value={this.state.body} onChange={this.handleChangeBody}></textarea>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Realizar Consulta" />
        </div>
        </form>
        <h2>Resultado da Consulta:</h2>
        <p>{this.state.result}</p>
      </div>
    );
  }
}