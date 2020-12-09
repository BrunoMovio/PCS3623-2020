import React from 'react';
import Consulta from "./utils/Consulta";
import mapToConsulta from "./utils/mapToConsulta";
import axios from "axios";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {route: 'USER.USER_BY_NAME', body: [], result: ''};

    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleChangeRoute = this.handleChangeRoute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeBody(event) {
    const props = event.target.value.split(',')
    this.setState({body: props});
  }

  handleChangeRoute(event) {
    this.setState({route: event.target.value}); 
  }

  handleSubmit(event) {
    let body = mapToConsulta(this.state.route).body
    const body0 = Object.keys(body)[0]
    const body1 = Object.keys(body)[1]

    if(Object.keys(body).length === 1) {
      body[body0] = this.state.body[0]
    } else  if (Object.keys(body).length === 2) {
      body[body0] = this.state.body[0];
      body[body1] = this.state.body[1];
    }
    console.log(body)

    let url = mapToConsulta(this.state.route).url
    console.log(url)

    axios
    .get(url, {
       body
      })
      .then((resposta) => {
        this.setState({result: resposta.data});
        console.log(resposta.data);
        alert('Uma consulta foi realizada! Confira o resultado abaixo!');
      })
      .catch((err) => {
        this.setState({result: err.message});
        console.log(err.message);
        alert('Opa, não rolou! Veja se isso pode te ajudar a conseguir: ' + err.message);
      });
      
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
            <select id="consulta" name="consulta" value={this.state.route} onChange={this.handleChangeRoute}>
              <option value="USER.USER_BY_NAME">Search Users By Name</option>
              <option value="USER.FOLLOWEDS">Get User Followeds</option>
              <option value="USER.FOLLOWRS">Get User Followers</option>
              <option value="USER.FEED">Get User Feed</option>
              <option value="USER.ALL_USERS">Get All Users</option>
              <option value="POST.POST_BY_NAME">Serach Posts By Name</option>
              <option value="POST.POST_BY_USER">Get Posts By User</option>
              <option value="POST.POST_BY_GROUP_AND_PAGE">Get Posts By Group And Page</option>
              <option value="POST.ALL_POSTS">Get All Posts</option>
              <option value="PAGE.PAGE_BY_NAME">Get Page By Name</option>
              <option value="PAGE.LIKES_BY_PAGE">Gat Likes By Page</option>
              <option value="PAGE.ALL_PAGES">Get All Pages</option>
              <option value="GROUP.USER_BY_GROUP">Get Users by group</option>
              <option value="GROUP.GROUP_BY_ADMIN">Get Groups By User Admin</option>
              <option value="GROUP.ALL_GROUPS">Get All Users</option>
              <option value="EVENT.EVENT_BY_PAGE">Get Event By Page</option>
              <option value="EVENT.EVENT_BY_DATE">Get Event By Date</option>
              <option value="EVENT.ALL_EVENTS">Get All Events</option>
            </select>
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
        <em>URL {mapToConsulta(this.state.route).url}</em>     
        <div> Body
            {Object.keys(mapToConsulta(this.state.route).body).map((item, i) => {
              return (<div><b>{item}</b>  <em>{this.state.body[i]}</em> </div>)
            })}
          </div>
        <p>{Consulta[this.state.result]}</p>
      </div>
    );
  }
}

